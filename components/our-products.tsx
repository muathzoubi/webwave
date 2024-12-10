import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layout, ShoppingCart, Globe } from 'lucide-react'

export function OurProducts() {
  const products = [
    {
      title: "Custom Website Design",
      description: "Tailored websites that perfectly represent your brand and meet your specific needs.",
      icon: <Layout className="h-8 w-8 text-[#FFD700]" />,
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with secure payment gateways and inventory management.",
      icon: <ShoppingCart className="h-8 w-8 text-[#FFD700]" />,
    },
    {
      title: "Content Management Systems",
      description: "User-friendly CMS solutions that make updating your website a breeze.",
      icon: <Globe className="h-8 w-8 text-[#FFD700]" />,
    },
  ]

  return (
    <section className=" py-20" id="ourProducts"  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  {product.icon}
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{product.description}</CardDescription>
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

