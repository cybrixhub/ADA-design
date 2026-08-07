import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com.au",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"ADA Design Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `[Enquiry] ${subject ?? "New enquiry"}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
