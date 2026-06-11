import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Revival Group Realty — Strategic Real Estate Representation in San Diego.";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#1C3829",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle border */}
        <div style={{
          position: "absolute", inset: "24px",
          border: "1px solid rgba(245,239,228,0.08)",
          display: "flex",
        }} />

        {/* Wordmark */}
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: "80px",
          fontWeight: "600",
          color: "#F5EFE4",
          letterSpacing: "-2px",
          lineHeight: 1,
          display: "flex",
        }}>
          Revival
        </div>
        <div style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "13px",
          color: "rgba(245,239,228,0.35)",
          letterSpacing: "8px",
          marginTop: "10px",
          display: "flex",
        }}>
          GROUP REALTY
        </div>

        {/* Divider */}
        <div style={{
          width: "48px", height: "1px",
          background: "rgba(184,148,106,0.5)",
          margin: "36px 0",
          display: "flex",
        }} />

        {/* Tagline */}
        <div style={{
          fontFamily: "Georgia, serif",
          fontSize: "24px",
          color: "rgba(184,148,106,0.8)",
          fontStyle: "italic",
          letterSpacing: "0.5px",
          display: "flex",
        }}>
          Strategic Real Estate Representation.
        </div>

        {/* Sub-tagline */}
        <div style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "13px",
          color: "rgba(245,239,228,0.25)",
          letterSpacing: "3px",
          marginTop: "16px",
          display: "flex",
        }}>
          SAN DIEGO, CALIFORNIA
        </div>
      </div>
    ),
    { ...size }
  );
}
