# Efaz Ahmed — UI/UX Designer Portfolio

Next.js 16 + Tailwind CSS 4. Fully static, ready for Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Edit content

- **Personal info** (name, email, bio, socials, tools, experience, stats): `lib/site.ts`
- **Projects** (cards + case-study pages at `/work/<slug>`): `lib/projects.ts`
  - To add a project, copy an existing entry, put its cover image in
    `public/projects/` and set `cover` to `/projects/your-image.jpg`.
- **Resume**: add `public/resume.pdf`.
- **Portrait**: replace `public/efaz.jpg`.

Search for `TODO` to find every placeholder.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com, click **Add New > Project**, import the repo, and keep the
   defaults (Framework: Next.js). Click **Deploy**.
3. Update `site.url` in `lib/site.ts` to your final domain.
