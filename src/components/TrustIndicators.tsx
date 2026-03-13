import { Shield, Star, Clock, Users, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "2M+", label: "Happy riders" },
  { icon: MapPin, value: "50+", label: "Cities in Maharashtra" },
  { icon: Clock, value: "< 5 min", label: "Avg. pickup time" },
  { icon: Star, value: "4.8", label: "App rating" },
];

const trustBadges = [
  { icon: Shield, title: "Verified drivers", desc: "Background-checked & trained drivers with valid licenses" },
  { icon: Award, title: "Insured rides", desc: "Every trip is covered with comprehensive ride insurance" },
  { icon: Clock, title: "24/7 support", desc: "Round-the-clock customer support for any issue" },
];

const testimonials = [
  { name: "Priya S.", city: "Mumbai", text: "TravelInn is my daily commute partner. Always on time, clean cars, polite drivers.", rating: 5, initials: "PS", color: "#e07d24" },
  { name: "Rahul M.", city: "Pune", text: "Best cab service in Maharashtra. The premium sedans are incredibly comfortable.", rating: 5, initials: "RM", color: "#c96820" },
  { name: "Anita K.", city: "Nashik", text: "I feel safe travelling late at night. The SOS feature and live tracking give me peace of mind.", rating: 5, initials: "AK", color: "#f0943b" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const TrustIndicators = () => {
  return (
    <>
      {/* Stats bar */}
      <section className="bg-background py-14 px-8 lg:px-16 xl:px-24 border-t border-border">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 border border-accent/15 mb-4 transition-all duration-300 group-hover:bg-accent/15 group-hover:shadow-[0_0_20px_hsl(28_95%_55%/0.15)]">
                <stat.icon size={20} className="text-accent" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Safety & trust badges */}
      <section className="bg-foreground py-24 px-8 lg:px-16 xl:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight"
        >
          Your safety, our priority
        </motion.h2>
        <motion.div
          className="mt-12 grid sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 rounded-xl bg-background/5 border border-background/10 transition-shadow duration-300 hover:shadow-lg cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                <badge.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-background">{badge.title}</h3>
              <p className="mt-2 text-sm text-background/60 leading-relaxed">{badge.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-24 px-8 lg:px-16 xl:px-24 border-t border-border">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight"
        >
          What riders say
        </motion.h2>
        <motion.div
          className="mt-12 grid sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl bg-card border border-border transition-shadow duration-300 hover:border-white/10 cursor-default"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default TrustIndicators;
