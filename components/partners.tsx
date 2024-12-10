import Image from 'next/image'

const partners = [
  { name: 'Firebase', logo: '/101.png' },
  { name: 'Github', logo: '/102.png' },
  { name: 'Motion Framer', logo: '/103.png' },
  { name: 'Stackblitz ', logo: '/104.png' },
  { name: 'Tailwind CSS ', logo: '/106.png' },
]

export function Partners() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-12">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={80}
                height={80}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

