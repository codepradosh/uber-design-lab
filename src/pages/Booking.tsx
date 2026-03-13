import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BookingMap from "@/components/BookingMap";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, IndianRupee, CheckCircle2, Car, ArrowLeft } from "lucide-react";

const RIDE_OPTIONS = [
  { id: "economy", label: "Economy", rate: 12, icon: "🚗", eta: "4 min" },
  { id: "comfort", label: "Comfort", rate: 16, icon: "🚙", eta: "6 min" },
  { id: "premium", label: "Premium", rate: 24, icon: "🖤", eta: "8 min" },
];

function haversineDistance(a: [number, number], b: [number, number]) {
  const toRad = (x: number) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b[0] - a[0]);
  const dLon = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

const BookingPage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [selectedRide, setSelectedRide] = useState("comfort");
  const [booked, setBooked] = useState(false);

  const pickup: [number, number] | undefined = params.get("plat") && params.get("plng")
    ? [parseFloat(params.get("plat")!), parseFloat(params.get("plng")!)]
    : undefined;
  const dropoff: [number, number] | undefined = params.get("dlat") && params.get("dlng")
    ? [parseFloat(params.get("dlat")!), parseFloat(params.get("dlng")!)]
    : undefined;

  const pickupName = params.get("pname") || "Pickup";
  const dropoffName = params.get("dname") || "Drop-off";

  const distance = useMemo(() => {
    if (pickup && dropoff) return haversineDistance(pickup, dropoff);
    return 0;
  }, [pickup, dropoff]);

  const selectedOption = RIDE_OPTIONS.find((r) => r.id === selectedRide)!;
  const price = Math.max(50, Math.round(distance * selectedOption.rate + 30));
  const duration = Math.max(5, Math.round(distance * 2.5));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 grid lg:grid-cols-2">
        {/* Map */}
        <div className="relative min-h-[50vh] lg:min-h-0">
          <BookingMap pickupCoords={pickup} dropoffCoords={dropoff} />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col bg-background border-l border-border">
          {!booked ? (
            <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">
              {/* Back */}
              <button onClick={() => navigate("/")} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                <ArrowLeft size={16} /> Back
              </button>

              {/* Route summary */}
              <div className="space-y-4">
                <h1 className="font-display text-2xl font-bold text-foreground">Your trip</h1>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-3 h-3 rounded-full border-2 border-accent bg-transparent shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Pickup</p>
                      <p className="text-sm text-foreground font-medium line-clamp-1">{pickupName}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-3 h-3 rounded-sm bg-accent shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Drop-off</p>
                      <p className="text-sm text-foreground font-medium line-clamp-1">{dropoffName}</p>
                    </div>
                  </div>
                </div>

                {distance > 0 && (
                  <div className="flex gap-6 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Navigation size={14} className="text-accent" />
                      <span>{distance.toFixed(1)} km</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} className="text-accent" />
                      <span>~{duration} min</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Ride options */}
              <div className="space-y-3">
                <h2 className="font-display text-lg font-bold text-foreground">Choose your ride</h2>
                {RIDE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedRide(opt.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      selectedRide === opt.id
                        ? "border-accent bg-accent/10"
                        : "border-border bg-secondary hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{opt.icon}</span>
                      <div className="text-left">
                        <p className="font-display font-bold text-foreground">{opt.label}</p>
                        <p className="text-xs text-muted-foreground">{opt.eta} away</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-foreground flex items-center gap-1">
                        <IndianRupee size={14} />
                        {distance > 0 ? price : "--"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Price breakdown */}
              {distance > 0 && (
                <div className="space-y-2 border-t border-border pt-4">
                  <h3 className="font-display text-sm font-bold text-foreground">Price breakdown</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Base fare</span><span>₹30</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Distance ({distance.toFixed(1)} km × ₹{selectedOption.rate})</span>
                    <span>₹{Math.round(distance * selectedOption.rate)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-foreground border-t border-border pt-2 mt-2">
                    <span>Total</span><span>₹{price}</span>
                  </div>
                </div>
              )}

              <Button
                onClick={() => setBooked(true)}
                disabled={!pickup || !dropoff}
                className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-base rounded-lg"
              >
                Confirm booking — {distance > 0 ? `₹${price}` : "Select locations"}
              </Button>
            </div>
          ) : (
            /* Booking confirmed */
            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle2 size={40} className="text-accent" />
              </div>
              <h1 className="font-display text-3xl font-extrabold text-foreground">Booking Confirmed!</h1>
              <p className="text-muted-foreground max-w-sm">
                Your {selectedOption.label} ride has been booked. A driver will arrive at your pickup in approximately {selectedOption.eta}.
              </p>
              <div className="bg-secondary rounded-xl p-6 w-full max-w-sm space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ride type</span>
                  <span className="text-foreground font-semibold">{selectedOption.icon} {selectedOption.label}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Distance</span>
                  <span className="text-foreground font-semibold">{distance.toFixed(1)} km</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ETA</span>
                  <span className="text-foreground font-semibold">~{duration} min</span>
                </div>
                <div className="flex justify-between text-sm border-t border-border pt-3">
                  <span className="text-muted-foreground">Total fare</span>
                  <span className="text-accent font-bold text-lg">₹{price}</span>
                </div>
              </div>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="mt-4 h-12 px-8 border-border text-foreground hover:bg-secondary font-semibold rounded-lg"
              >
                Back to home
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
