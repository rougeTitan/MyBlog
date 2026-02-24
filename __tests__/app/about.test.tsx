import { render, screen } from "@testing-library/react"
import AboutPage from "@/app/about/page"

describe("AboutPage", () => {
  it("renders the About Me heading", () => {
    render(<AboutPage />)
    expect(screen.getByRole("heading", { level: 1, name: /about me/i })).toBeInTheDocument()
  })

  it("renders the introduction paragraph", () => {
    render(<AboutPage />)
    expect(screen.getByText(/full-stack software engineer with 7\+ years/i)).toBeInTheDocument()
  })

  it("renders the Background section", () => {
    render(<AboutPage />)
    expect(screen.getByRole("heading", { name: /background/i })).toBeInTheDocument()
    expect(screen.getByText(/master's degree in software engineering/i)).toBeInTheDocument()
  })

  it("renders Skills & Technologies section with all categories", () => {
    render(<AboutPage />)
    expect(screen.getByRole("heading", { name: /skills & technologies/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /^languages$/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /^frontend$/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /^backend$/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: /^databases$/i })).toBeInTheDocument()
  })

  it("renders skill badges", () => {
    render(<AboutPage />)
    expect(screen.getByText("Java")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("React.js")).toBeInTheDocument()
    expect(screen.getByText("Spring Boot")).toBeInTheDocument()
    expect(screen.getByText("Docker")).toBeInTheDocument()
  })

  it("renders the Experience section", () => {
    render(<AboutPage />)
    expect(screen.getByRole("heading", { name: /^experience$/i })).toBeInTheDocument()
  })

  it("renders all job experiences", () => {
    render(<AboutPage />)
    expect(screen.getByText("Full-Stack Developer Level III")).toBeInTheDocument()
    expect(screen.getByText("FedEx Shipment Operational Systems")).toBeInTheDocument()
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument()
    expect(screen.getByText("Fidelity Investments")).toBeInTheDocument()
    expect(screen.getByText("Software Developer Level III")).toBeInTheDocument()
    expect(screen.getByText("ThermoFisher Scientific")).toBeInTheDocument()
  })

  it("renders experience periods", () => {
    render(<AboutPage />)
    expect(screen.getByText("Jan 2025 - Present")).toBeInTheDocument()
    expect(screen.getByText("Mar 2023 - Dec 2024")).toBeInTheDocument()
  })
})
