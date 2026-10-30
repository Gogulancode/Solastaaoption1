export const runtime = 'nodejs';
const areas = ['Hair artistry', 'Skin & beauty', 'Salon operations', 'Other'];
const reply = (error, status) => Response.json({ error }, { status });

export async function POST(request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return reply('Please submit from our website.', 403);
  if (!request.headers.get('content-type')?.includes('application/json')) return reply('Invalid request.', 415);
  let data;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return reply('Your message is too long.', 413);
    data = JSON.parse(raw);
  } catch { return reply('Please check your details and try again.', 400); }
  if (!data || typeof data !== 'object') return reply('Invalid request.', 400);
  if (data.website) return Response.json({ ok: true });
  const { name, email, expertise, message = '', submissionId } = data;
  if (typeof name !== 'string' || !name.trim() || name.length > 100 || /[\r\n]/.test(name) ||
      typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !areas.includes(expertise) || typeof message !== 'string' || message.length > 4000 ||
      typeof submissionId !== 'string' || !/^[0-9a-f-]{36}$/i.test(submissionId)) {
    return reply('Please enter a valid name, email and area of expertise. Keep your message under 4,000 characters.', 400);
  }
  const RESEND_API_KEY = process.env.RESEND_API_KEY?.trim();
  const EMAIL_FROM = process.env.EMAIL_FROM?.trim();
  const CAREERS_EMAIL_TO = process.env.CAREERS_EMAIL_TO?.trim();
  if (!RESEND_API_KEY || !EMAIL_FROM || !CAREERS_EMAIL_TO) return reply('Applications are temporarily unavailable. Please try again later.', 503);
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `careers/${submissionId}` },
      body: JSON.stringify({ from: EMAIL_FROM, to: [CAREERS_EMAIL_TO], reply_to: email,
        subject: `Careers enquiry: ${expertise}`,
        text: `New careers enquiry from the Solastaa website\n\nName: ${name.trim()}\nEmail: ${email}\nArea of expertise: ${expertise}\n\nMessage:\n${message.trim() || 'No message provided.'}\n\nReply to this email to contact the applicant.` }),
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return reply('We could not send your application. Please try again shortly.', 502);
    const accepted = await response.json();
    if (!accepted.id) return reply('We could not confirm your application. Please try again.', 502);
    return Response.json({ ok: true });
  } catch { return reply('We could not send your application. Please try again shortly.', 502); }
}
