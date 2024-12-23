'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const initialMessages = [
  "Welcome to our chat!",
  "How can we help you today?",
  "Feel free to ask any questions!"
]

interface Message {
  text: string;
  sender: 'bot' | 'user';
}

export default function AnimatedChatBanner() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [inputMessage, setInputMessage] = useState('')

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isOpen && messages.length < initialMessages.length) {
setIsOpen(true)
      interval = setInterval(() => {
        setMessages(prev => {
          if (prev.length < initialMessages.length) {
            return [...prev, { text: initialMessages[prev.length], sender: 'bot' }]
          }
          return prev
        })
      }, 2000) // Add a new message every 2 seconds
    }

    return () => clearInterval(interval)
  }, [isOpen, messages.length])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setMessages([])
    }
  }

  const handleSendMessage = (e?: React.FormEvent,message?:string) => {
    e!.preventDefault()
    if (inputMessage.trim()) {
      setMessages(prev => [...prev, { text: inputMessage, sender: 'user' }])
      setInputMessage('')
      // Here you would typically send the message to your backend
      // and then add the response to the messages
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message!", sender: 'bot' }])
      }, 1000)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        variants={{
          open: { width: "300px", height: "400px", borderRadius: "1rem" },
          closed: { width: "60px", height: "60px", borderRadius: "50%" }
        }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-[#FFD700] to-blue-400 shadow-lg overflow-hidden flex flex-col"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full"
        >
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <h2 className="text-xl font-bold">{isOpen?"Chat with Us":""}</h2>
            <button aria-label="Close chat">
            {isOpen? <X onClick={toggleOpen} size={24} />:null} 
            </button>
          </div>
          <div className="flex-grow overflow-auto p-4 space-y-2">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2 rounded-lg shadow ${
                    message.sender === 'bot' ? 'bg-white text-gray-800' : 'bg-blue-500 text-black ml-auto'
                  }`}
                >
                  <p>{message.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-white/20">
            <div className="flex space-x-2 z-10">
              <Input
                type="text"
                placeholder="Type a message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="icon" onClick={handleSendMessage} aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </motion.div>
        <motion.button
          className="absolute flex p-3"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          aria-label="Open chat"
        >
          <MessageCircle 
          onClick={toggleOpen}
          className="text-white" size={35} />
        </motion.button>
      </motion.div>
    </div>
  )
}

