import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Recipe Book App (Angular 16)",
      description:
        "A modern recipe management application built with Angular 16. Features include user authentication, recipe creation and editing, ingredient management, image uploads, and real-time search. Designed with a responsive UI for seamless use on any device, making it easy to organize, share, and discover new recipes.",
      image: "/angular16-project-thumbnail.png",
      tags: ["Angular 16", "TypeScript", "Firebase", "Responsive UI"],
      github: "https://github.com/rougeTitan/RecipesShoppingApp-Angular.git",
      demo: "https://recipe-book-project-78350.web.app/",
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
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">Projects</h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
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
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
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
                <div className="space-y-3 p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>
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
