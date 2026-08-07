"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import type { Project } from "@/lib/projects";
import { projectCoords } from "@/lib/project-coords";
import { extraMapMarkers } from "@/lib/extra-map-markers";

const pinHtml = `<div style="filter:drop-shadow(0 3px 6px rgba(47,32,24,0.4))"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="32" viewBox="0 0 22 32"><path d="M11 0C4.925 0 0 4.925 0 11C0 19.25 11 32 11 32C11 32 22 19.25 22 11C22 4.925 17.075 0 11 0Z" fill="#C4704F"/><circle cx="11" cy="11" r="4.5" fill="#FDFCFA"/><circle cx="11" cy="11" r="2" fill="#C4704F"/></svg></div>`;

const pinIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        className: "",
        html: pinHtml,
        iconSize: [22, 32],
        iconAnchor: [11, 32],
        popupAnchor: [0, -34],
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
          <Marker key={p.slug} position={p.coords} icon={pinIcon} />
        ))}

      {pinIcon &&
        extraMapMarkers.map((m) => (
          <Marker key={m.address} position={m.coords} icon={pinIcon} />
        ))}
    </MapContainer>
  );
}
