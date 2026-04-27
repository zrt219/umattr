export const CHATBASE_AGENT_ID = "DgTcC5SN7bghJP8WhqVDS";

export const CHATBASE_EMBED_SCRIPT_SRC = "https://www.chatbase.co/embed.min.js";
export const CHATBASE_HELP_BASE_URL = `https://www.chatbase.co/${CHATBASE_AGENT_ID}/help`;

export const CHATBASE_PROXY_REWRITES = [
  {
    source: "/__cb/:path*",
    destination: "https://www.chatbase.co/__cb/:path*",
  },
  {
    source: `/api/chat/${CHATBASE_AGENT_ID}/:path*`,
    destination: `https://www.chatbase.co/api/chat/${CHATBASE_AGENT_ID}/:path*`,
  },
];
