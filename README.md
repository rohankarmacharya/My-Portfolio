This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1. First ma hamile assets folder create garem ra tyaha assets ko file haru halem
2. Layout.js ma gayera title change garem website ko
3. page.js ma gayera div remove garem ra fragment "<></>" use garem
4. layout.js ma gayera Outfit ra Ovo font import garem ra variables hatayera subsets matra rakhem ra tesma ni weight haru add garem
5. global.css ma yetti garem: @import "tailwindcss";

\*{
font-family: Outfit;
}

6. layout.js ko export default function ma variables ko thau ma clasname lekhem
   //Basic Setup yeti ho

7. app folder bhitra components folder banaune ra tyaha bhitra ni Navbar.jsx create garne ra rafce(ReactArrowFunctionComponent) snippet use garne

8. Navbar.jsx ma logo haru, anchor tags haru add garem (yo miss garnu bhayena: import { assets } from '@/assets/assets')

9. page.js ma gayera fragment bhitra navbar component halem ra CSR garna ko lagi "use client" garem on top

10. issue aaucha alt property add bhayena bhanera so Navbar.jsx ma Image component ma alt pni add garnu paryo

11. Tailwind css ko kaam garcham Navbar ma className garera styling garcham
12. Contact button ma css garcham
13. Ovo font chalirako thyena fix garna windsurf use garey
14. shadow diyo else: bg-white shadow-sm bg-opacity-50' (Navbar)

15. Navbar ma gradient (header_bg sthg kei cha file assets ma) ra yeti garyo:
<div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>

16. moon_icon halyo aba contact button ko agadi
17. aba euta menu icon halcham jun chai mobile ma matra visible huncha
    <button className='block md:hidden ml-3'>
    <Image src={assets.menu_black} alt="" className='w-6'/>
    </button>

18. mobile ko lagi kaam garyo
19. Header banayo
20. Layout.js ma yeti garyo: className={`${outfit.className} ${ovo.variable} antialiased leading-8
    overflow-x-hidden`} leading le spacing dincha
