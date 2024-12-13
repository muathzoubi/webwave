"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation'

export function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, handleSubmit] = useForm("xnnqyryg");
  const router = useRouter()

  const handleSubmitform = (e: any) => {
    e.preventDefault()
    handleSubmit(e).then(()=>{
       router.push('/thankyou')
    })
    // Here you would typically send the form data to a server
  }

  return (
    <section className=" py-20" id="contact-me">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <form onSubmit={handleSubmitform}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input
                 id="email"
                 type="email" 
                 name="email"
                  value={email}
                  onChange={(e:any) => setEmail(e.target.value)}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <Textarea
                   id="message"
                   name="message"
                  value={message}
                  onChange={(e:any) => setMessage(e.target.value)}
                  required
                  className="w-full"
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#FFD700] to-blue-300 " disabled={state.submitting}>
                <Mail className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

