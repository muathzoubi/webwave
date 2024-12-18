import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {

    interface Project {
        id: number
        title: string
        image: string
        liveUrl: string
    }

    const projects: Project[] = [
        {
            id: 1,
            title: "Design wave page ",
            image: "/wave.avif",
            liveUrl: "https://designwaveapp.netlify.app/"
        },
        {
            id: 2,
            title: "Point of Sales app",
            image: "/pos.png",
            liveUrl: "https://possys-app.netlify.app/"
        },
        {
            id: 3,
            title: "Web desgin app",
            image: "/web.png",
            liveUrl: "https://web-desgin-app.netlify.app/"
        },
        {
            id: 4,
            title: "Invest Plus App    ",
            image: "/inv.avif",
            liveUrl: "https://app-investment.netlify.app/"
        },
        {
            id: 5,
            title: "Merva AI",
            image: "/ai.png",
            liveUrl: "https://merva-ai.netlify.app/"
        },
        {
            id: 7,
            title: "e-commerce App",
            image: "/menu.png",
            liveUrl: "https://menu-me-theta.vercel.app/"
        },
        {
            id: 8,
            title: "Short Link App",
            image: "/short.png",
            liveUrl: "https://shortlinks-app.netlify.app/"
        },
        {
            id: 9,
            title: "Portfolio  App",
            image: "/me.avif",
            liveUrl: "https://muathalzoubi.netlify.app"
        }, {
            id: 10,
            title: "Normar Dental Lab",
            image: "/normar.avif",
            liveUrl: "https://normar.netlify.app/"
        }, {
            id: 11,
            title: "BAbalous Site",
            image: "/bab.avif",
            liveUrl: "https://babalous.netlify.app/"
        }
    ]

    return (
        <section className=" py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-300 text-center mb-12">Portfolio </h2>
                <div className=" text-center py-4">
                    <p className="mx-4">
                        Here you will find a collection of our projects that reflect our passion and expertise in web development. Each project tells a story,
                        whether it is solving a complex problem, </p>
                    <p className="mx-4">
                        improving the user experience, or providing innovative solutions using the latest technologies. Our team always strives to deliver projects that reflect quality, creativity, and leave a positive impact. Enjoy exploring the projects, and do not hesitate to contact us for more details!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mt-4">
                    {projects.map((project) =>
                        <Card className="flex flex-col items-center text-center" key={project.id}>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <img
                                    src={project.image}
                                    alt={`logo${project.id}`}
                                    className="w-full h-64 object-cover rounded-t-lg  hover:grayscale transition-all duration-300"
                                />
                            </CardContent>
                            <CardFooter>
                                <Link href={project.liveUrl}>
                                    <Button className="bg-gradient-to-r from-[#FFD700] to-blue-400 w-full px-6 hover:text-white">
                                        Vist
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>)}
                </div>
            </div>
        </section>
    )
}