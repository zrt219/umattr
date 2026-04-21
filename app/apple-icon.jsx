import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const mark = await readFile(
    path.join(process.cwd(), "public", "brand", "umattr-favicon.png")
  );
  const markDataUrl = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={markDataUrl}
          alt="UMATTR"
          width="180"
          height="180"
          style={{ transform: "scale(2)", transformOrigin: "center center" }}
        />
      </div>
    ),
    size
  );
}
