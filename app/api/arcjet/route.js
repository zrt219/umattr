import { isSpoofedBot } from "@arcjet/inspect";
import { NextResponse } from "next/server";
import { aj, hasArcjetKey } from "../../../lib/arcjet.js";

export async function GET(request) {
  if (!hasArcjetKey()) {
    return NextResponse.json(
      { error: "Arcjet is not configured" },
      { status: 503 },
    );
  }

  const decision = await aj.protect(request);

  if (decision.isDenied() || decision.results.some(isSpoofedBot)) {
    return NextResponse.json(
      { error: "Forbidden", decisionId: decision.id },
      { status: 403 },
    );
  }

  return NextResponse.json({
    ok: true,
    decisionId: decision.id,
    conclusion: decision.conclusion,
  });
}
