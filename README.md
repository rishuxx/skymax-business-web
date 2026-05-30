# Skymax Business Website

A premium corporate website for Skymax built with React, Vite, and Tailwind CSS. Features an elegant Bento-grid architecture, high-contrast typography, and a modern B2B client interface.

## 🚀 Key Features

- **Pristine Performance**: Built on Vite with React 18 for lighting-fast component resolution.
- **Enterprise Design System**: Tailwind CSS configured with rigorous layout geometry and custom thematic brand colors (Deep Skymax Blue).
- **Responsive Architecture**: Mobile-first philosophy executing beautifully across all breakpoints up to ultra-wide displays.
- **Custom Backend APIs**: Complete integration with a custom Express server handling form submissions securely on the backend without exposing secret API keys.
- **Lead Generation System**: Direct integrations with Supabase (Database Tracking) and Resend (Immediate Emails).

## 📥 Local Development Quickstart

1. **Download the project**
   If you have downloaded this project from AI Studio as a `.zip`, extract it to your preferred directory.

2. **Setup your environment variables**
   - The `.env` file is standardly skipped when exporting projects. 
   - We have supplied your active configuration inside `env_backup.txt`. 
   - **Rename `env_backup.txt` to `.env`** at the root of your folder before starting the server.

3. **Install Dependencies**
   Make sure you have Node.js (v18+) installed.
   ```bash
   npm install
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   This will boot the Express API server and the Vite development server concurrently at `http://localhost:3000`.

## 📦 Production Build

To test the compiled production version locally:

```bash
npm run build
npm run start
```
This builds the backend logic and bundles the React frontend into `dist/`, running everything from a consolidated `server.cjs` entry.

## 🗂️ Project Structure

- `src/components/` - Isolated visual UI fragments and sections (Navigation, Footer, Bento views).
- `src/App.tsx` - The central router and composite view manager.
- `server.ts` - The backend Express server containing our API routes (e.g., `/api/contact`) and integrating Supabase and Resend.

## 🛡️ Security Note

Keep your `.env` file secure. Do not commit it to public GitHub repositories. The credentials for Supabase and the Resend API are sensitive server-side variables.
