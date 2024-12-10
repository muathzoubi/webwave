import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code, Smartphone, Megaphone, ArrowRight } from 'lucide-react'

export function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Create stunning, user-friendly websites that leave a lasting impression.",
      icon: <Palette className="h-8 w-8 text-[#FFD700]" />,
      details: [
        "Custom UI/UX design",
        "Responsive layouts",
        "Brand integration",
        "Wireframing and prototyping",
      ],
    },
    {
      title: "Web Development",
      description: "Build robust, scalable web applications using cutting-edge technologies.",
      icon: <Code className="h-8 w-8 text-[#FFD700]" />,
      details: [
        "Front-end development",
        "Back-end development",
        "API integration",
        "Database design",
      ],
    },
    {
      title: "Responsive Design",
      description: "Ensure your website looks great on all devices, from desktops to smartphones.",
      icon: <Smartphone className="h-8 w-8 text-[#FFD700]" />,
      details: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Performance optimization",
        "Touch-friendly interfaces",
      ],
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with SEO, content marketing, and social media strategies.",
      icon: <Megaphone className="h-8 w-8 text-[#FFD700]" />,
      details: [
        "Search engine optimization (SEO)",
        "Content strategy",
        "Social media management",
        "Email marketing campaigns",
      ],
    },
  ]

  return (
    <section className="py-20" id="services"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12"> Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  {service.icon}
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <ul className="list-disc list-inside space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

