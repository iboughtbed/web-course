# Web course

This is an open source web course build with everything new in Next.js 14. It is bootstrapped with `create-t3-app`.

> **Notes**
> This project was created specifically for an upcoming summer school course that I'll be teaching.
> The primary goal of the course is to facilitate students' learning of web development skills.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)

## Features to be implemented

- [x] Authentication with **Clerk**
- [x] File uploads with **uploadthing**
- [x] ORM using **Drizzle ORM**
- [x] Database on **Vercel**
- [x] Validation with **Zod**
- [x] Post pages: "/", "/new", "/post/[postId]"
- [ ] File uploads with **uploadthing**

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/iboughtbed/web-course.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

5. Push the database schema

   ```bash
   pnpm run db:push
   ```

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
