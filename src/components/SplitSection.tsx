import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import carImage from "@/assets/car-street-premium.png";

const perks = [
  { icon: TrendingUp, label: "Earn up to ₹40,000/mo" },
  { icon: Shield, label: "Fully insured rides" },
  { icon: Clock, label: "Work on your schedule" },
];

const SplitSection = () => {
  return (
    <section className="bg-foreground">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <motion.div
          className="aspect-square lg:aspect-auto overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={carImage}
            alt="Car driving through scenic Maharashtra landscape"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight leading-tight"
          >
            Drive when you want, make what you need
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="mt-6 text-background/60 text-base leading-relaxed max-w-md"
          >
            Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through TravelInn.
          </motion.p>

          {/* Perks — staggered */}
          <motion.div
            className="mt-8 flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.label}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <perk.icon size={15} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-background/80">{perk.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <Button
              className="h-12 px-8 text-sm font-bold rounded-lg bg-accent text-accent-foreground hover:bg-accent/85 transition-all duration-200"
              asChild
            >
              <Link to="/drive">Get started</Link>
            </Button>
            <a
              href="/login"
              style={{ color: "rgba(0,0,0,0.55)", textDecoration: "underline", textUnderlineOffset: "4px", fontSize: "0.875rem", fontWeight: 600 }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,0,0,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.55)")}
            >
              Already have an account? Sign in
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
