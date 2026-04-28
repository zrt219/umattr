"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SESSION_STORAGE_KEY = "umattr-copy-deterrence-initialized";
export const securityBootIgnorePatterns: Array<string | RegExp> = [];

let disableDevtoolLoadPromise: Promise<void> | null = null;
let disableDevtoolInitialized = false;

function shouldIgnorePathname(pathname: string) {
  return securityBootIgnorePatterns.some((pattern) => {
    if (typeof pattern === "string") {
      return pathname === pattern || pathname.startsWith(`${pattern}/`);
    }

    return pattern.test(pathname);
  });
}

function getSessionStorageFlag() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";
}

async function startDisableDevtool() {
  if (disableDevtoolInitialized || getSessionStorageFlag()) {
    return;
  }

  const { default: disableDevtool } = await import("disable-devtool");

  if (disableDevtoolInitialized || getSessionStorageFlag()) {
    return;
  }

  disableDevtool({
    disableMenu: true,
    clearLog: true,
    disableSelect: false,
    disableCopy: false,
    disableCut: false,
    disablePaste: false,
    ignore: securityBootIgnorePatterns,
  });

  disableDevtoolInitialized = true;
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
}

export function SecurityBoot() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (process.env.NEXT_PUBLIC_ENABLE_COPY_DETERRENCE !== "true") {
      return;
    }

    if (typeof window === "undefined" || shouldIgnorePathname(pathname)) {
      return;
    }

    if (disableDevtoolInitialized || getSessionStorageFlag()) {
      return;
    }

    if (!disableDevtoolLoadPromise) {
      disableDevtoolLoadPromise = startDisableDevtool().catch(() => {
        disableDevtoolLoadPromise = null;
      });
    }
  }, [pathname]);

  return null;
}
