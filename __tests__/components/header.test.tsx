import { render, screen } from "@testing-library/react"
import { Header } from "@/components/header"

describe("Header", () => {
  it("renders the Portfolio brand link", () => {
    render(<Header />)
    expect(screen.getByText("Portfolio")).toBeInTheDocument()
    expect(screen.getByText("Portfolio").closest("a")).toHaveAttribute("href", "/")
  })

  it("renders all navigation links", () => {
    render(<Header />)
    const navItems = ["Home", "About", "Projects", "Blog", "Contact"]
    navItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it("links navigation items to correct routes", () => {
    render(<Header />)
    const expectedRoutes: Record<string, string> = {
      Home: "/",
      About: "/about",
      Projects: "/projects",
      Blog: "/blog",
      Contact: "/contact",
    }

    Object.entries(expectedRoutes).forEach(([name, href]) => {
      const link = screen.getByText(name).closest("a")
      expect(link).toHaveAttribute("href", href)
    })
  })

  it("renders as a sticky header with navigation", () => {
    render(<Header />)
    const header = screen.getByRole("banner")
    expect(header).toBeInTheDocument()
  })

  it("renders navigation as a list", () => {
    render(<Header />)
    const listItems = screen.getAllByRole("listitem")
    expect(listItems).toHaveLength(5)
  })
})
