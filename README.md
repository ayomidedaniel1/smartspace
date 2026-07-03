# SmartSpace - Premium Coworking & Coliving Space Finder

SmartSpace is a modern web application designed for hybrid workers, remote developers, and digital nomads to find and book premium coworking offices, dedicated desks, and coliving studios equipped with work-focused amenities across **Nigeria, the United States, and the United Kingdom**.

![SmartSpace Hero Mockup](src/assets/Header.svg)

---

## 💡 The Real-Life Problem & Solution

### The Problem
Traditional real estate listing portals prioritize basic specifications (number of bedrooms, bathrooms, sale price) but ignore essential details needed by modern remote workers:
- Availability of constant backup power/solar systems.
- Verified fiber internet speeds.
- Access to private, soundproof call booths and meeting rooms.
- Ergonomic chairs (Steelcase, Herman Miller) and monitor rentals.

### The Solution
SmartSpace provides a curated space finder featuring:
1. **Interactive Search & Multi-Factor Filters**: Users can browse spaces and instantly filter listings by country, space category (Hot Desk, Dedicated Desk, Private Office, Coliving), price range, and a checklist of developer-focused productivity amenities.
2. **Interactive Workspace Booking Simulator**: Dynamic property detail pages display comprehensive specifications, host profiles, and a booking simulator that computes total costs in real-time, applies duration-based volume discounts, and generates a mock reservation confirmation ticket.

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) (Strict compilation, type-safety, no `any` fallback types)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) & Vanilla CSS
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🏃 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.x or later) and [pnpm](https://pnpm.io/) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ayomidedaniel1/smartspace.git
   cd smartspace
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. Build for production:
   ```bash
   pnpm build
   ```

5. Start the production build:
   ```bash
   pnpm start
   ```

---

## 📂 Project Structure

```
├── app/                             # Next.js App Router Pages & Layouts
│   ├── [propertyId]/                # Workspace details & booking simulator
│   ├── list/                        # Coworking search engine & filter panel
│   ├── globals.css                  # Tailwinds & custom utility classes
│   ├── layout.tsx                   # Font configurations & layout wrappers
│   ├── page.tsx                     # Landing home page
│   └── icon.png                     # Branding logo / shortcut icon
├── src/
│   ├── api/
│   │   └── index.ts                 # Typed coworking space data provider
│   ├── assets/                      # SVGs & PNG vector assets
│   ├── components/                  # Shared modular React UI components
│   ├── constants/                   # Navigation items, testimonial constants
│   ├── containers/                  # Landing page structure sections
│   ├── hooks/
│   │   └── useSticky.ts             # Memory-leak-free scroll sticky hook
│   ├── helpers/
│   │   └── Loader.tsx               # CgSpinner loading wrapper
│   └── types/
│       └── svg.d.ts                 # TypeScript module asset declarations
├── tsconfig.json                    # TS compiler configuration
├── tailwind.config.js               # Tailwind scanning setups
└── package.json                     # Dependency manifest
```
