import { submitContactForm } from "@/lib/api"

// Mock global fetch
global.fetch = jest.fn()

describe("submitContactForm", () => {
  const mockFormData = {
    name: "John Doe",
    email: "john@example.com",
    subject: "Test",
    message: "Hello",
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("sends a POST request with form data", async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: "Success" }),
    })

    await submitContactForm(mockFormData)

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(mockFormData),
      })
    )
  })

  it("returns response data on success", async () => {
    const mockResponse = { message: "Success", messageId: "123" }
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    })

    const result = await submitContactForm(mockFormData)
    expect(result).toEqual(mockResponse)
  })

  it("throws an error on failed response", async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: "Bad Request" }),
    })

    await expect(submitContactForm(mockFormData)).rejects.toThrow()
  })

  it("throws an error on network failure", async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network error"))

    await expect(submitContactForm(mockFormData)).rejects.toThrow("Network error")
  })
})
