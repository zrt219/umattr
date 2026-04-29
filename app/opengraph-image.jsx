import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public", "brand", "umattr-logo.png")
  );
  const logoDataUrl = `data:image/png;base64,${logo.toString("base64")}`;

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
            "radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.18), transparent 28%), linear-gradient(180deg, #1F1F1F 0%, #0F0F0F 100%)",
        }}
      >
        <div
          style={{
            width: 1060,
            height: 500,
            borderRadius: 40,
            border: "1px solid rgba(212, 175, 55, 0.22)",
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
              gap: 28,
            }}
          >
            <img src={logoDataUrl} alt="UMATTR" width="520" height="180" />
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
                color: "#D4AF37",
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
              Practical AI Programs, Career Intelligence, and Premium Advisory.
            </div>
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.45,
                color: "rgba(246, 238, 219, 0.82)",
              }}
            >
              UMATTR Helps People and Businesses Learn, Adapt, and Stay Ahead.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
