"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from 'lucide-react'

export function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className=" py-20" id="contact-me">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e:any) => setMessage(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#FFD700] to-blue-300 bg-clip-text text-transparent">
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

