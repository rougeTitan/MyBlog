import { render, screen } from "@testing-library/react"
import ProjectsPage from "@/app/projects/page"

describe("ProjectsPage", () => {
  it("renders the Projects heading", () => {
    render(<ProjectsPage />)
    expect(screen.getByRole("heading", { level: 1, name: /projects/i })).toBeInTheDocument()
  })

  it("renders the page description", () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/a collection of my recent work and side projects/i)).toBeInTheDocument()
  })

  it("renders Featured Projects section", () => {
    render(<ProjectsPage />)
    expect(screen.getByRole("heading", { name: /featured projects/i })).toBeInTheDocument()
  })

  it("renders More Projects section", () => {
    render(<ProjectsPage />)
    expect(screen.getByRole("heading", { name: /more projects/i })).toBeInTheDocument()
  })

  it("renders project titles", () => {
    render(<ProjectsPage />)
    expect(screen.getByText("Recipe Book App (Angular 16)")).toBeInTheDocument()
    expect(screen.getByText("Weather Dashboard")).toBeInTheDocument()
  })

  it("renders project tags as badges", () => {
    render(<ProjectsPage />)
    expect(screen.getByText("Angular 16")).toBeInTheDocument()
    expect(screen.getByText("Firebase")).toBeInTheDocument()
  })

  it("renders Live Demo and Code buttons for featured projects", () => {
    render(<ProjectsPage />)
    const demoLinks = screen.getAllByText(/live demo|demo/i)
    const codeLinks = screen.getAllByText(/code/i)
    expect(demoLinks.length).toBeGreaterThan(0)
    expect(codeLinks.length).toBeGreaterThan(0)
  })

  it("renders project images", () => {
    render(<ProjectsPage />)
    const images = screen.getAllByRole("img")
    expect(images.length).toBeGreaterThan(0)
  })
})
