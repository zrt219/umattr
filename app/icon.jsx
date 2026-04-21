import { ImageResponse } from "next/og";
import { BrandLogoMarkShape } from "./_components/brand-mark-shape.jsx";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1A1A",
        }}
      >
        <svg
          width="336"
          height="210"
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <BrandLogoMarkShape />
        </svg>
      </div>
    ),
    size
  );
}
