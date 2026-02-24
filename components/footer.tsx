import { Github, Linkedin, X, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rougeTitan", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/siddeshdp/", icon: Linkedin },
  { name: "Email", href: "mailto:siddheshdilipkumar@gmail.com", icon: Mail },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {year} Siddhesh's Portfolio. Built with Next.js & TypeScript.
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
