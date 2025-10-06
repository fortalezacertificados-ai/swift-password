-- Create table for daily visitor count
CREATE TABLE IF NOT EXISTS public.daily_visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visit_date DATE NOT NULL DEFAULT CURRENT_DATE,
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create unique index on visit_date to ensure only one record per day
CREATE UNIQUE INDEX IF NOT EXISTS idx_daily_visitors_date ON public.daily_visitors(visit_date);

-- Enable Row Level Security
ALTER TABLE public.daily_visitors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read visitor counts
CREATE POLICY "Anyone can view visitor counts" 
ON public.daily_visitors 
FOR SELECT 
USING (true);

-- Create policy to allow the service role to insert/update
-- (will be used by edge function)
CREATE POLICY "Service role can manage visitor counts" 
ON public.daily_visitors 
FOR ALL 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_daily_visitors_updated_at
BEFORE UPDATE ON public.daily_visitors
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();