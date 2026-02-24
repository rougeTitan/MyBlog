import { allBlogPosts, getBlogPostContent, getBlogPostMeta } from "@/content/blog"

describe("Blog content index", () => {
  it("exports allBlogPosts as a non-empty array", () => {
    expect(Array.isArray(allBlogPosts)).toBe(true)
    expect(allBlogPosts.length).toBeGreaterThan(0)
  })

  it("each blog post has required fields", () => {
    allBlogPosts.forEach((post) => {
      expect(post).toHaveProperty("slug")
      expect(post).toHaveProperty("title")
      expect(post).toHaveProperty("excerpt")
      expect(post).toHaveProperty("date")
      expect(post).toHaveProperty("readTime")
      expect(post).toHaveProperty("tags")
      expect(typeof post.slug).toBe("string")
      expect(typeof post.title).toBe("string")
      expect(Array.isArray(post.tags)).toBe(true)
    })
  })

  it("getBlogPostMeta returns correct post for valid slug", () => {
    const firstPost = allBlogPosts[0]
    const meta = getBlogPostMeta(firstPost.slug)
    expect(meta).toBeDefined()
    expect(meta?.title).toBe(firstPost.title)
  })

  it("getBlogPostMeta returns undefined for invalid slug", () => {
    const meta = getBlogPostMeta("non-existent-slug")
    expect(meta).toBeUndefined()
  })

  it("getBlogPostContent returns content for valid slug", () => {
    const firstPost = allBlogPosts[0]
    const content = getBlogPostContent(firstPost.slug)
    expect(content).toBeDefined()
  })

  it("getBlogPostContent returns null for invalid slug", () => {
    const content = getBlogPostContent("non-existent-slug")
    expect(content).toBeNull()
  })
})
