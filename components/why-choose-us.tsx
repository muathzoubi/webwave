import { CheckCircle } from 'lucide-react'

export function WhyChooseUs() {
  const reasons = [
    "Expert team of designers and developers",
    "Customized solutions tailored to your needs",
    "Responsive and mobile-friendly designs",
    "SEO-optimized websites for better visibility",
    "Ongoing support and maintenance",
    "Competitive pricing and flexible packages",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose DesignWave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {reasons.slice(0, 3).map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFD700] mr-2 flex-shrink-0" />
                <p>{reason}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {reasons.slice(3).map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#FFD700] mr-2 flex-shrink-0" />
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

