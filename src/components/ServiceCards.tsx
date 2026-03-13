import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import rideImage from "@/assets/ride-phone.jpg";
import carImage from "@/assets/car-street.jpg";

const services = [
  {
    title: "Ride",
    description: "Go anywhere across Maharashtra. Request a ride, hop in, and go.",
    image: rideImage,
    alt: "Woman booking a ride on her phone in an Indian city",
    cta: "Learn more",
    href: "/ride",
    badge: "Most popular",
  },
  {
    title: "Drive",
    description: "Make money on your schedule. Drive when you want, earn what you need.",
    image: carImage,
    alt: "Car driving through scenic Maharashtra road",
    cta: "Start earning",
    href: "/drive",
    badge: null,
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-foreground py-28 px-8 lg:px-16 xl:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl md:text-5xl font-bold text-background tracking-tight"
      >
        Suggestions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        className="mt-3 text-background/60 text-base max-w-lg leading-relaxed"
      >
        Whether you're looking to ride or earn, TravelInn has you covered across Maharashtra.
      </motion.p>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <motion.a
            key={service.title}
            href={service.href}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-background/10 bg-background/5 block transition-all duration-300 hover:border-background/20 hover:shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Badge */}
            {service.badge && (
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-white/20 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] font-bold text-white tracking-wide uppercase">{service.badge}</span>
              </div>
            )}

            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative p-7">
              <h3 className="font-display text-2xl font-bold text-background">{service.title}</h3>
              <p className="mt-2 text-background/60 text-sm leading-relaxed max-w-xs">{service.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-300">
                {service.cta}
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent/30 group-hover:w-full transition-all duration-500 rounded-full" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
