"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  CHATBASE_AGENT_ID,
  CHATBASE_EMBED_SCRIPT_SRC,
} from "../../lib/chatbase-config.mjs";

type ChatbaseCall = ((...args: unknown[]) => unknown) & {
  q?: unknown[][];
};

declare global {
  interface Window {
    chatbase?: ChatbaseCall;
  }
}

let chatbaseLoadPromise: Promise<void> | null = null;

function createChatbaseProxy() {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    const queueingChatbase = ((...args: unknown[]) => {
      if (!queueingChatbase.q) {
        queueingChatbase.q = [];
      }

      queueingChatbase.q.push(args);
    }) as ChatbaseCall;

    window.chatbase = new Proxy(queueingChatbase, {
      get(target, prop) {
        if (prop === "q") {
          return target.q;
        }

        return (...args: unknown[]) => target(prop, ...args);
      },
    });
  }
}

function injectChatbaseScript() {
  if (!CHATBASE_AGENT_ID) {
    return null;
  }

  const existingScript = document.getElementById(CHATBASE_AGENT_ID);

  if (existingScript) {
    return existingScript;
  }

  const script = document.createElement("script");
  script.src = CHATBASE_EMBED_SCRIPT_SRC;
  script.id = CHATBASE_AGENT_ID;
  script.setAttribute("data-umattr-chatbase", "true");
  script.setAttribute("data-domain", "www.chatbase.co");
  script.dataset.domain = "www.chatbase.co";
  (script as HTMLScriptElement & { domain?: string }).domain = "www.chatbase.co";
  document.body.appendChild(script);

  return script;
}

function ensureChatbaseLoaded() {
  if (chatbaseLoadPromise) {
    return chatbaseLoadPromise;
  }

  chatbaseLoadPromise = new Promise<void>((resolve, reject) => {
    const script = injectChatbaseScript();

    if (!script) {
      resolve();
      return;
    }

    if (script.getAttribute("data-loaded") === "true") {
      resolve();
      return;
    }

    script.addEventListener(
      "load",
      () => {
        script.setAttribute("data-loaded", "true");
        resolve();
      },
      { once: true },
    );

    script.addEventListener(
      "error",
      () => {
        chatbaseLoadPromise = null;
        reject(new Error("Failed to load Chatbase widget."));
      },
      { once: true },
    );
  });

  return chatbaseLoadPromise;
}

function closeChatbaseWidget() {
  try {
    window.chatbase?.("close");
  } catch {
    // Ignore widget close failures on routes where Chatbase is intentionally not surfaced.
  }
}

export default function ChatbaseWidget() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (pathname === "/help") {
      closeChatbaseWidget();
      return;
    }

    if (!CHATBASE_AGENT_ID) {
      return;
    }

    createChatbaseProxy();
    void ensureChatbaseLoaded();
  }, [pathname]);

  return null;
}
