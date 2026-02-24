import { render, screen } from "@testing-library/react"
import HomePage from "@/app/page"

describe("HomePage", () => {
  it("renders the hero heading", () => {
    render(<HomePage />)
    expect(screen.getByRole("heading", { level: 1, name: /software engineer & problem solver/i })).toBeInTheDocument()
  })

  it("renders the hero description", () => {
    render(<HomePage />)
    expect(screen.getByText(/building elegant solutions to complex problems/i)).toBeInTheDocument()
  })

  it("renders View My Work CTA button", () => {
    render(<HomePage />)
    expect(screen.getByRole("link", { name: /view my work/i })).toHaveAttribute("href", "/projects")
  })

  it("renders Get In Touch CTA button", () => {
    render(<HomePage />)
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "/contact")
  })

  it("renders the profile image", () => {
    render(<HomePage />)
    const img = screen.getByAltText("Siddhesh Dilipkumar Pawar")
    expect(img).toBeInTheDocument()
  })

  it("renders quick links section with About, Projects, Blog", () => {
    render(<HomePage />)
    expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /blog/i })).toBeInTheDocument()
  })

  it("links quick links to correct routes", () => {
    render(<HomePage />)
    const links = screen.getAllByRole("link")
    const aboutLink = links.find((l) => l.getAttribute("href") === "/about")
    const projectsLink = links.find((l) => l.getAttribute("href") === "/projects")
    const blogLink = links.find((l) => l.getAttribute("href") === "/blog")

    expect(aboutLink).toBeDefined()
    expect(projectsLink).toBeDefined()
    expect(blogLink).toBeDefined()
  })
})
