import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { siteConfig } from "@/config/site";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Description)." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      siteConfig.email ||
      "hr@brothersolutions.online";

    let emailSentSuccessfully = false;
    let deliveryErrorDetail = "";

    // 1. Try sending via Resend API if key is provided
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== "") {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Brother Solutions <onboarding@resend.dev>",
          to: [recipientEmail],
          replyTo: email,
          subject: `[New Website Lead] ${service} — ${name}`,
          html: generateEmailHTML({ name, email, phone, company, service, budget, message }),
        });
        emailSentSuccessfully = true;
        console.log(`[Brother Solutions Resend Success] Lead email sent to ${recipientEmail}`);
      } catch (resendErr) {
        const message = resendErr instanceof Error ? resendErr.message : String(resendErr);
        deliveryErrorDetail += `Resend Error: ${message}. `;
        console.warn(`[Brother Solutions Resend Error]: ${message}`);
      }
    }

    // 2. Try sending via Nodemailer SMTP if not sent yet
    if (!emailSentSuccessfully && process.env.SMTP_HOST && process.env.SMTP_PASS) {
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = Number(process.env.SMTP_PORT) || 465;
      const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
      const smtpUser = process.env.SMTP_USER || "hr@brothersolutions.online";
      const smtpPass = process.env.SMTP_PASS;

      const isPlaceholderPass =
        smtpPass === "CHANGE_TO_YOUR_EMAIL_PASSWORD" || smtpPass.trim() === "";

      if (!isPlaceholderPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
            connectionTimeout: 6000,
            greetingTimeout: 6000,
            socketTimeout: 6000,
          });

          const mailOptions = {
            from: `"${name} (Website Lead)" <${smtpUser}>`,
            to: recipientEmail,
            replyTo: email,
            subject: `[New Website Lead] ${service} — ${name}`,
            html: generateEmailHTML({ name, email, phone, company, service, budget, message }),
          };

          await transporter.sendMail(mailOptions);
          emailSentSuccessfully = true;
          console.log(`[Brother Solutions SMTP Success] Lead email sent to ${recipientEmail}`);
        } catch (smtpErr) {
          const message = smtpErr instanceof Error ? smtpErr.message : String(smtpErr);
          deliveryErrorDetail += `SMTP Error (${smtpHost}): ${message}. `;
          console.warn(`[Brother Solutions SMTP Error]: ${message}`);
        }
      }
    }

    // Log fallback details
    if (!emailSentSuccessfully) {
      console.log("\n=======================================================");
      console.log(`[BROTHER SOLUTIONS] NEW LEAD RECEIVED FOR: ${recipientEmail}`);
      console.log(`- Name:    ${name}`);
      console.log(`- Email:   ${email}`);
      console.log(`- Phone:   ${phone || "N/A"}`);
      console.log(`- Company: ${company || "N/A"}`);
      console.log(`- Service: ${service}`);
      console.log(`- Budget:  ${budget}`);
      console.log(`- Message: ${message}`);
      if (deliveryErrorDetail) {
        console.log(`- Delivery Status Note: ${deliveryErrorDetail}`);
      }
      console.log("=======================================================\n");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your inquiry has been received. Our team will contact you within 24 hours.",
        deliveredViaEmail: emailSentSuccessfully,
        note: emailSentSuccessfully
          ? "Delivered directly to hr@brothersolutions.online inbox"
          : "Recorded in system leads log. Configure SMTP/Resend API key in .env.local to send live emails.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Brother Solutions Contact API Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or reach out directly on WhatsApp." },
      { status: 500 }
    );
  }
}

interface LeadDetails {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
}

function generateEmailHTML({ name, email, phone, company, service, budget, message }: LeadDetails) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; color: #111; max-width: 600px; margin: 0 auto; border: 1px solid #e8e8e8; border-radius: 12px; background-color: #ffffff;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #D4AF37;">
        <h2 style="color: #111111; margin: 0; font-size: 22px;">Brother Solutions</h2>
        <p style="color: #777777; font-size: 13px; margin: 4px 0 0 0;">New Website Contact Form Submission</p>
      </div>

      <div style="padding: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; width: 140px;">Full Name:</td>
            <td style="padding: 8px 0; font-weight: 700; color: #111;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1565C0; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Phone:</td>
            <td style="padding: 8px 0; color: #111;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Company:</td>
            <td style="padding: 8px 0; color: #111;">${company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Interested Service:</td>
            <td style="padding: 8px 0; font-weight: 600; color: #D4AF37;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555;">Project Budget:</td>
            <td style="padding: 8px 0; color: #111;">${budget}</td>
          </tr>
        </table>
      </div>

      <div style="padding: 16px; background-color: #fafafa; border-left: 4px solid #D4AF37; border-radius: 6px; margin-top: 10px;">
        <h4 style="margin: 0 0 8px 0; color: #111; font-size: 14px;">Project Description:</h4>
        <p style="margin: 0; white-space: pre-wrap; color: #444; font-size: 14px; line-height: 1.6;">${message}</p>
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eeeeee; text-align: center; font-size: 12px; color: #888888;">
        <p style="margin: 0;">Sent automatically from <a href="https://brothersolutions.online" style="color: #888888;">Brother Solutions Website</a></p>
      </div>
    </div>
  `;
}
