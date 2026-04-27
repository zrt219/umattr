import { withBotId } from "botid/next/config";
import { CHATBASE_PROXY_REWRITES } from "./lib/chatbase-config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  async rewrites() {
    return CHATBASE_PROXY_REWRITES;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default withBotId(nextConfig);
