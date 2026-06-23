# Avora Launch MVP

Welcome to the Avora Minimalist Launch MVP. This repository contains the highly-optimized, single-page Next.js application designed to capture leads directly into Google Sheets, alongside a fully architected enterprise dashboard sitting securely in the background.

## 🚀 Quick Start

Ensure you have Node.js 18+ installed.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

This project utilizes the **Next.js App Router** architecture.

- `src/app/page.tsx` - The main entry point for the public-facing landing page MVP.
- `src/components/` - Reusable UI components (Navbar, Hero, Services, Contact, etc.).
- `src/actions/` - Secure Server Actions for the backend dashboard operations.
- `prisma/` - Database schema (MongoDB).
- `ai-processor/` - A separate Python FastAPI microservice scaffolding for future AI workloads.

## 🔗 Google Sheets Lead Capture

The Contact Form (`src/components/Contact.tsx`) is hardwired to bypass traditional databases entirely for the public launch, pushing data straight to a Google Sheet via Google Apps Script.

**To configure your Google Sheet:**
1. Create a Google Sheet with columns: `Name`, `Email`, `Company`, `Message`, `Timestamp`.
2. Go to **Extensions > Apps Script** and deploy the `doPost` webhook (configured to allow access to "Anyone").
3. Paste your generated Web App URL into `src/components/Contact.tsx` at the `GOOGLE_SCRIPT_URL` variable.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Database**: MongoDB & Prisma (for Dashboard routes)

## 🌐 Deployment

The fastest way to deploy this application is via [Vercel](https://vercel.com).
1. Push this repository to GitHub.
2. Import the project into Vercel.
3. Deploy (Zero configuration required for the MVP landing page).
