import { NextResponse } from "next/server";
import { sendLeadEmail, toRows } from "@/lib/lead-mailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }

  try {
    await sendLeadEmail({
      subject: "AURUM, Exclusive Buyer Registration",
      brandTitle: "AURUM",
      brandSubtitle: "by Strongmas Development",
      heading: "New Exclusive Buyer Registration",
      intro:
        "A new enquiry has been submitted through the Aurum website. The buyer's details are below.",
      rows: toRows(data),
      replyTo:
        typeof data["Email Address"] === "string" ? (data["Email Address"] as string) : undefined,
      tagline: "Live Gold · Live Aurum",
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message === "SMTP_NOT_CONFIGURED") {
      console.error("SMTP env vars missing, cannot send registration email.");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }
    console.error("Failed to send registration email:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 502 });
  }
}
