# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- 🎨 Modern UI with shadcn/ui components
- 🌓 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 and Turbopack
- 🎯 TypeScript for type safety
- 🎭 Smooth animations and transitions
- ✅ 83 automated tests with 80%+ coverage
- 🔄 CI/CD pipeline with GitHub Actions
- 🧹 ESLint + Prettier for code quality

## CI/CD Pipeline

This project uses **trunk-based development** with a GitHub Actions pipeline that runs on every push to `main` and on pull requests targeting `main`.

### Pipeline Stages

| Stage               | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Style Integrity** | ESLint linting, Prettier format check, TypeScript type-check |
| **Test**            | Jest test suite with 80% coverage threshold enforcement      |
| **Code Quality**    | Console.log scan, TODO/FIXME detection                       |
| **Build & Deploy**  | Next.js production build + AWS Amplify deployment            |

### Running Locally

```bash
# Run the full CI validation locally
pnpm ci:validate

# Individual checks
pnpm lint              # ESLint
pnpm format:check      # Prettier
pnpm type-check        # TypeScript
pnpm test              # Jest tests
pnpm test:coverage     # Jest with coverage report
```

### Test Coverage

- **11 test suites**, **83 tests** covering all pages, components, and utilities
- Coverage thresholds enforced at **80%** for statements, branches, functions, and lines
- Current coverage: ~97.8% statements, ~88.2% branches, ~95.1% functions, ~99.2% lines

## Pages

- **Home** - Welcome page with hero section
- **About** - Personal information and skills
- **Projects** - Showcase of projects and work
- **Blog** - Technical blog posts
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (`npm install -g pnpm`)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rougeTitan/MyBlog.git
cd MyBlog
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono fonts
- **Deployment**: AWS Amplify + Vercel Analytics ready
- **Testing**: Jest 30 + React Testing Library
- **Linting**: ESLint 9 (flat config) + Prettier
- **CI/CD**: GitHub Actions (trunk-based development)

## Project Structure

```
portfolio-website/
├── .github/workflows/   # CI/CD pipeline configuration
├── app/                 # Next.js app directory
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx
│   └── footer.tsx
├── content/             # Blog post content
├── lib/                 # Utility functions
├── __tests__/           # Test suites
│   ├── app/             # Page tests
│   ├── components/      # Component tests
│   ├── content/         # Content tests
│   └── lib/             # Utility tests
├── public/              # Static assets
├── styles/              # Global styles
├── eslint.config.mjs    # ESLint configuration
├── jest.config.ts       # Jest configuration
├── jest.setup.tsx        # Test setup & mocks
└── .prettierrc          # Prettier configuration
```

## Customization

1. Update personal information in the page components
2. Add your projects to `app/projects/page.tsx`
3. Customize colors in `app/globals.css`
4. Update social links in `components/footer.tsx`

## License

MIT License - feel free to use this template for your own portfolio!

## Deployment

This project is configured for deployment on **AWS Amplify** with automatic builds triggered by the CI/CD pipeline on pushes to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rougeTitan/MyBlog)

---

Built with ❤️ using Next.js and React
