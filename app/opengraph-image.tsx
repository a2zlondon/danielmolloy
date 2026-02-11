import { ImageResponse } from "next/og";

export const alt = "Daniel Molloy | Fractional CTO & Tech Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f0e8",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 48,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 300,
              color: "#1a1a1a",
              marginBottom: 16,
            }}
          >
            Daniel Molloy
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#1a1a1a",
              marginBottom: 24,
            }}
          >
            Fractional CTO & Tech Leader
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#666",
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            Scale-ups · Series A+ · Europe, MENA & US
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
