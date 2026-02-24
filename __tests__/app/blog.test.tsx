import { render, screen } from "@testing-library/react"
import BlogPage from "@/app/blog/page"

// Mock the blog content module
jest.mock("@/content/blog", () => ({
  allBlogPosts: [
    {
      slug: "test-featured-post",
      title: "Featured Blog Post",
      excerpt: "This is a featured post excerpt.",
      date: "2025-01-15",
      readTime: "5 min read",
      tags: ["React", "Testing"],
      featured: true,
    },
    {
      slug: "test-recent-post",
      title: "Recent Blog Post",
      excerpt: "This is a recent post excerpt.",
      date: "2025-01-10",
      readTime: "3 min read",
      tags: ["Next.js"],
      featured: false,
    },
  ],
}))

describe("BlogPage", () => {
  it("renders the Blog heading", () => {
    render(<BlogPage />)
    expect(screen.getByRole("heading", { level: 1, name: /blog/i })).toBeInTheDocument()
  })

  it("renders the page description", () => {
    render(<BlogPage />)
    expect(screen.getByText(/thoughts on software development, web technologies/i)).toBeInTheDocument()
  })

  it("renders Featured Posts section", () => {
    render(<BlogPage />)
    expect(screen.getByRole("heading", { name: /featured posts/i })).toBeInTheDocument()
  })

  it("renders Recent Posts section", () => {
    render(<BlogPage />)
    expect(screen.getByRole("heading", { name: /recent posts/i })).toBeInTheDocument()
  })

  it("renders featured blog post titles", () => {
    render(<BlogPage />)
    expect(screen.getByText("Featured Blog Post")).toBeInTheDocument()
  })

  it("renders recent blog post titles", () => {
    render(<BlogPage />)
    expect(screen.getByText("Recent Blog Post")).toBeInTheDocument()
  })

  it("renders post tags", () => {
    render(<BlogPage />)
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Testing")).toBeInTheDocument()
    expect(screen.getByText("Next.js")).toBeInTheDocument()
  })

  it("renders post read times", () => {
    render(<BlogPage />)
    expect(screen.getByText("5 min read")).toBeInTheDocument()
    expect(screen.getByText("3 min read")).toBeInTheDocument()
  })

  it("links to individual blog posts", () => {
    render(<BlogPage />)
    const links = screen.getAllByRole("link")
    const featuredLink = links.find((l) => l.getAttribute("href") === "/blog/test-featured-post")
    const recentLink = links.find((l) => l.getAttribute("href") === "/blog/test-recent-post")
    expect(featuredLink).toBeDefined()
    expect(recentLink).toBeDefined()
  })
})
