import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built to handle high traffic and scale efficiently.",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering. Supports drag-and-drop functionality and integrations.",
      image: "/task-management-kanban.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with detailed forecasts, interactive maps, and location-based alerts. Features responsive design and offline support.",
      image: "/preview/project4.png",
      tags: ["Vue.js", "Tailwind CSS", "API Integration"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "Blog CMS",
      description:
        "Headless CMS for managing blog content with markdown support, SEO optimization, and analytics. Includes a modern admin interface and API.",
      image: "/cms-interface.png",
      tags: ["Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot powered by AI with context awareness, multi-language support, and custom training capabilities. Integrates with various platforms.",
      image: "/ai-chatbot-interface.png",
      tags: ["Python", "FastAPI", "OpenAI", "React"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
    {
      title: "Portfolio Generator",
      description:
        "Tool for developers to quickly create and deploy professional portfolio websites. Features customizable themes and automatic deployment.",
      image: "/portfolio-builder-interface.png",
      tags: ["Next.js", "TypeScript", "Vercel"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            A collection of my recent work and side projects. Each project represents a unique challenge and learning
            opportunity.
          </p>
        </section>

        {/* Featured Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="default" size="sm">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">More Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
