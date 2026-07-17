import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const logoBytes = readFileSync(join(process.cwd(), "public/ada-logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logoBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDFCFA",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={56}
          height={30}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    ),
    { ...size }
  );
}
