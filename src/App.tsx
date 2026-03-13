import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLenis } from "@/hooks/useLenis";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import RidePage from "./pages/Ride.tsx";
import DrivePage from "./pages/Drive.tsx";
import BusinessPage from "./pages/Business.tsx";
import BookingPage from "./pages/Booking.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";

const queryClient = new QueryClient();

const AppInner = () => {
  useLenis();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ride" element={<RidePage />} />
        <Route path="/drive" element={<DrivePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppInner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
