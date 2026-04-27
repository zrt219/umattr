import arcjet, {
  detectBot,
  detectPromptInjection,
  sensitiveInfo,
  shield,
  tokenBucket,
} from "@arcjet/next";

const arcjetKey = process.env.ARCJET_KEY;

export const aj = arcjet({
  key: arcjetKey,
  rules: [
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        "CATEGORY:MONITOR",
        "CATEGORY:PREVIEW",
      ],
    }),
  ],
});

export const aiAj = aj
  .withRule(
    tokenBucket({
      mode: "LIVE",
      refillRate: 2_000,
      interval: "1h",
      capacity: 5_000,
    }),
  )
  .withRule(
    sensitiveInfo({
      mode: "LIVE",
      deny: ["CREDIT_CARD_NUMBER", "PHONE_NUMBER"],
    }),
  )
  .withRule(
    detectPromptInjection({
      mode: "LIVE",
    }),
  );

export function hasArcjetKey() {
  return Boolean(arcjetKey);
}
