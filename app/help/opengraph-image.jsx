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
            "radial-gradient(circle at 18% 18%, rgba(198, 165, 92, 0.18), transparent 28%), linear-gradient(180deg, #171717 0%, #0C0C0C 100%)",
          color: "#F6EEDB",
          fontFamily: '"Helvetica Neue", "Avenir Next", Arial, sans-serif',
        }}
      >
        <div
          style={{
            width: 1060,
            height: 500,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 42,
            border: "1px solid rgba(198, 165, 92, 0.22)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.01) 100%)",
            boxShadow: "0 36px 100px rgba(0, 0, 0, 0.38)",
            padding: "54px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            <img src={logoDataUrl} alt="UMATTR" width="410" height="142" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                borderRadius: 999,
                border: "1px solid rgba(198, 165, 92, 0.22)",
                background: "rgba(255,255,255,0.04)",
                padding: "10px 18px",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C6A55C",
              }}
            >
              UMATTR
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              Career Intelligence
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(246, 238, 219, 0.84)",
              }}
            >
              AI-powered career guidance
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "rgba(246, 238, 219, 0.66)",
              fontSize: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "999px",
                  background: "#C6A55C",
                }}
              />
              <div>UMATTR</div>
            </div>
            <div>Career Intelligence assistant</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
