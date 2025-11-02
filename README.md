# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- 🎨 Modern UI with shadcn/ui components
- 🌓 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and Turbopack
- 🎯 TypeScript for type safety
- 🎭 Smooth animations and transitions

## Pages

- **Home** - Welcome page with hero section
- **About** - Personal information and skills
- **Projects** - Showcase of projects and work
- **Blog** - Technical blog posts
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono fonts
- **Deployment**: Vercel Analytics ready

## Project Structure

```
portfolio-website/
├── app/                  # Next.js app directory
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── header.tsx
│   └── footer.tsx
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Customization

1. Update personal information in the page components
2. Add your projects to `app/projects/page.tsx`
3. Customize colors in `app/globals.css`
4. Update social links in `components/footer.tsx`

## License

MIT License - feel free to use this template for your own portfolio!

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-website)

---

Built with ❤️ using Next.js and React
