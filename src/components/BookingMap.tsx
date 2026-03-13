import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface BookingMapProps {
  pickupCoords?: [number, number];
  dropoffCoords?: [number, number];
}

const BookingMap = ({ pickupCoords, dropoffCoords }: BookingMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    mapInstance.current = L.map(mapRef.current, {
      center: [19.076, 72.8777],
      zoom: 12,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 20,
    }).addTo(mapInstance.current);

    L.control.zoom({ position: "bottomright" }).addTo(mapInstance.current);

    // Force map to recalculate size after render
    setTimeout(() => {
      mapInstance.current?.invalidateSize();
    }, 100);

    return () => {
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    if (!mapInstance.current) return;
    const map = mapInstance.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });

    const pickupIcon = L.divIcon({
      html: '<div style="width:14px;height:14px;background:white;border-radius:50%;border:3px solid #F5A623;"></div>',
      iconSize: [14, 14],
      className: "",
    });

    const dropoffIcon = L.divIcon({
      html: '<div style="width:14px;height:14px;background:#F5A623;border-radius:2px;border:2px solid white;"></div>',
      iconSize: [14, 14],
      className: "",
    });

    if (pickupCoords) {
      L.marker(pickupCoords, { icon: pickupIcon }).addTo(map);
    }
    if (dropoffCoords) {
      L.marker(dropoffCoords, { icon: dropoffIcon }).addTo(map);
    }

    if (pickupCoords && dropoffCoords) {
      L.polyline([pickupCoords, dropoffCoords], {
        color: "#F5A623",
        weight: 3,
        dashArray: "8, 8",
      }).addTo(map);
      map.fitBounds([pickupCoords, dropoffCoords], { padding: [40, 40] });
    } else if (pickupCoords) {
      map.setView(pickupCoords, 14);
    } else if (dropoffCoords) {
      map.setView(dropoffCoords, 14);
    }
  }, [pickupCoords, dropoffCoords]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full"
      style={{ minHeight: 300, background: "#f0f0f0" }}
    />
  );
};

export default BookingMap;
