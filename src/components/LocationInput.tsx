import { useState, useRef, useEffect, useCallback } from "react";

interface LocationResult {
  display_name: string;
  lat: string;
  lon: string;
}

interface LocationInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string, coords?: [number, number]) => void;
  icon: React.ReactNode;
  innerIcon?: React.ReactNode;
  transparentBg?: boolean;
}

const LocationInput = ({ placeholder, value, onChange, icon, innerIcon, transparentBg }: LocationInputProps) => {
  const [suggestions, setSuggestions] = useState<LocationResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const search = useCallback((query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=in&limit=5`,
          { headers: { "Accept-Language": "en" } }
        );
        const data: LocationResult[] = await res.json();
        setSuggestions(data);
        setShowDropdown(data.length > 0);
      } catch {
        setSuggestions([]);
      }
    }, 350);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full flex items-center">
      <div className="w-[16px] flex items-center justify-center flex-shrink-0 z-10">
        {icon}
      </div>
      <div className="relative flex-1 ml-[22px]">
        {innerIcon && (
          <div className="absolute left-[14px] top-0 bottom-0 z-10 flex items-center justify-center">
            {innerIcon}
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            search(e.target.value);
          }}
          onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
          className={`w-full h-[48px] pr-3 text-[15px] focus:outline-none transition-all rounded-[10px] pl-[44px] ${
            transparentBg
              ? "bg-transparent text-white font-medium placeholder:text-[#A3A3A3]"
              : "bg-[#141414]/90 text-[#D1D1D1] font-medium placeholder:text-[#888888] border border-white/[0.03] focus:bg-[#1C1C1C]"
          }`}
        />
        {showDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors border-b border-border last:border-0"
                onClick={() => {
                  onChange(s.display_name, [parseFloat(s.lat), parseFloat(s.lon)]);
                  setShowDropdown(false);
                }}
              >
                <span className="line-clamp-2">{s.display_name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationInput;
