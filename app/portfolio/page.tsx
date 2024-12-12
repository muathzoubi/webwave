import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio(){
    return(
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-12">Portfolio </h2>
        <p>
            
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <Card  className="flex justify-center">
                <CardHeader>
                    <CardTitle>MZ.js</CardTitle>
                </CardHeader>
                <CardContent>
              <Image
                src={''}
                alt="logo"
                width={50}
                height={50}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
        </div>
      </div>
    )
}