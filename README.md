Personal Branding - Laili Majida

Portfolio website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

Production

Website: https://personal-branding-orpin-xi.vercel.app/

GitHub: https://github.com/lailimajida47-max/personal-branding

Features

Meeting 1 - Personal Branding

- Personal portfolio website
- Home page
- About page
- Education section
- Skills section
- Projects section
- Contact section
- Responsive design

Meeting 2 - Dynamic Routing

- Dynamic project detail pages
- Route "/proyek/[id]"
- Custom not-found page
- 404 handling for unavailable projects

Meeting 3 - Supabase

- Supabase database integration
- Projects data stored in Supabase
- Dynamic project data
- Project detail pages connected to Supabase

Meeting 4 - Admin CRUD

- Admin login page
- Admin project management
- Create, read, update, and delete projects
- Supabase authentication
- Admin route protection
- Project fields:
  - Title
  - Description
  - Image URL
  - Live URL
  - Status

Meeting 5 - SEO & Performance

- Static metadata
- Dynamic metadata
- Open Graph image
- "robots.txt"
- Dynamic "sitemap.xml"
- Image optimization using "next/image"
- Descriptive image "alt" attributes
- Lighthouse testing for Performance, Accessibility, Best Practices, and SEO

Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

Run Locally

Clone this repository and install the dependencies:

npm install

Create a ".env.local" file and add the required Supabase environment variables.

Then run the development server:

npm run dev

Open:

http://localhost:3000

Project Structure

app/
├── admin/
│   ├── login/
│   └── projects/
├── proyek/
│   └── [id]/
├── projects/
├── about/
├── lib/
├── layout.tsx
├── opengraph-image.tsx
├── robots.ts
└── sitemap.ts

SEO Files

The project includes:

- "/opengraph-image"
- "/robots.txt"
- "/sitemap.xml"

These files are used to improve search engine optimization and social media sharing.

Lighthouse

Lighthouse was used to test the website before and after the optimization process.

Tested categories:

- Performance
- Accessibility
- Best Practices
- SEO

The final Lighthouse score was not lower than the initial score after the SEO and image optimization changes.