"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import { submitContactForm } from "@/lib/api"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await submitContactForm(formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Failed to submit form:", error)
      setSubmitStatus("error")

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:siddheshdilipkumar@gmail.com",
      label: "siddheshdilipkumar@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rougeTitan",
      label: "github.com/rougeTitan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/siddeshdp",
      label: "linkedin.com/in/siddeshdp",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">Get In Touch</h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            Have a project in mind or want to discuss opportunities? Feel free to reach out through the form below or
            connect with me on social media.
          </p>
        </section>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <section>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-950 dark:text-green-200">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-red-950 dark:text-red-200">
                    Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Connect With Me</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border bg-card hover:border-foreground flex items-center gap-3 rounded-lg border p-4 transition-colors"
                  >
                    <Icon className="text-muted-foreground h-5 w-5" />
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-muted-foreground text-sm">{link.label}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            <Card className="p-6">
              <h3 className="mb-3 text-lg font-semibold">Response Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                I typically respond to messages within 24-48 hours during weekdays. For urgent matters, please reach out
                via email directly.
              </p>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
