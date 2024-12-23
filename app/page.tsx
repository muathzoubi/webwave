"use client"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { OurProducts } from "@/components/our-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AboutMe } from "@/components/about"
import { Partners } from "@/components/partners"
import { useEffect } from "react"
import AOS from 'aos'
import { ContactMe } from "@/components/contact-me"
import AnimatedChatBanner from "@/components/chat-banner"
export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedChatBanner/>
      <main className="flex-1 ">
        <Hero />
        <OurProducts />
        <Services />
        <AboutMe/>
        <WhyChooseUs />
        <Partners/>
        <ContactMe/>
      </main>

    </div>
  )
}

