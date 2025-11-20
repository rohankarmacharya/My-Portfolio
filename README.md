This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Rohan Karmacharya – Portfolio

A personal portfolio website built with **Next.js App Router**, **React**, **Tailwind CSS v4**, and **motion** for smooth animations. The site showcases projects, skills, and contact information in a single-page layout.

This project was initially created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and then customized for a developer portfolio.

---

## Tech Stack

- **Framework**: Next.js `16.0.3` (App Router)
- **UI Library**: React `19.2.0`
- **Styling**: Tailwind CSS `^4.1.17` + custom CSS in `app/globals.css`
- **Animations**: [`motion`](https://motion.dev/) `^12.23.24` (used as `motion/react`)
- **Email / Backend (planned)**: `nodemailer` `^7.0.10` (currently installed, can be used later for contact form backend)
- **Tooling**:
  - ESLint `^9` + `eslint-config-next` `16.0.3`
  - PostCSS `^8.5.6`, Autoprefixer `^10.4.22`
  - Tailwind PostCSS plugin `@tailwindcss/postcss` `^4`

---

## Project Structure (high level)

```text
app/
  layout.js         # Root layout, fonts, global wrappers
  page.js           # Main page that uses the components below
  components/
    Header.jsx      # Hero section with intro, image, and CTA buttons
    About.jsx       # About me section with info cards and tools
    Work.jsx        # Portfolio / projects grid
    Contact.jsx     # Contact form and contact info
    Footer.jsx      # Footer with navigation and social links

assets/
  assets.js         # Central export of image paths and data arrays
  public/           # Images, PDFs (e.g. CV), icons used across the site

public/
  CV.pdf            # Resume file used for download
  ...               # Additional static assets
```

---

## Getting Started

### 1. Install dependencies

Use your preferred package manager. Example with npm:

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The app uses the **App Router**, so the main entry is under the `app/` directory (e.g. `app/page.js`, `app/layout.js`).

### 3. Build for production

```bash
npm run build
npm run start
```

This will create an optimized production build and start the Next.js server.

---

## Available Scripts

Defined in `package.json`:

- **`npm run dev`**

  - Starts the Next.js development server at `http://localhost:3000`.
  - Hot reloads when you edit files in `app/` or `assets/`.

- **`npm run build`**

  - Creates an optimized production build of the portfolio.
  - Runs Next.js build steps (including compilation, bundling, etc.).

- **`npm run start`**

  - Starts the production server using the build artifacts from `npm run build`.

- **`npm run lint`**
  - Runs ESLint using the Next.js ESLint configuration.
  - Helps catch issues like missing `alt` attributes, unused imports, etc.

---

## Main Components & Features

### `Header.jsx`

- **Purpose**: Hero section at the top of the page.
- **Features**:
  - Circular profile image using Next.js `Image` and imported assets.
  - Animated greeting text using `motion.h3`.
  - Subtitle with role (`BSc.CSIT student`).
  - Short description about coding and interests.
  - Two primary buttons:
    - **Contact me** – scrolls to the contact section.
    - **My resume** – downloads/opens `CV.pdf`.

### `About.jsx`

- **Purpose**: Introduces the developer with a short bio, info cards, and a list of tools.
- **Data sources**:
  - `infoList` from `assets/assets.js`: used to render cards (icon, title, description).
  - `toolsData` from `assets/assets.js`: used to render tool icons.
- **Features**:
  - Animated section headings ("Introduction", "About me").
  - Left-side image (`assets.user_image`).
  - Right-side text explaining skills and focus.
  - Info cards grid with hover animations.
  - "Tools I use" horizontal list with animated tool icons.

### `Work.jsx`

- **Purpose**: Displays portfolio projects and a CTA to see more work.
- **Data sources**:
  - `workData` from `assets/assets.js`: array of projects with `bgImage`, `title`, `description`, and optional `link`.
  - `assets.send_icon` for the action icon.
- **Features**:
  - Section heading and description about portfolio and services.
  - Responsive grid of project tiles (1–4 columns depending on screen size).
  - Each tile uses `backgroundImage` for a project, with hover animation.
  - Clicking a tile opens `project.link` in a new tab (if defined).
  - "Show more" button at the bottom.

### `Contact.jsx`

- **Purpose**: Contact section with a form and direct email link.
- **Client component**: Marked with `"use client"` to enable hooks and event handlers.
- **Form fields**:
  - `Full name` (required)
  - `Email address` (required)
  - `Subject` (optional, with a default suggestion text)
  - `Message` (required textarea)
- **Behavior**:
  - `handleSubmit` prevents the default form submission for now.
  - You can later wire this up to an API route that uses `nodemailer`.
- **Extra**:
  - Shows logo and a clickable email link that opens Gmail compose with `rohankarmacharya.biz@gmail.com`.

### `Footer.jsx`

- **Purpose**: Footer with quick navigation links and social media profiles.
- **Features**:

  - Smooth scroll buttons to sections: `Home`, `About`, `Services`, `Work`, `Contact`.
  - Social icons (GitHub, LinkedIn, Instagram, Facebook) with hover effects.
  - Dynamic year in copyright: `© {new Date().getFullYear()}`.
  - Text about being "Designed & built with React and Next.js".

- **Purpose**: Footer with quick navigation links and social media profiles.
- **Features**:
  - Smooth scroll buttons to sections: `Home`, [About]
  - Dynamic year in copyright: `© {new Date().getFullYear()}`.
  - Text about being "Designed & built with React and Next.js".
- **Social Links**:
  - **GitHub**: Links to your GitHub profile.
  - **LinkedIn**: Links to your LinkedIn profile.
  - **Instagram**: Links to your Instagram profile.
  - **Facebook**: Links to your Facebook profile.
  - **Twitter (X)**: Links to your Twitter profile (added in v1.0.0).

---

## Styling & Fonts

- Tailwind CSS v4 is initialized in `globals.css` using:

  ```css
  @import "tailwindcss";

  * {
    font-family: Outfit;
  }
  ```

- Fonts (e.g. **Outfit** and **Ovo**) are loaded and configured inside `app/layout.js` using the `next/font` system, then applied through `className` on the `<body>` (e.g. combining `outfit.className` and `ovo.variable`).
- Layout also sets global styles like `antialiased`, `leading-8`, and `overflow-x-hidden` to improve readability and avoid horizontal scroll.

---

## Animations (motion)

The project uses the **`motion`** library (`import { motion } from "motion/react"`) for React-based animations:

- Common pattern:

  ```jsx
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: false, amount: 0.4 }}
  >
    {/* Content */}
  </motion.div>
  ```

- Used across:
  - `Header.jsx` for image and text entrance.
  - `About.jsx` for headings, image, info cards, and tools list.
  - `Work.jsx` for section text and project tiles (including hover scale effects).
  - `Contact.jsx` for the section container, text, form, and footer.

---

## NPM Packages Overview

- **next**: Core React framework for routing, server components, image optimization, and deployment.
- **react**, **react-dom**: UI library and DOM renderer.
- **motion**: Declarative animations for React components.
- **nodemailer**: Email sending from Node.js. Not yet wired, but can be used with an API route for the contact form.

- **tailwindcss**, **@tailwindcss/postcss**, **postcss**, **autoprefixer**:

  - TailwindCSS utility classes for styling.
  - PostCSS pipeline and vendor prefixing.

- **eslint**, **eslint-config-next**:
  - Linting for JavaScript/TypeScript and React/Next.js best practices.

---

## Deployment

You can deploy this portfolio on platforms that support Next.js (e.g. **Vercel**, Netlify, or your own Node server).

Typical Vercel deployment flow:

1. Push your project to GitHub/GitLab/Bitbucket.
2. Create a new project on [Vercel](https://vercel.com/), import the repo.
3. It will auto-detect Next.js and use `npm run build`.
4. Set any environment variables if you add a `nodemailer` API route in the future.

For more details, refer to the official [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Development Notes (Original Log)

Below are the original Nepali/English mixed notes about how this project was set up. They are kept here as a reference for your future self.

1. First ma hamile `assets` folder create garem ra tyaha assets ko file haru halem.
2. `layout.js` ma gayera website ko title change garem.
3. `page.js` ma gayera `div` remove garem ra fragment `<> </>` use garem.
4. `layout.js` ma gayera Outfit ra Ovo font import garem, variables hatayera `subsets` matra rakhem ra tesma ni `weight` haru add garem.
5. `globals.css` ma yetti garem:

   ```css
   @import "tailwindcss";

   * {
     font-family: Outfit;
   }
   ```

6. `layout.js` ko `export default function` ma variables ko thau ma `className` lekhem.

   - // Basic setup yeti ho.

7. `app` folder bhitra `components` folder banaune ra tyaha bhitra `Navbar.jsx` create garne ra `rafce` (React Arrow Function Component) snippet use garne.

8. `Navbar.jsx` ma logo haru, anchor tags haru add garem (yo miss garnu bhayena: `import { assets } from '@/assets/assets'`).

9. `page.js` ma gayera fragment bhitra `Navbar` component halem ra CSR garna ko lagi `"use client"` garem on top.

10. Issue aaucha `alt` property add bhayena bhanera, so `Navbar.jsx` ma `Image` component ma `alt` pani add garnu paryo.

11. Tailwind CSS ko kaam garcham `Navbar` ma `className` garera styling garcham.
12. `Contact` button ma CSS garcham.
13. Ovo font chalirako thyena, fix garna Windsurf use garey.
14. Shadow diyo: `bg-white shadow-sm bg-opacity-50` (`Navbar`).

15. Navbar ma gradient (`header_bg_color` assets ma) ra yeti garyo:

```jsx
<div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
  <Image src={assets.header_bg_color} alt="" className="w-full" />
</div>
```

16. `moon_icon` halyo aba `Contact` button ko agadi.
17. Aba euta menu icon halcham jun chai mobile ma matra visible huncha:

```jsx
<button className="block md:hidden ml-3">
  <Image src={assets.menu_black} alt="" className="w-6" />
</button>
```

18. Mobile ko lagi kaam garyo.
19. `Header` banayo.
20. `layout.js` ma yeti garyo:

```jsx
className={`${outfit.className} ${ovo.variable} antialiased leading-8 overflow-x-hidden`}
```

`leading` le line spacing dincha.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-blue)](https://yourproject.vercel.app)


