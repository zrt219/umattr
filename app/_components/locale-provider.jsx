"use client";

import { createContext, useContext, useEffect, useId, useMemo, useRef, useState } from "react";

const DEFAULT_LOCALE = "en";

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key, fallback) => fallback ?? key,
});

export function LocaleProvider({ children }) {
  const setLocale = () => {};

  useEffect(() => {
    // Public-page translation is owned by GTranslateWidget. Keep the React copy
    // stable in English so dictionary hydration cannot partially translate pages.
    window.localStorage.removeItem("umattr_locale");
    document.documentElement.lang = DEFAULT_LOCALE;
    document.documentElement.dir = "ltr";
  }, []);

  const value = useMemo(() => {
    return {
      locale: DEFAULT_LOCALE,
      setLocale,
      t: (key, fallback) => fallback ?? key,
    };
  }, []);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function LanguageSelector({ className = "" }) {
  return <GTranslateWidget className={className} />;
}

export function GTranslateWidget({ className = "" }) {
  const wrapperRef = useRef(null);
  const instanceId = useId().replace(/:/g, "");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return undefined;
    }

    const selector = `[data-gtranslate-instance="${instanceId}"]`;
    let cancelled = false;
    let retryTimer = null;
    let observer = null;

    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      wrapper_selector: selector,
    };

    const markReady = () => {
      const hasSelect = Boolean(wrapper.querySelector("select"));
      if (!cancelled) {
        setIsReady(hasSelect);
      }
      return hasSelect;
    };

    const loadScript = ({ forceReload = false } = {}) => {
      const existing = document.querySelector("script[data-umattr-gtranslate]");

      if (forceReload && existing) {
        existing.remove();
      }

      const reusable = document.querySelector("script[data-umattr-gtranslate]");
      if (reusable) {
        return reusable;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
      script.async = true;
      script.defer = true;
      script.dataset.umattrGtranslate = "true";
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        window.setTimeout(markReady, 120);
      });
      document.body.appendChild(script);
      return script;
    };

    observer = new MutationObserver(() => {
      if (markReady()) {
        observer?.disconnect();
      }
    });
    observer.observe(wrapper, { childList: true, subtree: true });

    if (!markReady()) {
      const script = loadScript();
      const loadedHandler = () => {
        window.setTimeout(markReady, 120);
      };

      script.addEventListener("load", loadedHandler);

      retryTimer = window.setTimeout(() => {
        if (!markReady()) {
          loadScript({ forceReload: true });
        }
      }, 1800);

      return () => {
        cancelled = true;
        script.removeEventListener("load", loadedHandler);
        if (retryTimer) {
          window.clearTimeout(retryTimer);
        }
        observer?.disconnect();
      };
    }

    return () => {
      cancelled = true;
      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }
      observer?.disconnect();
    };
  }, [instanceId]);

  return (
    <div
      className={`gtranslate-shell relative h-[46px] w-[132px] overflow-hidden rounded-[16px] border border-[rgba(212,175,55,0.18)] bg-white/82 px-3 text-[15px] font-medium text-[#1F1F1F] shadow-[0_7px_20px_rgba(33,27,18,0.03)] transition-all duration-200 hover:border-[rgba(212,175,55,0.32)] sm:w-[158px] ${className}`}
      aria-label="Translate website"
    >
      {!isReady ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-5 text-[#1F1F1F]">
          <span>English</span>
          <span aria-hidden="true" className="text-[12px] opacity-70">v</span>
        </div>
      ) : null}
      <div
        ref={wrapperRef}
        data-gtranslate-instance={instanceId}
        className={`gtranslate_wrapper ${isReady ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export function LocalizedText({ translationKey, fallback, prefix = "", suffix = "" }) {
  const { t } = useLocale();
  return (
    <>
      {prefix}
      {t(translationKey, fallback)}
      {suffix}
    </>
  );
}
