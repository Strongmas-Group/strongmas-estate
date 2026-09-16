import nodemailer from "nodemailer";

export const LEADS_TO = process.env.LEADS_TO_EMAIL || "hello@strongmasng.com";

const GOLD = "#B8923E";

export type LeadRow = [string, string];

export interface LeadEmailOptions {
  /** Email subject line. */
  subject: string;
  /** Large wordmark at the top of the email (e.g. "AURUM", "STRONGMAS"). */
  brandTitle: string;
  /** Small caps line beneath the wordmark. */
  brandSubtitle: string;
  /** Headline above the details table. */
  heading: string;
  /** Sentence introducing the submission. */
  intro: string;
  /** Field/value pairs rendered as the details table. */
  rows: LeadRow[];
  /** Address to set as Reply-To (usually the submitter's email). */
  replyTo?: string;
  /** Tagline shown in the email footer. */
  tagline: string;
}

/**
 * Normalise a posted JSON body into ordered, non-empty [label, value] rows.
 * Array values (multi-select checkboxes) are joined into one line.
 */
export function toRows(data: Record<string, unknown>): LeadRow[] {
  return Object.entries(data)
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(([k, v]) => [k, Array.isArray(v) ? v.join(", ") : String(v)] as LeadRow);
}

/**
 * Send a branded lead notification to the sales inbox.
 * Throws if SMTP is unconfigured or the send fails, so routes can map the
 * failure onto the right status code.
 */
export async function sendLeadEmail(opts: LeadEmailOptions): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // SSL on 465, STARTTLS otherwise
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const text = `${opts.intro}\n\n${opts.rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;

  await transporter.sendMail({
    from: SMTP_FROM || `Strongmas Website <${SMTP_USER}>`,
    to: LEADS_TO,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text,
    html: buildEmailHtml(opts),
  });
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Luxury-styled HTML email (gold on charcoal, Strongmas branding). */
function buildEmailHtml(opts: LeadEmailOptions): string {
  const tableRows = opts.rows
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
          <tr><td style="padding:48px 40px 32px;text-align:center;background:linear-gradient(180deg,#15130f,#0c0c0d);border-bottom:1px solid ${GOLD};">
            <div style="font-size:34px;letter-spacing:10px;font-weight:600;color:#ffffff;">${esc(opts.brandTitle)}</div>
            <div style="margin-top:10px;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:${GOLD};">
              ${esc(opts.brandSubtitle)}
            </div>
          </td></tr>
          <tr><td style="padding:36px 40px 8px;">
            <div style="height:1px;width:48px;background:${GOLD};margin-bottom:20px;"></div>
            <h1 style="margin:0;font-size:20px;font-weight:400;letter-spacing:1px;color:#ffffff;">
              ${esc(opts.heading)}
            </h1>
            <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#9a9a9a;">
              ${esc(opts.intro)}
            </p>
          </td></tr>
          <tr><td style="padding:24px 24px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 4px;">
              ${tableRows}
            </table>
          </td></tr>
          <tr><td style="padding:28px 40px 40px;text-align:center;border-top:1px solid #1f1f1f;">
            <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};">
              ${esc(opts.tagline)}
            </p>
            <p style="margin:10px 0 0;font-size:11px;color:#5f5f5f;">
              Lekki Phase 1, Lagos &nbsp;&middot;&nbsp; Strongmas Development
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}
