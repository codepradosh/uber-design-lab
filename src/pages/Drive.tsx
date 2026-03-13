import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Shield, Car, TrendingUp, Headphones } from "lucide-react";
import carImage from "@/assets/car-street.jpg";

const features = [
  { icon: DollarSign, title: "Earn on your terms", description: "Set your own hours. Drive mornings, evenings, weekends — whatever works for your life." },
  { icon: Clock, title: "Flexible schedule", description: "No minimum hours. No shifts. Open the app when you want to earn, close it when you're done." },
  { icon: Shield, title: "Insurance coverage", description: "Every trip is covered with comprehensive insurance for you and your passengers." },
  { icon: Car, title: "Use your own car", description: "Drive with your personal vehicle. We accept most cars, auto-rickshaws, and two-wheelers." },
  { icon: TrendingUp, title: "Surge pricing benefits", description: "Earn more during peak hours with dynamic pricing. Festivals and rain = higher fares." },
  { icon: Headphones, title: "24/7 driver support", description: "Dedicated support team for drivers. Get help with trips, payments, or account issues anytime." },
];

const steps = [
  { step: "01", title: "Sign up online", description: "Fill out a quick form with your details, vehicle info, and upload your documents." },
  { step: "02", title: "Get verified", description: "We'll verify your license, vehicle registration, and background check within 48 hours." },
  { step: "03", title: "Start earning", description: "Once approved, go online in the TravelInn app and start accepting ride requests." },
];

const faqs = [
  { q: "What documents do I need?", a: "You'll need a valid driving license, vehicle registration certificate (RC), insurance papers, PAN card, and Aadhaar card." },
  { q: "How do I get paid?", a: "Earnings are deposited directly to your bank account weekly. You can also enable daily payouts." },
  { q: "Can I drive an auto-rickshaw?", a: "Yes! We welcome auto-rickshaw drivers in all Maharashtra cities. You'll need a valid commercial license." },
  { q: "Is there a minimum number of rides?", a: "No. There are no minimum ride requirements. Drive as much or as little as you want." },
];

const DrivePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Drive & <span className="text-accent">earn</span><br />on your schedule
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md leading-relaxed">
              Be your own boss. Drive with TravelInn across Maharashtra and earn money on your terms.
            </p>
            <Button className="mt-8 w-fit h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-base rounded-lg">
              Start driving
            </Button>
          </div>
          <div className="relative overflow-hidden">
            <img src={carImage} alt="Driving through Maharashtra" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-1/4" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-foreground py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight">How to get started</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="p-6">
              <span className="font-display text-5xl font-extrabold text-accent">{s.step}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-background">{s.title}</h3>
              <p className="mt-2 text-background/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Why drive with us?</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl bg-secondary border border-border">
              <f.icon size={28} className="text-accent" />
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-foreground py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight">Frequently asked questions</h2>
        <div className="mt-12 max-w-2xl space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-background/10 pb-6">
              <h3 className="font-display text-lg font-bold text-background">{faq.q}</h3>
              <p className="mt-2 text-background/60 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-24 px-8 lg:px-16 xl:px-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground tracking-tight">Start earning today</h2>
        <p className="mt-4 text-accent-foreground/70 text-lg max-w-md mx-auto">Sign up takes less than 5 minutes. Start driving within 48 hours.</p>
        <Button className="mt-8 h-14 px-10 bg-background text-foreground hover:bg-background/90 font-bold text-base rounded-lg">
          Apply to drive
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default DrivePage;
