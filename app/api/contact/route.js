// pages/api/contact.js   (or app/api/contact/route.js)

import nodemailer from "nodemailer";

/**
 * POST handler – receives the JSON payload from the ContactSection form
 */
export async function POST(req) {
  try {
    // -------------------------------------------------
    // Parse & type-check payload
    // -------------------------------------------------
    const body = await req.json();
    const { name, email, countryCode, contact, service, requirement } = body;

    // -------------------------------------------------
    // Required-field validation
    // -------------------------------------------------
    if (!name || !email || !countryCode || !contact || !service || !requirement) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // -------------------------------------------------
    // Email format
    // -------------------------------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // -------------------------------------------------
    // Contact number – exactly 10 digits
    // -------------------------------------------------
    if (!/^\d{10}$/.test(contact)) {
      return new Response(
        JSON.stringify({ error: "Contact number must be exactly 10 digits" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // -------------------------------------------------
    // Country code must start with "+"
    // -------------------------------------------------
    if (!countryCode.startsWith("+")) {
      return new Response(
        JSON.stringify({ error: "Invalid country code" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // -------------------------------------------------
    //  Load env vars (fail fast if missing)
    // -------------------------------------------------
    const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS, CONTACT_EMAIL_TO } = process.env;

    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS || !CONTACT_EMAIL_TO) {
      console.error("Missing email env vars");
      return new Response(
        JSON.stringify({ error: "Server email configuration missing" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // -------------------------------------------------
    // Nodemailer transporter
    // -------------------------------------------------
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 465,
      secure: true, // SSL
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      // optional – useful for self-signed certs
      tls: { rejectUnauthorized: false },
    });

    // -------------------------------------------------
    // Email template (HTML + plain-text fallback)
    // -------------------------------------------------
    const mailOptions = {
      from: `"Contact Form" <${EMAIL_USER}>`,
      to: CONTACT_EMAIL_TO,
      replyTo: email, // recipient can reply directly to the user
      subject: `New Inquiry: ${service} – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color:#333; max-width:600px;">
          <h2 style="color:#0ebac7;">New Contact Form Submission</h2>
          <hr style="border:1px solid #eee; margin:20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${countryCode} ${contact}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Requirement:</strong></p>
          <blockquote style="background:#f9f9f9; padding:12px; border-left:4px solid #0ebac7; margin:16px 0;">
            ${requirement.replace(/\n/g, "<br>")}
          </blockquote>
          <hr style="border:1px solid #eee; margin:20px 0;" />
          <small style="color:#777;">Sent via website contact form</small>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${countryCode} ${contact}
Service: ${service}
Requirement: ${requirement}

Sent via website contact form
      `.trim(),
    };

    // -------------------------------------------------
    //  Send the email
    // -------------------------------------------------
    await transporter.sendMail(mailOptions);

    // -------------------------------------------------
    //  Success response
    // -------------------------------------------------
    return new Response(
      JSON.stringify({ success: true, message: "Thank you! Your message has been sent." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Contact API Error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message",
        details: err.message || "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
