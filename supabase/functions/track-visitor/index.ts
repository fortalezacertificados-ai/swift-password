import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Create Supabase client with service role key to bypass RLS
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const today = new Date().toISOString().split('T')[0]
    
    console.log('Tracking visitor for date:', today)

    // Try to get today's record
    const { data: existingRecord, error: selectError } = await supabaseAdmin
      .from('daily_visitors')
      .select('*')
      .eq('visit_date', today)
      .maybeSingle()

    if (selectError) {
      console.error('Error fetching visitor record:', selectError)
      throw selectError
    }

    let count = 1

    if (existingRecord) {
      // Update existing record
      count = existingRecord.count + 1
      const { error: updateError } = await supabaseAdmin
        .from('daily_visitors')
        .update({ count })
        .eq('visit_date', today)

      if (updateError) {
        console.error('Error updating visitor count:', updateError)
        throw updateError
      }
      
      console.log('Updated visitor count:', count)
    } else {
      // Insert new record for today
      const { error: insertError } = await supabaseAdmin
        .from('daily_visitors')
        .insert({ visit_date: today, count: 1 })

      if (insertError) {
        console.error('Error inserting visitor record:', insertError)
        throw insertError
      }
      
      console.log('Created new visitor record with count: 1')
    }

    return new Response(
      JSON.stringify({ count }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in track-visitor function:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})