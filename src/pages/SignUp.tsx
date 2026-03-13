import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-accent items-center justify-center px-16">
        <div>
          <Link to="/" className="font-display text-5xl font-extrabold text-accent-foreground tracking-tight">
            Travel<span className="text-background">Inn</span>
          </Link>
          <p className="mt-4 text-accent-foreground/70 text-lg max-w-sm leading-relaxed">
            Join thousands of riders and drivers across Maharashtra. Your journey starts here.
          </p>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden font-display text-3xl font-extrabold text-foreground tracking-tight">
            Travel<span className="text-accent">Inn</span>
          </Link>

          <h1 className="mt-8 lg:mt-0 font-display text-3xl font-extrabold text-foreground">Create your account</h1>
          <p className="mt-2 text-muted-foreground text-sm">Start riding across Maharashtra in minutes</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full h-12 px-4 bg-secondary text-foreground text-sm rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent border border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 px-4 bg-secondary text-foreground text-sm rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent border border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone number</label>
              <div className="flex gap-2">
                <span className="flex items-center justify-center h-12 px-3 bg-secondary text-muted-foreground text-sm rounded-lg border border-border">+91</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="flex-1 h-12 px-4 bg-secondary text-foreground text-sm rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent border border-border"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full h-12 px-4 pr-12 bg-secondary text-foreground text-sm rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent border border-border"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-base rounded-lg">
              Create account
            </Button>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs"><span className="px-3 bg-background text-muted-foreground">or sign up with</span></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-12 border-border text-foreground hover:bg-secondary font-medium">
              Google
            </Button>
            <Button variant="outline" className="h-12 border-border text-foreground hover:bg-secondary font-medium">
              Apple
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:text-accent/80 font-semibold">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
