import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

// Sample blog posts data
const posts = {
  "building-scalable-nextjs-apps": {
    title: "Building Scalable Next.js Applications",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Next.js", "Performance", "Architecture"],
    content: `
# Building Scalable Next.js Applications

When building applications with Next.js, scalability should be a primary concern from day one. In this post, I'll share the patterns and practices I've learned from building applications that serve millions of users.

## Understanding Next.js Rendering Strategies

Next.js offers multiple rendering strategies, and choosing the right one is crucial for scalability:

- **Static Site Generation (SSG)**: Perfect for content that doesn't change frequently
- **Server-Side Rendering (SSR)**: Great for dynamic, personalized content
- **Incremental Static Regeneration (ISR)**: The best of both worlds for many use cases

## Caching Strategies

Effective caching is essential for scalability. Here are the key areas to focus on:

### 1. API Route Caching

Implement proper cache headers in your API routes to reduce server load:

\`\`\`typescript
export async function GET() {
  const data = await fetchData()
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
    }
  })
}
\`\`\`

### 2. Database Query Optimization

Use connection pooling and query optimization to handle high traffic:

- Implement proper indexing
- Use read replicas for read-heavy operations
- Cache frequently accessed data in Redis

## Performance Optimization

Performance and scalability go hand in hand. Key optimizations include:

- **Code Splitting**: Lazy load components and routes
- **Image Optimization**: Use Next.js Image component
- **Bundle Analysis**: Regularly analyze and optimize your bundle size

## Monitoring and Observability

You can't scale what you can't measure. Implement:

- Performance monitoring (Core Web Vitals)
- Error tracking
- Database query monitoring
- API response time tracking

## Conclusion

Building scalable Next.js applications requires careful planning and implementation of best practices. Focus on caching, optimization, and monitoring to ensure your application can grow with your user base.
    `,
  },
  "typescript-advanced-patterns": {
    title: "Advanced TypeScript Patterns for React",
    date: "2024-03-08",
    readTime: "10 min read",
    tags: ["TypeScript", "React", "Best Practices"],
    content: `
# Advanced TypeScript Patterns for React

TypeScript has become the standard for building robust React applications. In this post, we'll explore advanced patterns that will take your TypeScript skills to the next level.

## Generic Components

Generic components allow you to create reusable, type-safe components:

\`\`\`typescript
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <div>{items.map(renderItem)}</div>
}
\`\`\`

## Discriminated Unions

Use discriminated unions for type-safe state management:

\`\`\`typescript
type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Data }
  | { status: 'error'; error: Error }
\`\`\`

## Utility Types

Master TypeScript's built-in utility types:

- \`Partial<T>\`: Make all properties optional
- \`Required<T>\`: Make all properties required
- \`Pick<T, K>\`: Select specific properties
- \`Omit<T, K>\`: Exclude specific properties

## Conclusion

These advanced patterns will help you write more maintainable and type-safe React applications.
    `,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article className="space-y-8">
          {/* Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
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
          </header>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div
              className="space-y-6 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n\n")
                  .map((paragraph) => {
                    if (paragraph.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${paragraph.slice(2)}</h1>`
                    }
                    if (paragraph.startsWith("## ")) {
                      return `<h2 class="text-2xl font-semibold mt-6 mb-3">${paragraph.slice(3)}</h2>`
                    }
                    if (paragraph.startsWith("### ")) {
                      return `<h3 class="text-xl font-semibold mt-4 mb-2">${paragraph.slice(4)}</h3>`
                    }
                    if (paragraph.startsWith("```")) {
                      return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>${paragraph.replace(/```\w*\n?/g, "")}</code></pre>`
                    }
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph
                        .split("\n")
                        .map((item) => `<li class="ml-4">${item.slice(2)}</li>`)
                        .join("")
                      return `<ul class="list-disc space-y-2 my-4">${items}</ul>`
                    }
                    return `<p class="text-muted-foreground">${paragraph}</p>`
                  })
                  .join(""),
              }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}
