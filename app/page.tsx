"use client"
import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { OurProducts } from "@/components/our-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { AboutMe } from "@/components/about"
import { Partners } from "@/components/partners"
import { useEffect } from "react"
import AOS from 'aos'
import { ContactMe } from "@/components/contact-me"
export default function Home() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
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

