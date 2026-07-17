import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2F2018",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "64px 80px",
        }}
      >
        <div
          style={{
            color: "#C4704F",
            fontSize: 13,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "sans-serif",
          }}
        >
          Architectural Design · NSW
        </div>
        <div
          style={{
            color: "#FDFCFA",
            fontSize: 72,
            fontFamily: "serif",
            lineHeight: 1.0,
            marginBottom: 28,
          }}
        >
          ADA Design
        </div>
        <div
          style={{
            color: "rgba(253,252,250,0.45)",
            fontSize: 22,
            fontFamily: "sans-serif",
            fontWeight: 300,
          }}
        >
          Purpose-built for its site.
        </div>
      </div>
    ),
    { ...size }
  );
}
