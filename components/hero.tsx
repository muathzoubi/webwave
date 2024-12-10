"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative overflow-hidden"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:py-32 relative z-10  h-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Elevate Your Online Presence with{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-blue-300 bg-clip-text text-transparent">
              DesignWave
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            We craft stunning, responsive websites that captivate your audience and drive results. 
            From sleek corporate sites to dynamic e-commerce platforms, we bring your vision to life.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-gradient-to-r from-[#FFD700] to-blue-400  hover:bg-indigo-700">
              Get a Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: [1, 1.1, 2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <svg
              viewBox="0 0 558 558"
              width="558"
              height="558"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="splash"
                  x1="79"
                  y1="16"
                  x2="105"
                  y2="237"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFD700" />
                  <stop offset="1" stopColor="aqua" />
                </linearGradient>
              </defs>
              <path
                opacity="0.2"
                d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                stroke="url(#splash)"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <svg
              viewBox="0 0 558 558"
              width="358"
              height="358"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="279"
                cy="279"
                r="278"
                stroke="url(#splash)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10 20"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
          {[...Array(10)].map((_, i) => (
            <motion.line
              key={i}
              x1="-100%"
              y1={`${i * 10}%`}
              x2="0%"
              y2={`${(i + 1) * 10}%`}
              stroke="url(#gold-gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.5,
                transition: {
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                },
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

