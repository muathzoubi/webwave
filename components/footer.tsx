import Link from "next/link"
import { Palette } from 'lucide-react'

export function Footer() {
  return (
    <footer className=" border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
            <img src="/logo-app.png" alt='logo' width={100} />
            </Link>
            <p className="text-sm text-gray-500">
              Crafting stunning digital experiences that captivate and convert.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#contact-me" className="text-sm text-gray-500 hover:text-[#FFD700]">Web Design</Link></li>
              <li><Link href="#contact-me" className="text-sm text-gray-500 hover:text-[#FFD700]">Web Development</Link></li>
              <li><Link href="#contact-me" className="text-sm text-gray-500 hover:text-[#FFD700]">E-commerce Solutions</Link></li>
              <li><Link href="#contact-me" className="text-sm text-gray-500 hover:text-[#FFD700]">Digital Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about-me" className="text-sm text-gray-500 hover:text-[#FFD700]">About Us</Link></li>
              <li><Link href="#about-me" className="text-sm text-gray-500 hover:text-[#FFD700]">Our Team</Link></li>
              <li><Link href="#contact-me" className="text-sm text-gray-500 hover:text-[#FFD700]">Careers</Link></li>
              <li><Link href="#contact-me" className="text-sm text-gray-500 hover:text-[#FFD700]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#FFD700]">Facebook</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#FFD700]">Twitter</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#FFD700]">LinkedIn</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-[#FFD700]">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DesignWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

