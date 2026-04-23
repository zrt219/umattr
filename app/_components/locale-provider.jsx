"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import ar from "../../locales/ar.json";
import en from "../../locales/en.json";
import es from "../../locales/es.json";
import zhCN from "../../locales/zh-CN.json";

const STORAGE_KEY = "umattr_locale";
const DEFAULT_LOCALE = "en";

const DICTIONARIES = {
  en,
  es,
  "zh-CN": zhCN,
  ar,
};

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "es", label: "Espa\u00f1ol" },
  { value: "zh-CN", label: "\u7b80\u4f53\u4e2d\u6587" },
  { value: "ar", label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" },
];

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key, fallback) => fallback ?? key,
});

function normalizeLocale(input) {
  if (!input || typeof input !== "string") {
    return DEFAULT_LOCALE;
  }

  const lower = input.toLowerCase();

  if (lower === "es" || lower.startsWith("es-")) {
    return "es";
  }

  if (
    lower === "zh" ||
    lower === "zh-cn" ||
    lower === "zh-hans" ||
    lower === "zh-sg" ||
    lower.startsWith("zh-cn") ||
    lower.startsWith("zh-hans") ||
    lower.startsWith("zh-sg")
  ) {
    return "zh-CN";
  }

  if (lower === "ar" || lower.startsWith("ar-")) {
    return "ar";
  }

  return DEFAULT_LOCALE;
}

function getTranslation(locale, key, fallback) {
  const dictionary = DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
  const english = DICTIONARIES[DEFAULT_LOCALE];
  return dictionary[key] ?? english[key] ?? fallback ?? key;
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const detected = stored || normalizeLocale(window.navigator.language);
    setLocale(normalizeLocale(detected));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(() => {
    return {
      locale,
      setLocale,
      t: (key, fallback) => getTranslation(locale, key, fallback),
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function LanguageSelector({ className = "" }) {
  const { locale, setLocale } = useLocale();

  return (
    <select
      aria-label="Language"
      value={locale}
      onChange={(event) => setLocale(event.target.value)}
      className={`h-[46px] rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/82 px-4 text-[14px] font-medium text-[#1A1A1A] shadow-[0_7px_20px_rgba(33,27,18,0.03)] outline-none transition-all duration-200 hover:border-[rgba(198,165,92,0.32)] ${className}`}
    >
      {LANGUAGE_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function GTranslateWidget({ className = "" }) {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      wrapper_selector: ".gtranslate_wrapper",
    };

    if (document.querySelector("script[data-umattr-gtranslate]")) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
    script.async = true;
    script.defer = true;
    script.dataset.umattrGtranslate = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`gtranslate-shell h-[46px] w-[132px] overflow-hidden rounded-[16px] border border-[rgba(198,165,92,0.18)] bg-white/82 px-3 text-[13px] font-medium text-[#1A1A1A] shadow-[0_7px_20px_rgba(33,27,18,0.03)] transition-all duration-200 hover:border-[rgba(198,165,92,0.32)] sm:w-[158px] ${className}`}
      aria-label="Translate website"
    >
      <div className="gtranslate_wrapper" />
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
