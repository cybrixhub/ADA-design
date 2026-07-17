"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { projectCoords } from "@/lib/project-coords";

const PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="24" height="36">
  <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24s12-15 12-24C24 5.373 18.627 0 12 0z"
        fill="#C4704F" stroke="#2F2018" stroke-width="1.5"/>
  <circle cx="12" cy="12" r="4.5" fill="white"/>
</svg>
`;

const createClusterIcon = () => {
  return L.divIcon({
    className: "",
    html: `<div style="position:relative;width:52px;height:52px;">
      <div style="position:absolute;inset:0;background:rgba(196,112,79,0.25);border-radius:50%;animation:adaClusterPulse 2s ease-out infinite;"></div>
      <div style="position:absolute;inset:8px;background:#C4704F;border:2px solid #2F2018;border-radius:50%;box-shadow:0 4px 14px rgba(47,32,24,0.4);display:flex;align-items:center;justify-content:center;">
        <div style="width:6px;height:6px;background:#FDFCFA;border-radius:50%;box-shadow:0 0 0 3px rgba(253,252,250,0.35);"></div>
      </div>
    </div>
    <style>@keyframes adaClusterPulse{0%{transform:scale(0.85);opacity:0.7}70%{transform:scale(1.15);opacity:0}100%{transform:scale(1.15);opacity:0}}</style>`,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });
};

const pinIcon = typeof window !== "undefined"
  ? L.divIcon({
      className: "",
      html: PIN_SVG,
      iconSize: [24, 36],
      iconAnchor: [12, 36],
      tooltipAnchor: [0, -36],
    })
  : undefined;

export default function ProjectMap() {
  const router = useRouter();

  const markers = projects.flatMap((p) => {
    const coords = projectCoords[p.slug];
    return coords ? [{ ...p, coords }] : [];
  });

  return (
    <MapContainer
      center={[-33.72, 150.85]}
      zoom={8}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      <MarkerClusterGroup
        iconCreateFunction={createClusterIcon}
        maxClusterRadius={140}
        spiderfyOnMaxZoom
        showCoverageOnHover={false}
        zoomToBoundsOnClick
      >
        {pinIcon && markers.map((p) => (
          <Marker
            key={p.slug}
            position={p.coords}
            icon={pinIcon}
            eventHandlers={{ click: () => router.push(`/projects/${p.slug}`) }}
          >
            <Tooltip direction="top" offset={[0, -4]} opacity={1}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "12px", color: "#2F2018" }}>
                {p.title}
              </span>
            </Tooltip>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
