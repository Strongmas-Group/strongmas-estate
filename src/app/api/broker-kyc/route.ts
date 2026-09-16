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

  const name = typeof data["Full Name"] === "string" ? (data["Full Name"] as string) : "";

  try {
    await sendLeadEmail({
      subject: name
        ? `Broker / Realtor KYC, ${name}`
        : "Broker / Realtor Registration & KYC",
      brandTitle: "STRONGMAS",
      brandSubtitle: "Residence & Development Limited",
      heading: "New Broker / Realtor Registration & KYC",
      intro:
        "A new broker registration and KYC submission has been received through the website. The applicant's details are below.",
      rows: toRows(data),
      replyTo:
        typeof data["Email Address"] === "string" ? (data["Email Address"] as string) : undefined,
      tagline: "Confidential · For Compliance & Onboarding",
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof Error && err.message === "SMTP_NOT_CONFIGURED") {
      console.error("SMTP env vars missing, cannot send broker KYC email.");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }
    console.error("Failed to send broker KYC email:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 502 });
  }
}
