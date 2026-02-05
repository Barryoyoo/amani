import React from 'react'
import { Helmet } from 'react-helmet-async'


export default function Gallery() {
  const images = [
    'https://ik.imagekit.io/ljvm7j1lq/WhatsApp%20Image%202026-01-29%20at%2022.13.14%20(1).jpeg',
    'https://ik.imagekit.io/ljvm7j1lq/WhatsApp%20Image%202026-01-29%20at%2022.13.11.jpeg',
    'https://ik.imagekit.io/ljvm7j1lq/WhatsApp%20Image%202026-01-29%20at%2022.13.12.jpeg',
    'https://ik.imagekit.io/ljvm7j1lq/WhatsApp%20Image%202026-01-29%20at%2022.13.12%20(1).jpeg',
    'https://ik.imagekit.io/ljvm7j1lq/WhatsApp%20Image%202026-01-29%20at%2022.13.13.jpeg',
    'https://ik.imagekit.io/ljvm7j1lq/WhatsApp%20Image%202026-01-29%20at%2022.13.13%20(1).jpeg',
  
  ]

  return (
    <>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="View our luxury spa facilities and ambiance." />
      </Helmet>

      {/* Hero */}
      <section className="bg-dark-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-300">Explore the luxurious ambiance of Armani Luxe Spa</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <div 
                key={idx}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer h-64"
                data-aos="fade-up"
              >
                <img src={img} alt={`Spa ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}