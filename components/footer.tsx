"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
  { name: "Email", href: "mailto:your.email@example.com", icon: Mail },
]

export function Footer() {
  const [year, setYear] = useState(2025)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {year} Software Engineer Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
