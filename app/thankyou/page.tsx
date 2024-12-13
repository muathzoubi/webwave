import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYou(){
    return(
        <div className="flex flex-col justify-center items-center h-screen text-center p-5">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-blue-300 bg-clip-text text-transparent mb-4">Thank You!</h1>
        <p className="text-md text-gray-300 mb-6">We appreciate you reaching out. We'll get back to you as soon as possible.</p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-[#FFD700] to-blue-400  hover:text-white">Return to Home</Button>
        </Link>
      </div>
    )
}