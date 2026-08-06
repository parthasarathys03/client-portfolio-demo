import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const draft = await draftMode();
  draft.enable();
  return new NextResponse("Draft mode enabled");
}
