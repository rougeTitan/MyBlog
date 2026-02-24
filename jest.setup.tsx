import "@testing-library/jest-dom"

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}))

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { fill, priority, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="" {...rest} data-fill={fill ? "true" : undefined} data-priority={priority ? "true" : undefined} />
  },
}))

// Mock Next.js Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  },
}))

// Mock @vercel/analytics
jest.mock("@vercel/analytics/next", () => ({
  Analytics: () => null,
}))

// Suppress console warnings in tests
const originalConsoleError = console.error
console.error = (...args: unknown[]) => {
  if (
    typeof args[0] === "string" &&
    (args[0].includes("Warning: ReactDOM.render") ||
      args[0].includes("Warning: An update to") ||
      args[0].includes("act("))
  ) {
    return
  }
  originalConsoleError(...args)
}
