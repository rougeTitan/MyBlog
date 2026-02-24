import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import { allBlogPosts } from "@/content/blog"

export default function BlogPage() {
  const posts = allBlogPosts

  const featuredPosts = posts.filter((p) => p.featured)
  const recentPosts = posts.filter((p) => !p.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-5xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">Blog</h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Thoughts on software development, web technologies, and lessons learned from building products.
          </p>
        </section>

        {/* Featured Posts */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Featured Posts</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:border-foreground h-full p-6 transition-colors">
                  <article className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-balance">{post.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>
                    <div className="text-muted-foreground flex items-center gap-4 text-sm">
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
                <Card className="hover:border-foreground p-6 transition-colors">
                  <article className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-balance">{post.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{post.excerpt}</p>
                    <div className="text-muted-foreground flex items-center gap-4 text-sm">
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
