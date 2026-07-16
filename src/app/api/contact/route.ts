import { Resend } from "resend";

const CONTACT_EMAIL = "heimanava.socials@gmail.com";

const SERVICE_LABELS: Record<string, string> = {
  pro: "Heimanava Pro : Community management",
  focus: "Heimanava Focus : Photographie événementielle",
  stories: "Heimanava Stories : Vidéo courte format social",
  studio: "Heimanava Studio : Création Canva",
  inconnu: "Je ne sais pas encore",
};

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { nom, email, entreprise, secteur, service, message } = body;

  if (!nom?.trim() || !email?.trim()) {
    return Response.json({ error: "Le nom et l'email sont requis." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante");
    return Response.json({ error: "Configuration email manquante." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const lines = [
    `Nom : ${nom}`,
    `Email : ${email}`,
    entreprise?.trim() ? `Entreprise : ${entreprise}` : null,
    secteur?.trim() ? `Secteur d'activité : ${secteur}` : null,
    service ? `Service : ${SERVICE_LABELS[service] ?? service}` : null,
    "",
    message?.trim() || "(pas de message)",
  ].filter((line): line is string => line !== null);

  try {
    const { error } = await resend.emails.send({
      from: "Heimanava Socials <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouveau message de ${nom} via le site`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Échec de l'envoi de l'email." }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Échec de l'envoi de l'email." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
