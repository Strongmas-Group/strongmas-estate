import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = process.env.LEADS_TO_EMAIL || "hello@strongmasng.com";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP env vars missing — cannot send registration email.");
    return NextResponse.json(
      { success: false, error: "Email service not configured" },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // SSL on 465, STARTTLS otherwise
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  // Collect the submitted fields once (used for both plain-text + HTML bodies).
  const entries = Object.entries(data).filter(
    ([, v]) => v != null && String(v).trim() !== ""
  );
  const val = (v: unknown) => (Array.isArray(v) ? v.join(", ") : String(v));
  const text = `New buyer registration from the Aurum website:\n\n${entries
    .map(([k, v]) => `${k}: ${val(v)}`)
    .join("\n")}`;

  const html = buildEmailHtml(entries.map(([k, v]) => [k, val(v)]));

  try {
    await transporter.sendMail({
      from: SMTP_FROM || `Aurum Website <${SMTP_USER}>`,
      to: TO,
      replyTo: typeof data["Email Address"] === "string" ? (data["Email Address"] as string) : undefined,
      subject: "AURUM — Exclusive Buyer Registration",
      text,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send registration email:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 502 });
  }
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Luxury-styled HTML email (gold on charcoal, AURUM branding). */
function buildEmailHtml(rows: [string, string][]): string {
  const GOLD = "#B8923E";
  const tableRows = rows
    .map(
      ([k, v], i) => `
      <tr>
        <td style="padding:14px 24px;background:${i % 2 ? "#141414" : "#101010"};
          border-left:2px solid ${GOLD};font-size:11px;letter-spacing:1.5px;
          text-transform:uppercase;color:#8a8a8a;width:42%;vertical-align:top;">
          ${esc(k)}
        </td>
        <td style="padding:14px 24px;background:${i % 2 ? "#141414" : "#101010"};
          font-size:15px;color:#f3f0e9;vertical-align:top;">
          ${esc(v)}
        </td>
      </tr>`
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0b;font-family:'Helvetica Neue',Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0b;padding:32px 0;">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0c0c0d;border:1px solid #1f1f1f;">
          <!-- Header -->
          <tr><td style="padding:48px 40px 32px;text-align:center;background:linear-gradient(180deg,#15130f,#0c0c0d);border-bottom:1px solid ${GOLD};">
            <div style="font-size:34px;letter-spacing:10px;font-weight:600;color:#ffffff;">AURUM</div>
            <div style="margin-top:10px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${GOLD};">
              by Strongmas Residence
            </div>
          </td></tr>
          <!-- Intro -->
          <tr><td style="padding:36px 40px 8px;">
            <div style="height:1px;width:48px;background:${GOLD};margin-bottom:20px;"></div>
            <h1 style="margin:0;font-size:20px;font-weight:400;letter-spacing:1px;color:#ffffff;">
              New Exclusive Buyer Registration
            </h1>
            <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#9a9a9a;">
              A new enquiry has been submitted through the Aurum website. The buyer's details are below.
            </p>
          </td></tr>
          <!-- Details -->
          <tr><td style="padding:24px 24px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 4px;">
              ${tableRows}
            </table>
          </td></tr>
          <!-- Footer -->
          <tr><td style="padding:28px 40px 40px;text-align:center;border-top:1px solid #1f1f1f;">
            <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};">
              Live Gold · Live Aurum
            </p>
            <p style="margin:10px 0 0;font-size:11px;color:#5f5f5f;">
              Lekki Phase 1, Lagos &nbsp;·&nbsp; Strongmas Residence
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}
