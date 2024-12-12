import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutMe() {
  return (
    <section className="py-20 " id="about-me"
     data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/logo-app.png"
              alt="logo"
              width={400}
              height={400}
              className="rounded-full border-4 border-[#FFD700] "
            />
          </div>
          <div className="md:w-1/2 text-gray-400">
            <h2 className=" bg-gradient-to-r from-[#FFD700] to-blue-300 bg-clip-text text-transparent text-3xl font-bold mb-6">About Me</h2>
            <p className="mb-4">
              Hello! I'm Muath A. Alzoubi, the founder and lead web designer at DesignWave. With over a decade of experience in web design and development, I've had the privilege of working with clients across various industries, helping them create stunning and effective online presences.
            </p>
            <p className="mb-4">
              My passion lies in combining aesthetics with functionality, ensuring that every website we create not only looks beautiful but also delivers results. I believe in the power of clean, intuitive design and cutting-edge technology to transform businesses in the digital world.
            </p>
            <p className="mb-6">
              When I'm not designing websites, you can find me exploring new design trends, mentoring aspiring designers, or enjoying a good cup of coffee while sketching new ideas.
            </p>
            <Button className="bg-gradient-to-r from-[#FFD700] to-blue-400  hover:bg-indigo-700 tex-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

