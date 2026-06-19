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
zzz

```
Toye-Studios
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ api
│  │  └─ book
│  │     └─ route.ts
│  ├─ artworks
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ BookingForm.tsx
│  │  ├─ home
│  │  │  ├─ artcurator.css
│  │  │  ├─ ArtCurator.tsx
│  │  │  ├─ CuratedEventsSection.tsx
│  │  │  ├─ featuredworks.css
│  │  │  ├─ FeaturedWorks.tsx
│  │  │  ├─ photography.css
│  │  │  ├─ Photography.tsx
│  │  │  ├─ PhotographySection.tsx
│  │  │  ├─ photographyservices.css
│  │  │  ├─ PhotographyServices.tsx
│  │  │  ├─ PortraitArtistSection.tsx
│  │  │  ├─ showcase.css
│  │  │  ├─ Showcase.tsx
│  │  │  ├─ workshops.css
│  │  │  └─ Workshops.tsx
│  │  ├─ intro
│  │  │  ├─ CinematicIntro.tsx
│  │  │  └─ intro.css
│  │  └─ navigation
│  │     ├─ Clock.tsx
│  │     ├─ CookieBanner.tsx
│  │     ├─ Footer.tsx
│  │     ├─ MobileMenu.tsx
│  │     └─ Navbar.tsx
│  ├─ contact
│  │  └─ page.tsx
│  ├─ fonts
│  │  ├─ GeistMonoVF.woff
│  │  └─ GeistVF.woff
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ photography
│  │  └─ page.tsx
│  ├─ privacy
│  │  └─ page.tsx
│  └─ teaching
│     └─ page.tsx
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ ads.txt
│  ├─ brand
│  │  ├─ 1.png
│  │  ├─ 10.png
│  │  ├─ 11.png
│  │  ├─ 12.png
│  │  ├─ 13.png
│  │  ├─ 14.png
│  │  ├─ 15.png
│  │  ├─ 2.png
│  │  ├─ 21.png
│  │  ├─ 22.png
│  │  ├─ 23.png
│  │  ├─ 3.png
│  │  ├─ 33.png
│  │  ├─ 35.png
│  │  ├─ 4.png
│  │  ├─ 41.png
│  │  ├─ 46.png
│  │  ├─ 47.png
│  │  ├─ 49.png
│  │  ├─ 5.png
│  │  ├─ 50.png
│  │  ├─ 500.png
│  │  ├─ 54.png
│  │  ├─ 55.png
│  │  ├─ 6.png
│  │  ├─ 63.png
│  │  ├─ 66.png
│  │  ├─ 7.png
│  │  ├─ 700.png
│  │  ├─ 71.png
│  │  ├─ 77.png
│  │  ├─ 777.png
│  │  ├─ 78.png
│  │  ├─ 8.png
│  │  ├─ 83.png
│  │  ├─ 84.png
│  │  ├─ 87.png
│  │  ├─ 888.png
│  │  ├─ 9.png
│  │  ├─ 900.png
│  │  ├─ 95.png
│  │  ├─ 96.png
│  │  ├─ 98.png
│  │  ├─ 99.png
│  │  ├─ a.png
│  │  ├─ b.png
│  │  ├─ bash.jpg
│  │  ├─ brushmask.png
│  │  ├─ c.png
│  │  ├─ d.png
│  │  ├─ dd.png
│  │  ├─ e.png
│  │  ├─ f.png
│  │  ├─ fash.jpg
│  │  ├─ filmgrain.png
│  │  ├─ g.png
│  │  ├─ get.png
│  │  ├─ h.png
│  │  ├─ hash.jpg
│  │  ├─ hero-still1.jpg
│  │  ├─ i.png
│  │  ├─ ii.png
│  │  ├─ j.png
│  │  ├─ jash.jpg
│  │  ├─ jj.png
│  │  ├─ k.png
│  │  ├─ l.png
│  │  ├─ lash.jpg
│  │  ├─ let.png
│  │  ├─ logo.jpg
│  │  ├─ logo.svg
│  │  ├─ logo1.svg
│  │  ├─ lp (2).jpg
│  │  ├─ m.png
│  │  ├─ me.jpg
│  │  ├─ n.png
│  │  ├─ noise.png
│  │  ├─ o.png
│  │  ├─ p.png
│  │  ├─ pol (2).jpg
│  │  ├─ pon.png
│  │  ├─ pop.png
│  │  ├─ pp.png
│  │  ├─ pp.svg
│  │  ├─ pt.png
│  │  ├─ q.jpeg
│  │  ├─ w.png
│  │  └─ x.png
│  ├─ changes
│  │  ├─ 1.jpeg
│  │  ├─ 10.jpeg
│  │  ├─ 2.jpeg
│  │  ├─ 3.jpeg
│  │  ├─ 4.jpeg
│  │  ├─ 5.jpeg
│  │  ├─ 6.jpeg
│  │  ├─ 7.jpeg
│  │  ├─ 8.jpeg
│  │  ├─ 9.jpeg
│  │  ├─ m1.jpeg
│  │  ├─ m2.jpeg
│  │  ├─ m3.jpeg
│  │  ├─ m4.jpeg
│  │  ├─ m5.jpeg
│  │  ├─ m6.jpeg
│  │  ├─ m7.jpeg
│  │  ├─ m8.jpeg
│  │  ├─ p1.jpeg
│  │  ├─ p2.jpeg
│  │  ├─ p3.jpeg
│  │  ├─ p4.jpeg
│  │  ├─ p5.jpeg
│  │  └─ v1.mp4
│  ├─ file.svg
│  ├─ fonts
│  │  ├─ CodecPro-Regular.woff2
│  │  ├─ GeistMonoVF.woff
│  │  ├─ GeistVF.woff
│  │  └─ satoshi
│  │     ├─ Satoshi-Black.eot
│  │     ├─ Satoshi-Black.ttf
│  │     ├─ Satoshi-Black.woff
│  │     ├─ Satoshi-Black.woff2
│  │     ├─ Satoshi-BlackItalic.eot
│  │     ├─ Satoshi-BlackItalic.ttf
│  │     ├─ Satoshi-BlackItalic.woff
│  │     ├─ Satoshi-BlackItalic.woff2
│  │     ├─ Satoshi-Bold.eot
│  │     ├─ Satoshi-Bold.ttf
│  │     ├─ Satoshi-Bold.woff
│  │     ├─ Satoshi-Bold.woff2
│  │     ├─ Satoshi-BoldItalic.eot
│  │     ├─ Satoshi-BoldItalic.ttf
│  │     ├─ Satoshi-BoldItalic.woff
│  │     ├─ Satoshi-BoldItalic.woff2
│  │     ├─ Satoshi-Italic.eot
│  │     ├─ Satoshi-Italic.ttf
│  │     ├─ Satoshi-Italic.woff
│  │     ├─ Satoshi-Italic.woff2
│  │     ├─ Satoshi-Light.eot
│  │     ├─ Satoshi-Light.ttf
│  │     ├─ Satoshi-Light.woff
│  │     ├─ Satoshi-Light.woff2
│  │     ├─ Satoshi-LightItalic.eot
│  │     ├─ Satoshi-LightItalic.ttf
│  │     ├─ Satoshi-LightItalic.woff
│  │     ├─ Satoshi-LightItalic.woff2
│  │     ├─ Satoshi-Medium.eot
│  │     ├─ Satoshi-Medium.ttf
│  │     ├─ Satoshi-Medium.woff
│  │     ├─ Satoshi-Medium.woff2
│  │     ├─ Satoshi-MediumItalic.eot
│  │     ├─ Satoshi-MediumItalic.ttf
│  │     ├─ Satoshi-MediumItalic.woff
│  │     ├─ Satoshi-MediumItalic.woff2
│  │     ├─ Satoshi-Regular.eot
│  │     ├─ Satoshi-Regular.ttf
│  │     ├─ Satoshi-Regular.woff
│  │     ├─ Satoshi-Regular.woff2
│  │     ├─ Satoshi-Variable.eot
│  │     ├─ Satoshi-Variable.ttf
│  │     ├─ Satoshi-Variable.woff
│  │     ├─ Satoshi-Variable.woff2
│  │     ├─ Satoshi-VariableItalic.eot
│  │     ├─ Satoshi-VariableItalic.ttf
│  │     ├─ Satoshi-VariableItalic.woff
│  │     └─ Satoshi-VariableItalic.woff2
│  ├─ globe.svg
│  ├─ hand
│  │  ├─ 321.jpg
│  │  ├─ 322.jpg
│  │  ├─ 323.jpg
│  │  ├─ 324.jpg
│  │  ├─ 325.jpg
│  │  ├─ 326.jpg
│  │  ├─ t1.jpg
│  │  ├─ t10.jpg
│  │  ├─ t11.jpg
│  │  ├─ t12.jpg
│  │  ├─ t13.jpg
│  │  ├─ t14.jpg
│  │  ├─ t15.jpg
│  │  ├─ t16.jpg
│  │  ├─ t17.jpg
│  │  ├─ t18.jpg
│  │  ├─ t19.jpg
│  │  ├─ t2.jpg
│  │  ├─ t20.ARW
│  │  ├─ t21.dng
│  │  ├─ t22.jpg
│  │  ├─ t23.jpg
│  │  ├─ t24.jpg
│  │  ├─ t26.jpg
│  │  ├─ t27.jpg
│  │  ├─ t28.jpg
│  │  ├─ t29.jpg
│  │  ├─ t3.jpg
│  │  ├─ t30.jpg
│  │  ├─ t31.jpg
│  │  ├─ t32.jpg
│  │  ├─ t33.jpg
│  │  ├─ t34.jpg
│  │  ├─ t36.jpg
│  │  ├─ t37.jpg
│  │  ├─ t38.png
│  │  ├─ t39.jpg
│  │  ├─ t40.jpg
│  │  ├─ t41.jpg
│  │  ├─ t42.jpg
│  │  ├─ t43.jpg
│  │  ├─ t44.jpg
│  │  ├─ t5.jpg
│  │  ├─ t6.jpg
│  │  ├─ t7.jpg
│  │  ├─ t8.jpg
│  │  ├─ t9.jpg
│  │  ├─ x1.jpeg
│  │  ├─ x10.jpeg
│  │  ├─ x11.jpeg
│  │  ├─ x12.jpeg
│  │  ├─ x13.jpeg
│  │  ├─ x2.jpeg
│  │  ├─ x3.jpeg
│  │  ├─ x4.jpeg
│  │  ├─ x5.jpeg
│  │  ├─ x6.jpeg
│  │  ├─ x7.jpeg
│  │  ├─ x8.jpeg
│  │  ├─ x9.jpeg
│  │  └─ zap.jpg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```