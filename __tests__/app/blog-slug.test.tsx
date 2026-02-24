import { render, screen } from "@testing-library/react"

// Mock notFound from next/navigation (override the global mock for this file)
const mockNotFound = jest.fn()
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
  notFound: () => {
    mockNotFound()
    throw new Error("NEXT_NOT_FOUND")
  },
}))

// Mock the blog content module
jest.mock("@/content/blog", () => ({
  getBlogPostMeta: (slug: string) => {
    if (slug === "test-new-post") {
      return {
        slug: "test-new-post",
        title: "Test New Post",
        excerpt: "A test post excerpt.",
        date: "2025-06-01",
        readTime: "4 min read",
        tags: ["React", "TypeScript"],
        featured: true,
        thumbnail: "/test.jpg",
      }
    }
    return undefined
  },
  getBlogPostContent: (slug: string) => {
    if (slug === "test-new-post") {
      return <div data-testid="new-content">New structure content</div>
    }
    return null
  },
}))

import BlogPostPage from "@/app/blog/[slug]/page"

describe("BlogPostPage", () => {
  describe("with new content structure", () => {
    it("renders post title", async () => {
      const page = await BlogPostPage({ params: Promise.resolve({ slug: "test-new-post" }) })
      render(page)
      expect(screen.getByRole("heading", { level: 1, name: /test new post/i })).toBeInTheDocument()
    })

    it("renders post tags as badges", async () => {
      const page = await BlogPostPage({ params: Promise.resolve({ slug: "test-new-post" }) })
      render(page)
      expect(screen.getByText("React")).toBeInTheDocument()
      expect(screen.getByText("TypeScript")).toBeInTheDocument()
    })

    it("renders formatted date", async () => {
      const page = await BlogPostPage({ params: Promise.resolve({ slug: "test-new-post" }) })
      render(page)
      // The date formatting depends on timezone, so check for the time element instead
      const timeEl = screen.getByText(
        (content) => {
          return /2025/.test(content)
        },
        { selector: "time" }
      )
      expect(timeEl).toBeInTheDocument()
      expect(timeEl).toHaveAttribute("datetime", "2025-06-01")
    })

    it("renders read time", async () => {
      const page = await BlogPostPage({ params: Promise.resolve({ slug: "test-new-post" }) })
      render(page)
      expect(screen.getByText("4 min read")).toBeInTheDocument()
    })

    it("renders Back to Blog link", async () => {
      const page = await BlogPostPage({ params: Promise.resolve({ slug: "test-new-post" }) })
      render(page)
      expect(screen.getByText(/back to blog/i)).toBeInTheDocument()
    })

    it("renders new structure content", async () => {
      const page = await BlogPostPage({ params: Promise.resolve({ slug: "test-new-post" }) })
      render(page)
      expect(screen.getByTestId("new-content")).toBeInTheDocument()
    })
  })

  describe("with legacy content structure", () => {
    it("renders legacy post title", async () => {
      const page = await BlogPostPage({
        params: Promise.resolve({ slug: "building-scalable-nextjs-apps" }),
      })
      render(page)
      expect(
        screen.getByRole("heading", { level: 1, name: /building scalable next\.js applications/i })
      ).toBeInTheDocument()
    })

    it("renders legacy post tags", async () => {
      const page = await BlogPostPage({
        params: Promise.resolve({ slug: "building-scalable-nextjs-apps" }),
      })
      render(page)
      expect(screen.getByText("Next.js")).toBeInTheDocument()
      expect(screen.getByText("Performance")).toBeInTheDocument()
      expect(screen.getByText("Architecture")).toBeInTheDocument()
    })

    it("renders legacy content as HTML", async () => {
      const page = await BlogPostPage({
        params: Promise.resolve({ slug: "building-scalable-nextjs-apps" }),
      })
      render(page)
      expect(screen.getByText(/scalability should be a primary concern/i)).toBeInTheDocument()
    })

    it("parses markdown headings in legacy content", async () => {
      const page = await BlogPostPage({
        params: Promise.resolve({ slug: "building-scalable-nextjs-apps" }),
      })
      const { container } = render(page)
      // Legacy content renders h2 elements from ## headings
      const h2Elements = container.querySelectorAll("h2")
      expect(h2Elements.length).toBeGreaterThan(0)
    })

    it("parses list items in legacy content", async () => {
      const page = await BlogPostPage({
        params: Promise.resolve({ slug: "building-scalable-nextjs-apps" }),
      })
      const { container } = render(page)
      const listItems = container.querySelectorAll("li")
      expect(listItems.length).toBeGreaterThan(0)
    })

    it("parses code blocks in legacy content", async () => {
      const page = await BlogPostPage({
        params: Promise.resolve({ slug: "building-scalable-nextjs-apps" }),
      })
      const { container } = render(page)
      const codeBlocks = container.querySelectorAll("pre code")
      expect(codeBlocks.length).toBeGreaterThan(0)
    })
  })

  describe("not found behavior", () => {
    it("calls notFound for unknown slugs", async () => {
      await expect(
        BlogPostPage({ params: Promise.resolve({ slug: "non-existent-post" }) })
      ).rejects.toThrow("NEXT_NOT_FOUND")
      expect(mockNotFound).toHaveBeenCalled()
    })
  })
})
