import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ContactPage from "@/app/contact/page"

// Mock the API module
jest.mock("@/lib/api", () => ({
  submitContactForm: jest.fn(),
}))

import { submitContactForm } from "@/lib/api"

const mockSubmitContactForm = submitContactForm as jest.MockedFunction<typeof submitContactForm>

describe("ContactPage", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders the Get In Touch heading", () => {
    render(<ContactPage />)
    expect(screen.getByRole("heading", { level: 1, name: /get in touch/i })).toBeInTheDocument()
  })

  it("renders the page description", () => {
    render(<ContactPage />)
    expect(screen.getByText(/have a project in mind or want to discuss opportunities/i)).toBeInTheDocument()
  })

  it("renders the contact form with all fields", () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it("renders the submit button", () => {
    render(<ContactPage />)
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument()
  })

  it("renders Connect With Me section", () => {
    render(<ContactPage />)
    expect(screen.getByRole("heading", { name: /connect with me/i })).toBeInTheDocument()
  })

  it("renders social links", () => {
    render(<ContactPage />)
    // "Email" appears as both form label and social link
    const emailElements = screen.getAllByText("Email")
    expect(emailElements.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText("GitHub")).toBeInTheDocument()
    expect(screen.getByText("LinkedIn")).toBeInTheDocument()
  })

  it("renders Response Time card", () => {
    render(<ContactPage />)
    expect(screen.getByRole("heading", { name: /response time/i })).toBeInTheDocument()
    expect(screen.getByText(/24-48 hours/i)).toBeInTheDocument()
  })

  it("allows user to type in form fields", async () => {
    const user = userEvent.setup()
    render(<ContactPage />)

    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const subjectInput = screen.getByLabelText(/subject/i)
    const messageInput = screen.getByLabelText(/message/i)

    await user.type(nameInput, "John Doe")
    await user.type(emailInput, "john@example.com")
    await user.type(subjectInput, "Test Subject")
    await user.type(messageInput, "Hello there")

    expect(nameInput).toHaveValue("John Doe")
    expect(emailInput).toHaveValue("john@example.com")
    expect(subjectInput).toHaveValue("Test Subject")
    expect(messageInput).toHaveValue("Hello there")
  })

  it("shows success message on successful submission", async () => {
    mockSubmitContactForm.mockResolvedValueOnce({ message: "Success" })
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/subject/i), "Test")
    await user.type(screen.getByLabelText(/message/i), "Hello")

    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument()
    })
  })

  it("shows error message on failed submission", async () => {
    mockSubmitContactForm.mockRejectedValueOnce(new Error("Network error"))
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/subject/i), "Test")
    await user.type(screen.getByLabelText(/message/i), "Hello")

    await user.click(screen.getByRole("button", { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it("disables submit button while submitting", async () => {
    mockSubmitContactForm.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ message: "ok" }), 1000))
    )
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByLabelText(/name/i), "John Doe")
    await user.type(screen.getByLabelText(/email/i), "john@example.com")
    await user.type(screen.getByLabelText(/subject/i), "Test")
    await user.type(screen.getByLabelText(/message/i), "Hello")

    await user.click(screen.getByRole("button", { name: /send message/i }))

    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled()
  })
})
