import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  journey?: string;
  dates?: string;
  groupSize?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  let body: InquiryPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, journey, dates, groupSize, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const summaryLines = [
    `New trip enquiry from ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    journey ? `Journey: ${journey}` : null,
    dates ? `Preferred dates: ${dates}` : null,
    groupSize ? `Group size: ${groupSize}` : null,
    message ? `Message: ${message}` : null,
  ].filter(Boolean);

  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL;
  const notifyFrom = process.env.CONTACT_FROM_EMAIL ?? "NanaTravelServices <onboarding@resend.dev>";

  if (resendApiKey && notifyTo) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: notifyFrom,
          to: notifyTo,
          reply_to: email,
          subject: `New enquiry: ${journey || "General"} — ${name}`,
          text: summaryLines.join("\n"),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Resend API error:", errText);
        return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
      }
    } catch (err) {
      console.error("Failed to reach Resend:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }
  } else {
    // No email provider configured yet — log so the enquiry isn't silently lost
    // during local development or before RESEND_API_KEY is set in production.
    console.log("[contact] RESEND_API_KEY / CONTACT_NOTIFY_EMAIL not set. Enquiry:\n", summaryLines.join("\n"));
  }

  return NextResponse.json({ ok: true });
}
