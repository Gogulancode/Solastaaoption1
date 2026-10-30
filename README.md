# Solastaa Salon

Next.js App Router website with React components and responsive CSS.

## Development

Run `npm install`, then `npm run dev`. Open http://localhost:3001.
For a production preview run `npm run build`, then `npm start` (port 3000).
Run `node --test tests/*.test.mjs` for enquiry endpoint tests using a mocked email provider.

## Email configuration

Copy `.env.example` to `.env.local` and configure the Resend sending key, verified sender and recipient addresses. Configure the same variables in Vercel before deploying. Never commit `.env.local`.

Careers and Franchise forms send through server-side API routes. Provider errors are shown as retry messages; submissions are not stored in a database. Live delivery needs an end-to-end check after configuration. Honeypot filtering and request validation provide basic protection; there is no distributed rate limiter.

## Website

General and salon-specific booking links point to Zenoti. Membership enquiries use salon telephone and email links. Legacy `.html` links redirect to their Next.js routes. Images are served from `public/assets/`.

The homepage statistics are illustrative and await client confirmation. Instagram integration is deferred.

## Deployment

Deploy as a Next.js project. `vercel.json` enables the framework and API routes. Local secrets, review screenshots and generated build files are excluded from upload.
