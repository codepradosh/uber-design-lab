import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, Clock, MapPin, ShieldCheck, Bike, Wallet } from "lucide-react";
import deliveryImage from "@/assets/delivery.jpg";

const features = [
  { icon: Package, title: "Fast delivery", description: "Get food, groceries, and packages delivered to your doorstep in minutes across Maharashtra." },
  { icon: Clock, title: "Real-time tracking", description: "Track your delivery in real-time on the map. Know exactly when your order arrives." },
  { icon: MapPin, title: "Wide coverage", description: "Delivering across Mumbai, Pune, Nashik, Nagpur, and all major Maharashtra cities." },
  { icon: ShieldCheck, title: "Safe handling", description: "Trained delivery partners handle your packages and food with care, rain or shine." },
  { icon: Bike, title: "Become a delivery partner", description: "Own a bike or cycle? Join as a delivery partner and earn on your schedule." },
  { icon: Wallet, title: "No hidden fees", description: "Transparent pricing with no surge on delivery. What you see is what you pay." },
];

const categories = [
  { name: "Food", emoji: "🍛", desc: "Restaurant meals delivered hot" },
  { name: "Groceries", emoji: "🛒", desc: "Fresh produce & essentials" },
  { name: "Packages", emoji: "📦", desc: "Send parcels across the city" },
  { name: "Pharmacy", emoji: "💊", desc: "Medicines within 30 minutes" },
];

const faqs = [
  { q: "How fast is delivery?", a: "Food deliveries typically take 25-40 minutes. Grocery and package deliveries depend on distance but average 30-60 minutes." },
  { q: "Can I become a delivery partner?", a: "Yes! If you have a two-wheeler or bicycle, sign up as a delivery partner. No car needed." },
  { q: "Is there a minimum order value?", a: "Minimum order values vary by restaurant and category. Most start at ₹99." },
  { q: "What if my order is damaged?", a: "We have a hassle-free refund policy. Report any issue within 1 hour of delivery for a full refund." },
];

const DeliverPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Anything<br /><span className="text-accent">delivered</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-md leading-relaxed">
              Food, groceries, packages — get anything delivered to your door across Maharashtra.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-base rounded-lg">
                Order now
              </Button>
              <Button variant="outline" className="h-14 px-8 text-base font-semibold rounded-lg border-border text-foreground hover:bg-secondary">
                Become a partner
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img src={deliveryImage} alt="Delivery in Maharashtra market" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-1/4" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-foreground py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight">What we deliver</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="p-8 rounded-xl bg-background/5 border border-background/10 text-center hover:bg-background/10 transition-colors cursor-pointer">
              <span className="text-5xl">{cat.emoji}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-background">{cat.name}</h3>
              <p className="mt-2 text-background/60 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Why choose TravelInn Deliver?</h2>
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
        <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground tracking-tight">Get it delivered</h2>
        <p className="mt-4 text-accent-foreground/70 text-lg max-w-md mx-auto">From your favourite restaurant to your front door. Start ordering today.</p>
        <Button className="mt-8 h-14 px-10 bg-background text-foreground hover:bg-background/90 font-bold text-base rounded-lg">
          Start ordering
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default DeliverPage;
