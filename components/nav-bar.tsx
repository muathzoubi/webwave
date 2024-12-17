"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Rss, Sun, Palette } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-app.png" alt='logo' width={100} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
        <Link href="#ourProducts" >    <Button variant="ghost">Products</Button></Link>
        <Link href="#services" >   <Button variant="ghost">Services</Button></Link>
        <Link href="#about-me" >     <Button variant="ghost">About</Button></Link>
        <Link href="#contact-me" >      <Button variant="ghost">Contact</Button></Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex">Get a Quote</Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
             <Link href="#ourProducts"> <Button variant="ghost">Products</Button></Link>
             <Link href="#services">    <Button variant="ghost">Services</Button></Link>
             <Link href="#about-me">     <Button variant="ghost">About</Button></Link>
             <Link href="#contact-me">      <Button variant="ghost">Contact</Button></Link>
             <Link href="#contact-me">     <Button>Get a Quote</Button></Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

