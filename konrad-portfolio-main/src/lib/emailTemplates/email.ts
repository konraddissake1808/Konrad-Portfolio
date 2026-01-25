type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function contactEmailTemplate({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New message from your portfolio</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>

      <hr />

      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>

      <hr />
      <small>Sent from your portfolio website</small>
    </div>
  `;
}
