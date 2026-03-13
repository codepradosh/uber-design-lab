import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "Ride", href: "/ride" },
  { label: "Drive", href: "/drive" },
  { label: "Business", href: "/business" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9782A] origin-left"
        style={{ scaleX }}
      />

      <div className="flex items-center justify-between px-6 lg:px-12 h-[64px]">
        {/* Left: Logo + Nav links */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="font-display text-[1.4rem] font-bold tracking-tight text-white"
          >
            Travel<span className="text-[#E08B3C]">Inn</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[13px] font-medium text-[#D1D1D1]/60 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-[14px] font-medium text-[#D1D1D1]/80 hover:text-white transition-colors duration-200 px-4 py-2"
          >
            Log in
          </Link>

          {/* User icon divider */}
          <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-[#D1D1D1]/60 hover:text-white hover:border-white/30 transition-all duration-200 mx-2">
            <User size={14} />
          </button>

          <Link
            to="/signup"
            className="text-[14px] font-medium text-white border border-white/15 hover:border-white/40 hover:bg-white/[0.04] px-5 py-1.5 rounded-lg transition-all duration-200"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/[0.06] rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 pb-6 space-y-1"
        >
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center h-11 text-base font-medium rounded-lg px-3 transition-all duration-200 ${
                location.pathname === item.href
                  ? "text-white bg-white/[0.06]"
                  : "text-[#D1D1D1]/70 hover:text-white hover:bg-white/[0.04]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.06]">
            <Link
              to="/login"
              className="flex items-center h-11 px-3 text-base font-medium text-[#D1D1D1]/70 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center h-11 border border-white/25 rounded-lg text-white font-semibold hover:bg-white/[0.06] transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
