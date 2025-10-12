import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      name,
      email,
      contact,
      countryCode,
      service,
      requirement,
    } = await req.json();

    // ✅ Validate required fields
    if (!name || !email || !contact || !service || !requirement) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    // ✅ Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g. smtp.gmail.com
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL_TO, // recipient
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>🚀 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${countryCode} ${contact}</p>
        <p><strong>Interested Service:</strong> ${service}</p>
        <p><strong>Requirement Details:</strong></p>
        <p>${requirement || "No additional message provided."}</p>
      `,
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Mail sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        message: "Failed to send email.",
      }),
      { status: 500 }
    );
  }
}
