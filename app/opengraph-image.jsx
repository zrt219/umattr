import { ImageResponse } from "next/og";
import { BrandLogoMarkShape } from "./_components/brand-mark-shape.jsx";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 20% 20%, rgba(198, 165, 92, 0.18), transparent 28%), linear-gradient(180deg, #1A1A1A 0%, #0F0F0F 100%)",
        }}
      >
        <div
          style={{
            width: 1060,
            height: 500,
            borderRadius: 40,
            border: "1px solid rgba(198, 165, 92, 0.22)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            boxShadow: "0 36px 100px rgba(0, 0, 0, 0.36)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "56px 64px",
            gap: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 18,
            }}
          >
            <svg
              width="470"
              height="170"
              viewBox="0 0 160 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <BrandLogoMarkShape />
            </svg>
            <div
              style={{
                fontSize: 92,
                lineHeight: 0.92,
                fontWeight: 900,
                letterSpacing: "-0.06em",
                color: "#C6A55C",
                fontFamily:
                  '"Arial Black", "Avenir Next Condensed", "Helvetica Neue", Arial, sans-serif',
              }}
            >
              UMATTR
            </div>
          </div>

          <div
            style={{
              width: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 18,
              color: "#F6EEDB",
              fontFamily:
                '"Helvetica Neue", "Avenir Next", Arial, sans-serif',
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C6A55C",
              }}
            >
              UMATTR
            </div>
            <div
              style={{
                fontSize: 50,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              AI programs, career intelligence, and consulting.
            </div>
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.45,
                color: "rgba(246, 238, 219, 0.82)",
              }}
            >
              Free entry on UMATTR. Programs and product access route through
              Payhip.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
