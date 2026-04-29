import { withBotId } from "botid/next/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CHATBASE_PROXY_REWRITES } from "./lib/chatbase-config.mjs";

/** @type {import('next').NextConfig} */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
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
