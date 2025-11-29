import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ReqBody = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

function generateBookingRef() {
  // e.g. BK-20251129-4f3b (date + short id)
  const d = new Date();
  const date = d.toISOString().split("T")[0].replace(/-/g, "");
  const short = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `BK-${date}-${short}`;
}

function userEmailHtml({
  name,
  service,
  message,
  ref,
}: {
  name: string;
  service: string;
  message?: string;
  ref: string;
}) {
  return `
  <html>
    <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111; background:#fff; padding:24px;">
      <div style="max-width:700px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e6e6e6;">
        <div style="background:linear-gradient(90deg,#5b21b6,#db2777);color:white;padding:28px;">
          <h1 style="margin:0;font-size:22px;">Booking Request Received</h1>
        </div>
        <div style="padding:20px;">
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for your booking request. Here are the details we received:</p>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;">
            <tr><td style="padding:6px 0;font-weight:600;width:170px;">Booking Ref</td><td style="padding:6px 0;">${ref}</td></tr>
            <tr><td style="padding:6px 0;font-weight:600;">Service</td><td style="padding:6px 0;">${escapeHtml(
              service
            )}</td></tr>
            <tr><td style="padding:6px 0;font-weight:600;">Message</td><td style="padding:6px 0;">${escapeHtml(
              message || "—"
            )}</td></tr>
          </table>
          <p style="margin-top:18px;">I’ll review your request and get back to you within 24 hours to confirm availability and next steps.</p>
          <p>Best regards,<br/>Toye Studios</p>
          <hr style="margin:18px 0;border:none;border-top:1px solid #eee" />
          <p style="font-size:13px;color:#9CA3AF">Booking reference: ${ref}</p>
        </div>
      </div>
    </body>
  </html>
  `;
}

function ownerEmailHtml({
  name,
  email,
  service,
  message,
  ref,
}: // ip,
// userAgent,
// createdAt,
{
  name: string;
  email: string;
  service: string;
  message?: string;
  ref: string;
  // ip?: string;
  // userAgent?: string;
  // createdAt?: string;
}) {
  return `
  <html>
     <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111; background:#fff; padding:24px;">
      <div style="max-width:700px;margin:0 auto;border-radius:12px;overflow:hidden;border:1px solid #e6e6e6;">
        <div style="background:linear-gradient(90deg,#5b21b6,#db2777);color:white;padding:28px;">
          <h1 style="margin:0;font-size:20px;">New Booking Request</h1>
        </div>
        <div style="padding:20px;color:#111;">
          <p>You have a new booking request — details below.</p>
          <table style="width:100%;border-collapse:collapse;margin-top:12px;">
            <tr><td style="padding:6px 0;font-weight:700;width:180px;">Booking Ref</td><td style="padding:6px 0;">${ref}</td></tr>
            <tr><td style="padding:6px 0;font-weight:700;">Name</td><td style="padding:6px 0;">${escapeHtml(
              name
            )}</td></tr>
            <tr><td style="padding:6px 0;font-weight:700;">Email</td><td style="padding:6px 0;">${escapeHtml(
              email
            )}</td></tr>
            <tr><td style="padding:6px 0;font-weight:700;">Service</td><td style="padding:6px 0;">${escapeHtml(
              service
            )}</td></tr>
            <tr><td style="padding:6px 0;font-weight:700;">Message</td><td style="padding:6px 0;">${escapeHtml(
              message || "—"
            )}</td></tr>
          
          </table>
          <p style="margin-top:16px;">Reply to the user to confirm availability and payment details.</p>
        </div>
      </div>
    </body>
  </html>
  `;
}

function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReqBody;

    // basic validation
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create booking reference & meta
    const bookingRef = generateBookingRef();
    // const createdAt = new Date().toISOString();

    // Setup transporter (Gmail SMTP using App Password)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare emails
    const userHtml = userEmailHtml({ name, service, message, ref: bookingRef });
    const ownerHtml = ownerEmailHtml({
      name,
      email,
      service,
      message,
      ref: bookingRef,
      // ip: req.headers.get("x-forwarded-for") || undefined,
      // userAgent: req.headers.get("user-agent") || undefined,
      // createdAt,
    });

    // Send owner notification (to EMAIL_TO)
    await transporter.sendMail({
      from: `"Toye Studios" <booking@no-reply.com>`,
      to: process.env.EMAIL_TO,
      subject: `New booking: ${bookingRef} — ${service}`,
      html: ownerHtml,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Toye Studios" <no-reply@toyestudios.co.uk>`,
      to: email,
      subject: `Booking request received — ${bookingRef}`,
      html: userHtml,
    });

    // Optionally: return bookingRef to frontend
    return NextResponse.json(
      {
        message: "",
        bookingRef,
      },
      { status: 200 }
    );
  } catch (err) {
    const errorMsg =
      typeof err === "object" && err !== null && "message" in err
        ? (err as Error).message
        : String(err);
    console.error("API /api/book error:", errorMsg);
    return NextResponse.json(
      { error: "Failed to send booking. Try again later." },
      { status: 500 }
    );
  }
}
