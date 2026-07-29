"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { projectCoords } from "@/lib/project-coords";

const bubbleHtml = (size: number) => `
<div style="position:relative;width:${size}px;height:${size}px;">
  <div style="position:absolute;inset:0;background:rgba(196,112,79,0.28);border-radius:50%;animation:adaPinPulse 2.2s ease-out infinite;"></div>
  <div style="position:absolute;inset:${Math.round(size * 0.18)}px;background:#C4704F;border:2px solid #2F2018;border-radius:50%;box-shadow:0 3px 10px rgba(47,32,24,0.4);display:flex;align-items:center;justify-content:center;">
    <div style="width:${Math.max(4, Math.round(size * 0.14))}px;height:${Math.max(4, Math.round(size * 0.14))}px;background:#FDFCFA;border-radius:50%;box-shadow:0 0 0 2px rgba(253,252,250,0.35);"></div>
  </div>
</div>
<style>@keyframes adaPinPulse{0%{transform:scale(0.85);opacity:0.75}70%{transform:scale(1.25);opacity:0}100%{transform:scale(1.25);opacity:0}}</style>
`;

const pinIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        className: "",
        html: bubbleHtml(34),
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -22],
      })
    : undefined;

interface Props {
  projects: Project[];
}

export default function ProjectMap({ projects }: Props) {
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

      {pinIcon &&
        markers.map((p) => (
          <Marker key={p.slug} position={p.coords} icon={pinIcon}>
            <Popup
              minWidth={180}
              className="ada-popup"
            >
              <div style={{ fontFamily: "'EB Garamond', Georgia, serif", padding: "2px 0" }}>
                <p style={{ fontSize: "10px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C4704F", marginBottom: "4px" }}>
                  {p.category}
                </p>
                <p style={{ fontSize: "14px", color: "#2F2018", lineHeight: 1.3, marginBottom: "8px", fontWeight: 500 }}>
                  {p.title}
                </p>
                <p style={{ fontSize: "11px", color: "#8C8278", marginBottom: "10px", fontFamily: "sans-serif" }}>
                  {p.address}
                </p>
                <a
                  href={`/projects/${p.slug}`}
                  style={{ fontSize: "10px", fontFamily: "sans-serif", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2F2018", textDecoration: "none", borderBottom: "1px solid #C4704F", paddingBottom: "1px" }}
                >
                  View project →
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
