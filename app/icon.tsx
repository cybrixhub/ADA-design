import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2F2018",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C4704F",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: "0.05em",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
