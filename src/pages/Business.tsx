import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, BarChart3, Users, CreditCard, Globe, Headphones } from "lucide-react";

const features = [
  { icon: Building2, title: "Corporate accounts", description: "Centralized billing, employee ride management, and custom policies for your organization." },
  { icon: BarChart3, title: "Analytics dashboard", description: "Track spending, ride patterns, and usage across departments with detailed reports." },
  { icon: Users, title: "Team management", description: "Add or remove employees, set ride budgets, and define travel policies in one place." },
  { icon: CreditCard, title: "Simplified billing", description: "One monthly invoice for all rides. No more expense reports or reimbursement hassles." },
  { icon: Globe, title: "Maharashtra-wide", description: "Coverage across all major cities. Perfect for companies with offices in Mumbai, Pune, and beyond." },
  { icon: Headphones, title: "Dedicated support", description: "Priority customer support with a dedicated account manager for enterprise clients." },
];

const plans = [
  { name: "Starter", price: "Free", desc: "For small teams", features: ["Up to 10 employees", "Monthly invoicing", "Basic analytics", "Email support"] },
  { name: "Business", price: "₹4,999/mo", desc: "For growing companies", features: ["Up to 100 employees", "Department budgets", "Advanced analytics", "Priority support"], popular: true },
  { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Unlimited employees", "Custom policies", "API access", "Dedicated manager"] },
];

const faqs = [
  { q: "How does corporate billing work?", a: "All employee rides are charged to your company account. You receive one consolidated invoice monthly with detailed breakdowns by employee and department." },
  { q: "Can I set ride budgets?", a: "Yes. You can set daily, weekly, or monthly ride budgets per employee or per department. Once the limit is reached, employees pay out of pocket." },
  { q: "Is there a minimum company size?", a: "No. Our Starter plan is free and works for teams as small as 2 people." },
  { q: "How do employees join?", a: "Invite employees via email. They download the TravelInn app, accept the invite, and their rides are automatically billed to the company." },
];

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 min-h-[70vh] flex items-center px-8 lg:px-16 xl:px-24">
        <div className="max-w-2xl py-16">
          <span className="text-accent font-display font-bold text-sm tracking-widest uppercase">TravelInn for Business</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            Move your team<br /><span className="text-accent">forward</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-md leading-relaxed">
            Simplify corporate travel across Maharashtra. One platform to manage rides, control costs, and keep your team moving.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-base rounded-lg">
              Get started free
            </Button>
            <Button variant="outline" className="h-14 px-8 text-base font-semibold rounded-lg border-border text-foreground hover:bg-secondary">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-foreground py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight">Everything your business needs</h2>
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

      {/* Pricing */}
      <section className="py-24 px-8 lg:px-16 xl:px-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Simple pricing</h2>
        <p className="mt-4 text-muted-foreground text-lg">Choose a plan that fits your company size.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-xl border ${plan.popular ? "border-accent bg-accent/5" : "border-border bg-secondary"} relative`}>
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">Most popular</span>
              )}
              <h3 className="font-display text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.desc}</p>
              <p className="mt-4 font-display text-4xl font-extrabold text-foreground">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 w-full h-12 font-bold rounded-lg ${plan.popular ? "bg-accent text-accent-foreground hover:bg-accent/85" : "bg-foreground text-primary-foreground hover:bg-foreground/90"}`}>
                {plan.price === "Custom" ? "Contact sales" : "Get started"}
              </Button>
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
        <h2 className="font-display text-4xl md:text-5xl font-bold text-accent-foreground tracking-tight">Ready to move your business?</h2>
        <p className="mt-4 text-accent-foreground/70 text-lg max-w-md mx-auto">Join hundreds of Maharashtra companies using TravelInn for Business.</p>
        <Button className="mt-8 h-14 px-10 bg-background text-foreground hover:bg-background/90 font-bold text-base rounded-lg">
          Start for free
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPage;
