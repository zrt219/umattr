"use client";

import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";

type ProtectedContentProps = {
  children: ReactNode;
  watermarkText?: string;
  className?: string;
  aggressive?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "children" | "className">;

const INTERACTIVE_SELECTOR = [
  "input",
  "textarea",
  "select",
  "button",
  "option",
  "[contenteditable='true']",
  "[contenteditable='']",
  "[role='textbox']",
].join(", ");

const ALLOW_SELECTOR = '[data-allow-select="true"], [data-allow-copy="true"]';

function joinClassNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isHTMLElement(target: EventTarget | null): target is HTMLElement {
  return target instanceof HTMLElement;
}

function shouldBypassProtection(target: EventTarget | null) {
  if (!isHTMLElement(target)) {
    return false;
  }

  return Boolean(target.closest(`${ALLOW_SELECTOR}, ${INTERACTIVE_SELECTOR}`));
}

function buildWatermarkRows(text: string) {
  return Array.from({ length: 12 }, (_, rowIndex) => {
    const rowText = Array.from({ length: 6 }, () => text).join("   ");

    return (
      <div key={`${rowIndex}-${text}`} className="copy-protected-watermark-row">
        {rowText}
      </div>
    );
  });
}

export function ProtectedContent({
  children,
  watermarkText = "UMATTR Protected",
  className,
  aggressive = true,
  ...rest
}: ProtectedContentProps) {
  const normalizedWatermarkText = watermarkText.trim() || "UMATTR Protected";
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const handleContextMenu = (event: Event) => {
      if (shouldBypassProtection(event.target)) {
        return;
      }

      event.preventDefault();
    };

    const handleSelectStart = (event: Event) => {
      if (shouldBypassProtection(event.target)) {
        return;
      }

      event.preventDefault();
    };

    const handleAggressiveEvent = (event: Event) => {
      if (!aggressive || shouldBypassProtection(event.target)) {
        return;
      }

      event.preventDefault();
    };

    root.addEventListener("contextmenu", handleContextMenu);
    root.addEventListener("selectstart", handleSelectStart);

    if (aggressive) {
      root.addEventListener("copy", handleAggressiveEvent);
      root.addEventListener("cut", handleAggressiveEvent);
      root.addEventListener("dragstart", handleAggressiveEvent);
    }

    return () => {
      root.removeEventListener("contextmenu", handleContextMenu);
      root.removeEventListener("selectstart", handleSelectStart);
      root.removeEventListener("copy", handleAggressiveEvent);
      root.removeEventListener("cut", handleAggressiveEvent);
      root.removeEventListener("dragstart", handleAggressiveEvent);
    };
  }, [aggressive]);

  return (
    <div
      {...rest}
      ref={rootRef}
      data-aggressive={aggressive ? "true" : "false"}
      className={joinClassNames("copy-protected protected-content", className)}
    >
      <div aria-hidden="true" className="copy-protected-watermark">
        {buildWatermarkRows(normalizedWatermarkText)}
      </div>
      <div className="copy-protected-content">{children}</div>
    </div>
  );
}
