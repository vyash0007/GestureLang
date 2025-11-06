# GestureLang — UI Improvements

This branch adds several UI improvements and small features to the GestureLang Next.js app:

- Dark / light theme toggle (persists in localStorage)
- Responsive Tailwind-based NavBar with mobile menu
- Animated Gesture page (searchable grid, animated cards, modal with copy/download)
- Interactive Tutorial page (stepper with progress)
- Download page improvements (format choices, preview, compute file size, copy-to-clipboard)
- Framer Motion for small animations

How to run

1. Install dependencies

```powershell
cd 'c:\Users\vyash\OneDrive\Desktop\GestureLang\GestureLang'
npm install
```

2. Start dev server

```powershell
npm run dev
```

Open http://localhost:3000 (or 3001 if 3000 is in use).

Quality checks

- Type-check: `npm run typecheck`
- Lint: `npm run lint`
- Combined: `npm run check`

Notes

- Sample images are expected under `public/images/image-1.jpg` ... `image-26.jpg`. If absent, add placeholder images.
- If you want stronger animations, we can increase Framer Motion usage for page transitions.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
