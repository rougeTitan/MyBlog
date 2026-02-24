export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  message: string
  messageId?: string
  error?: string
  details?: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  // Replace this URL with your actual API Gateway endpoint after deployment
  const apiEndpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL || "/api/contact"

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || "Failed to send message")
  }

  return response.json()
}
