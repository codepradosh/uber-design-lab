import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Users, Zap, Star, Circle, Crosshair, MapPin } from "lucide-react";
import LocationInput from "./LocationInput";
import mumbaiHero from "../assets/aaa.png";

const rideTypes = [
  { icon: Car, label: "Economy", price: "₹120" },
  { icon: Zap, label: "Premium", price: "₹210" },
  { icon: Users, label: "Carpool", price: "₹80" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupCoords, setPickupCoords] = useState<[number, number] | undefined>();
  const [dropoffCoords, setDropoffCoords] = useState<[number, number] | undefined>();
  const [selectedRide, setSelectedRide] = useState(0);

  const handleRequest = () => {
    const params = new URLSearchParams();
    if (pickupCoords) {
      params.set("plat", pickupCoords[0].toString());
      params.set("plng", pickupCoords[1].toString());
      params.set("pname", pickup.split(",")[0]);
    }
    if (dropoffCoords) {
      params.set("dlat", dropoffCoords[0].toString());
      params.set("dlng", dropoffCoords[1].toString());
      params.set("dname", dropoff.split(",")[0]);
    }
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen bg-[#0B0B0B] overflow-hidden">
      {/* Full-bleed background map image */}
      <div className="absolute inset-0 z-0 bg-[#0B0B0B]">
        {/* Container for the image to restrict it to the right half on large screens, matching reference */}
        <div className="absolute inset-0 lg:left-[20%] right-0">
          <img
            src={mumbaiHero}
            alt="Aerial night view of Mumbai city"
            className="w-full h-full object-cover lg:object-contain object-right opacity-90 scale-100"
          />
        </div>
        
        {/* Gradient overlays to smoothly blend the image into the dark background, reduced drastically to expose city map behind glass UI */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/40 via-20% lg:via-40% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/20 pointer-events-none" />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-[64px]">
        {/* LEFT: Text + Booking card */}
        <div className="flex flex-col px-6 lg:px-12 pt-6 lg:pt-2 xl:pt-4 pb-[160px] lg:pb-[180px] lg:w-[50%] xl:w-[45%]">
          {/* Headline - Added slight negative left margin to visually align the 'G' with the logo */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[56px] md:text-[64px] xl:text-[76px] font-bold text-white tracking-[-0.04em] leading-[1.05] -ml-1"
          >
            Go anywhere
            <br />
            with <span className="text-[#C9782A]">TravelInn</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="mt-6 text-[15px] lg:text-[16px] text-[#A3A3A3] max-w-[420px] leading-[1.6]"
          >
            Your ride across Maharashtra — from Mumbai to Pune and beyond. Book in seconds, travel in comfort.
          </motion.p>

          {/* Booking widget */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="mt-10 w-full max-w-[440px]"
          >
            {/* Glass card matching detailed reference */}
            <div
              className="rounded-[16px] p-5 md:p-6"
              style={{
                background: "linear-gradient(155deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(11, 11, 11, 0.15)",
                backdropFilter: "blur(32px) saturate(120%)",
                WebkitBackdropFilter: "blur(32px) saturate(120%)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6), inset 0 2px 20px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              {/* Route inputs */}
              <div className="relative flex flex-col gap-3">
                {/* Vertical line connecting the dots */}
                <div className="absolute left-[7px] top-[26px] bottom-[26px] w-[2px] bg-gradient-to-b from-[#A3A3A3]/20 via-[#A3A3A3]/20 to-[#A3A3A3]/20" />

                {/* Pickup */}
                <div className="relative">
                  <LocationInput
                    placeholder="Current location"
                    value={pickup}
                    onChange={(val, coords) => {
                      setPickup(val);
                      if (coords) setPickupCoords(coords);
                    }}
                    icon={<div className="w-[12px] h-[12px] rounded-full border-[2px] border-[#E08B3C] bg-transparent" />}
                    innerIcon={<Crosshair size={14} className="text-[#A3A3A3]" />}
                    transparentBg={true}
                  />
                </div>

                {/* Dropoff */}
                <div className="relative">
                  <LocationInput
                    placeholder="Enter drop-off location"
                    value={dropoff}
                    onChange={(val, coords) => {
                      setDropoff(val);
                      if (coords) setDropoffCoords(coords);
                    }}
                    icon={<div className="w-[10px] h-[10px] rounded-full bg-[#E08B3C]" />}
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleRequest}
                className="mt-6 w-full h-[54px] rounded-[10px] font-semibold text-[15px] transition-all duration-200 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(90deg, #A85D1A 0%, #D28639 50%, #A85D1A 100%)",
                  boxShadow: "0 4px 14px rgba(201,120,42,0.15)",
                  color: "#FFFFFF",
                }}
              >
                <span className="relative z-10">Request a ride →</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </button>

              {/* Ride type cards (single container with dividers) */}
              <div className="mt-5 flex items-stretch justify-between rounded-[12px] p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {rideTypes.map((ride, i) => (
                  <div key={ride.label} className="flex-1 flex items-center">
                    <button
                      onClick={() => setSelectedRide(i)}
                      className="group relative w-full rounded-lg py-2 flex flex-col items-center gap-[4px] transition-all duration-200"
                      style={{
                        background: selectedRide === i ? "rgba(255,255,255,0.06)" : "transparent",
                      }}
                    >
                      <ride.icon
                        size={18}
                        className={`transition-colors duration-200 ${
                          selectedRide === i ? "text-[#E6E6E6]" : "text-[#A3A3A3]"
                        }`}
                      />
                      <span className={`text-[13px] font-semibold ${selectedRide === i ? "text-white" : "text-[#E6E6E6]"}`}>
                        {ride.label}
                      </span>
                      <span className="text-[12px] text-[#A3A3A3] font-medium">₹{ride.price}</span>
                    </button>
                    {/* Divider except for last item */}
                    {i < rideTypes.length - 1 && (
                      <div className="w-px h-10 bg-white/10 mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: empty — image fills behind via absolute bg */}
        <div className="hidden lg:block lg:w-[48%] xl:w-[52%]" />
      </div>

      {/* Trust bar — pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
      >
        <div
          className="mx-4 mb-4 lg:mx-12 lg:mb-8 w-full max-w-[1400px] rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.01) 100%), rgba(11, 11, 11, 0.05)",
            backdropFilter: "blur(32px) saturate(140%)",
            WebkitBackdropFilter: "blur(32px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.7), inset 0 1px 24px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          <TrustItem
            icon={<Star size={18} className="text-[#E08B3C] fill-[#E08B3C]" />}
            value="4.8"
            label="Rated 4.8 (based on 12,000+ rides)"
          />
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <TrustItem
            icon={<Car size={18} className="text-[#D1D1D1]/60" />}
            value="12,000+"
            label="rides completed"
          />
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <TrustItem
            icon={<MapPin size={18} className="text-[#D1D1D1]/60" />}
            value=""
            label="Available across Maharashtra"
          />
        </div>
      </motion.div>
    </section>
  );
};

const TrustItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center justify-center flex-shrink-0">{icon}</div>
    <div className="flex items-center justify-center gap-2">
      {value && (
        <span className="text-white font-semibold text-[15px]">{value}</span>
      )}
      <span className="text-[#D1D1D1]/60 text-[13px]">{label}</span>
    </div>
  </div>
);

export default Hero;
