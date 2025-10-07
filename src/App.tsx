import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PasswordStrengthChecker from "./pages/PasswordStrengthChecker";
import PasswordArticle from "./pages/PasswordArticle";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Articles from "./pages/Articles";
import UnbreakablePassword2025 from "./pages/articles/UnbreakablePassword2025";
import TwoFactorAuthentication from "./pages/articles/TwoFactorAuthentication";
import CommonPasswordMistakes from "./pages/articles/CommonPasswordMistakes";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import ArticleEditor from "./pages/ArticleEditor";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/strength-checker" element={<PasswordStrengthChecker />} />
            <Route path="/password-guide" element={<PasswordArticle />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/unbreakable-password-2025" element={<UnbreakablePassword2025 />} />
            <Route path="/articles/two-factor-authentication-guide" element={<TwoFactorAuthentication />} />
            <Route path="/articles/common-password-mistakes" element={<CommonPasswordMistakes />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/article/:id" element={<ArticleEditor />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
