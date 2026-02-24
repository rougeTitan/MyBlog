import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/footer"

describe("Footer", () => {
  it("renders the copyright text", () => {
    render(<Footer />)
    expect(screen.getByText(/siddhesh's portfolio/i)).toBeInTheDocument()
  })

  it("renders built with Next.js & TypeScript text", () => {
    render(<Footer />)
    expect(screen.getByText(/built with next\.js & typescript/i)).toBeInTheDocument()
  })

  it("renders GitHub social link", () => {
    render(<Footer />)
    const githubLink = screen.getByLabelText("GitHub")
    expect(githubLink).toHaveAttribute("href", "https://github.com/rougeTitan")
    expect(githubLink).toHaveAttribute("target", "_blank")
  })

  it("renders LinkedIn social link", () => {
    render(<Footer />)
    const linkedinLink = screen.getByLabelText("LinkedIn")
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/siddeshdp/")
    expect(linkedinLink).toHaveAttribute("target", "_blank")
  })

  it("renders Email social link", () => {
    render(<Footer />)
    const emailLink = screen.getByLabelText("Email")
    expect(emailLink).toHaveAttribute("href", "mailto:siddheshdilipkumar@gmail.com")
  })

  it("renders all social links with noopener noreferrer", () => {
    render(<Footer />)
    const links = screen.getAllByRole("link")
    links.forEach((link) => {
      if (link.getAttribute("target") === "_blank") {
        expect(link).toHaveAttribute("rel", "noopener noreferrer")
      }
    })
  })
})
