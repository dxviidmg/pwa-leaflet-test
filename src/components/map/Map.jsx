import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const container = L.DomUtil.get("mapid");

    // Si ya existe un mapa, lo destruye
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("mapid").setView([20.273142, -98.9469088], 15);

    // IMPORTANTE → Usa la URL dinámica, no un tile fijo
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      subdomains: ["a", "b", "c"],
      attribution: "© OpenStreetMap",
    }).addTo(map);

    L.marker([20.273142, -98.9469088])
      .addTo(map)
      .bindPopup("A1");

      L.marker([20.2750, -98.9400])
      .addTo(map)
      .bindPopup("Segundo punto");
      
  }, []);

  return <div id="mapid" style={{ height: "400px", width: "100%" }}></div>;
}
