import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Shield, Clock, CreditCard, MapPin, Star, Users, Zap } from "lucide-react";
import rideImage from "@/assets/ride-phone.jpg";

const features = [
  { icon: Car, title: "Multiple ride options", description: "Choose from Economy, Comfort, Premium, or XL to match your budget and style." },
  { icon: Shield, title: "Safe & secure", description: "Verified drivers, real-time trip sharing, and 24/7 safety support across Maharashtra." },
  { icon: Clock, title: "Schedule ahead", description: "Book rides up to 30 days in advance. Perfect for early flights or important meetings." },
  { icon: CreditCard, title: "Easy payments", description: "Pay with UPI, cards, wallets, or cash. Split fares with friends effortlessly." },
  { icon: MapPin, title: "City-wide coverage", description: "From Mumbai locals to Pune expressway — we cover every corner of Maharashtra." },
  { icon: Star, title: "Rate your experience", description: "Help us improve by rating your driver. Top-rated drivers get priority bookings." },
];

const faqs = [
  { q: "How do I book a ride?", a: "Open TravelInn, enter your pickup and drop-off locations, choose your ride type, and tap 'Request now'. A driver will be matched within seconds." },
  { q: "What cities are covered?", a: "We currently operate across all major cities in Maharashtra including Mumbai, Pune, Nashik, Nagpur, Aurangabad, and more." },
  { q: "Can I schedule a ride in advance?", a: "Yes! You can schedule rides up to 30 days in advance. Just tap 'Schedule for later' when booking." },
  { q: "What payment methods are accepted?", a: "We accept UPI (GPay, PhonePe), credit/debit cards, Paytm wallet, and cash payments." },
];

const RidePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Your ride,<br />your <span className="text-accent">way</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md leading-relaxed">
              Request a ride in seconds. Choose from multiple options across Maharashtra at prices that work for everyone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-base rounded-lg">
                Request a ride
              </Button>
              <Button variant="outline" className="h-14 px-8 text-base font-semibold rounded-lg border-border text-foreground hover:bg-secondary">
                See pricing
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img src={rideImage} alt="Booking a ride in Maharashtra" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-1/4" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-foreground py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight">Why ride with TravelInn?</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl bg-background/5 border border-background/10">
              <f.icon size={28} className="text-accent" />
              <h3 className="mt-4 font-display text-xl font-bold text-background">{f.title}</h3>
              <p className="mt-2 text-background/60 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Frequently asked questions</h2>
        <div className="mt-12 max-w-2xl space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-border pb-6">
              <h3 className="font-display text-lg font-bold text-foreground">{faq.q}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-24 px-8 lg:px-16 xl:px-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground tracking-tight">Ready to ride?</h2>
        <p className="mt-4 text-accent-foreground/70 text-lg max-w-md mx-auto">Download the app or book from our website. Your next ride is just a tap away.</p>
        <Button className="mt-8 h-14 px-10 bg-background text-foreground hover:bg-background/90 font-bold text-base rounded-lg">
          Get started now
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default RidePage;
