import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      slug: "building-scalable-nextjs-apps",
      title: "Building Scalable Next.js Applications",
      excerpt:
        "Learn the best practices and patterns for building Next.js applications that can scale to millions of users. We'll cover caching strategies, API design, and performance optimization.",
      date: "2024-03-15",
      readTime: "8 min read",
      tags: ["Next.js", "Performance", "Architecture"],
      featured: true,
    },
    {
      slug: "typescript-advanced-patterns",
      title: "Advanced TypeScript Patterns for React",
      excerpt:
        "Explore advanced TypeScript patterns that will make your React code more type-safe and maintainable. From generics to conditional types, we cover it all.",
      date: "2024-03-08",
      readTime: "10 min read",
      tags: ["TypeScript", "React", "Best Practices"],
      featured: true,
    },
    {
      slug: "database-optimization-tips",
      title: "Database Optimization Tips for Web Apps",
      excerpt:
        "Practical tips for optimizing database queries and improving application performance. Learn about indexing, query optimization, and connection pooling.",
      date: "2024-02-28",
      readTime: "6 min read",
      tags: ["Database", "Performance", "PostgreSQL"],
      featured: false,
    },
    {
      slug: "modern-css-techniques",
      title: "Modern CSS Techniques You Should Know",
      excerpt:
        "Discover modern CSS features like container queries, cascade layers, and CSS Grid that will transform how you build responsive layouts.",
      date: "2024-02-20",
      readTime: "7 min read",
      tags: ["CSS", "Frontend", "Web Design"],
      featured: false,
    },
    {
      slug: "api-design-best-practices",
      title: "RESTful API Design Best Practices",
      excerpt:
        "A comprehensive guide to designing clean, maintainable, and scalable RESTful APIs. Learn about versioning, error handling, and documentation.",
      date: "2024-02-12",
      readTime: "9 min read",
      tags: ["API", "Backend", "Architecture"],
      featured: false,
    },
    {
      slug: "testing-strategies-frontend",
      title: "Testing Strategies for Frontend Applications",
      excerpt:
        "Learn how to implement effective testing strategies for your frontend applications, from unit tests to end-to-end testing.",
      date: "2024-02-05",
      readTime: "8 min read",
      tags: ["Testing", "Frontend", "Quality"],
      featured: false,
    },
  ]

  const featuredPosts = posts.filter((p) => p.featured)
  const recentPosts = posts.filter((p) => !p.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Thoughts on software development, web technologies, and lessons learned from building products.
          </p>
        </section>

        {/* Featured Posts */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Featured Posts</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full p-6 transition-colors hover:border-foreground">
                  <article className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-balance text-xl font-semibold">{post.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="p-6 transition-colors hover:border-foreground">
                  <article className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-balance text-lg font-semibold">{post.title}</h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
