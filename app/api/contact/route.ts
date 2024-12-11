import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, size, budget, message, source } = body

    await transporter.sendMail({
      from: '"Dark Data Labs" <contact@darkdatalabs.fr>',
      to: "damien.bihel@darkdatalabs.fr",
      subject: `Nouvelle demande de contact de ${name} - ${company}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Taille de l'entreprise :</strong> ${size}</p>
        <p><strong>Budget :</strong> ${budget}</p>
        <p><strong>Source :</strong> ${source}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    )
  }
}