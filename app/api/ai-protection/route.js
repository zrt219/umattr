import { isSpoofedBot } from "@arcjet/inspect";
import { NextResponse } from "next/server";
import { aiAj, hasArcjetKey } from "../../../lib/arcjet.js";

function getMessage(body) {
  if (typeof body?.message === "string") {
    return body.message;
  }

  if (Array.isArray(body?.messages)) {
    return body.messages
      .map((message) => {
        if (typeof message === "string") {
          return message;
        }

        if (typeof message?.content === "string") {
          return message.content;
        }

        return "";
      })
      .filter(Boolean)
      .join("\n");
  }

  return "";
}

function getDenyStatus(decision) {
  if (decision.reason.isRateLimit()) {
    return 429;
  }

  if (decision.reason.isSensitiveInfo() || decision.reason.isPromptInjection()) {
    return 400;
  }

  return 403;
}

export async function POST(request) {
  if (!hasArcjetKey()) {
    return NextResponse.json(
      { error: "Arcjet is not configured" },
      { status: 503 },
    );
  }

  const body = await request.json().catch(() => ({}));
  const message = getMessage(body);
  const requested = Math.max(1, Math.ceil(message.length / 4));

  const decision = await aiAj.protect(request, {
    requested,
    sensitiveInfoValue: message,
    detectPromptInjectionMessage: message,
  });

  if (decision.isDenied() || decision.results.some(isSpoofedBot)) {
    return NextResponse.json(
      {
        error: "Request denied",
        decisionId: decision.id,
        conclusion: decision.conclusion,
      },
      { status: getDenyStatus(decision) },
    );
  }

  return NextResponse.json({
    ok: true,
    decisionId: decision.id,
    conclusion: decision.conclusion,
  });
}
