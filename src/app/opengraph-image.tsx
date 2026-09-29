import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0d",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* tricolor bar */}
        <div style={{ display: "flex", height: 14 }}>
          <div style={{ flex: 1, background: "#0a0a0d" }} />
          <div style={{ flex: 1, background: "#fdda24" }} />
          <div style={{ flex: 1, background: "#ef3340" }} />
        </div>
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(253,218,36,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(239,51,64,0.16)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#fdda24",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            🇧🇪 IPTV IN BELGIË
          </div>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 1.05,
              marginTop: 16,
            }}
          >
            Belgische IPTV
          </div>
          <div
            style={{
              display: "flex",
              color: "#fdda24",
              fontSize: 46,
              fontWeight: 800,
              marginTop: 6,
            }}
          >
            Onbeperkt Entertainment
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              marginTop: 40,
              fontSize: 30,
              color: "#cfd0da",
            }}
          >
            <span>55.000+ kanalen</span>
            <span style={{ color: "#ef3340" }}>•</span>
            <span>90.000+ films</span>
            <span style={{ color: "#ef3340" }}>•</span>
            <span>4K kwaliteit</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "0 80px 46px",
            fontSize: 26,
            color: "#9a9aa8",
          }}
        >
          {site.domain}
        </div>
      </div>
    ),
    { ...size }
  );
}
