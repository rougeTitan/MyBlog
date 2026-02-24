import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center gap-12 md:flex-row md:gap-16">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Software Engineer & Problem Solver
          </h1>
          <p className="text-muted-foreground text-lg text-pretty md:text-xl">
            Building elegant solutions to complex problems. Passionate about clean code, scalable architecture, and
            sharing knowledge with the developer community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="border-border relative h-64 w-64 overflow-hidden rounded-lg border-2 md:h-80 md:w-80">
            <Image src="/profilePic.jpg" alt="Siddhesh Dilipkumar Pawar" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="mt-24 grid gap-6 md:grid-cols-3">
        <Link
          href="/about"
          className="group border-border bg-card hover:border-foreground rounded-lg border p-6 transition-colors"
        >
          <h3 className="mb-2 text-xl font-semibold">About Me</h3>
          <p className="text-muted-foreground text-sm">
            Learn about my background, skills, and what drives me as a developer.
          </p>
        </Link>

        <Link
          href="/projects"
          className="group border-border bg-card hover:border-foreground rounded-lg border p-6 transition-colors"
        >
          <h3 className="mb-2 text-xl font-semibold">Projects</h3>
          <p className="text-muted-foreground text-sm">
            Explore my portfolio of software projects and technical achievements.
          </p>
        </Link>

        <Link
          href="/blog"
          className="group border-border bg-card hover:border-foreground rounded-lg border p-6 transition-colors"
        >
          <h3 className="mb-2 text-xl font-semibold">Blog</h3>
          <p className="text-muted-foreground text-sm">
            Read my thoughts on software development, industry trends, and more.
          </p>
        </Link>
      </section>
    </div>
  )
}
