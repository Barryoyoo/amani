import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaCalendar, FaUser } from 'react-icons/fa'

export default function Blog() {
  const posts = [
    {
      title: 'The Benefits of Regular Spa Treatments',
      author: 'Dr. Wellness',
      date: 'Jan 15, 2025',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1576881345-433ad19a4f91?w=500&h=300&fit=crop',
      excerpt: 'Discover how regular spa visits can improve your physical and mental health.'
    },
    {
      title: 'Deep Tissue Massage: What You Need to Know',
      author: 'Lisa Chen',
      date: 'Jan 10, 2025',
      category: 'Massage',
      image: 'https://images.unsplash.com/photo-1544161515-81205f8abecc?w=500&h=300&fit=crop',
      excerpt: 'Learn about the benefits and techniques of deep tissue massage therapy.'
    },
    {
      title: 'Winter Skincare: Preparing Your Skin for Cold Weather',
      author: 'Grace Mwangi',
      date: 'Jan 5, 2025',
      category: 'Skincare',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=300&fit=crop',
      excerpt: 'Essential tips for maintaining healthy, glowing skin during the winter months.'
    },
    {
      title: 'Aromatherapy: Healing Powers of Essential Oils',
      author: 'Maria Santos',
      date: 'Dec 28, 2024',
      category: 'Aromatherapy',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=300&fit=crop',
      excerpt: 'Explore the therapeutic benefits and uses of essential oils in spa treatments.'
    },
    {
      title: 'Stress Relief: The Spa Connection',
      author: 'Dr. Wellness',
      date: 'Dec 20, 2024',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=300&fit=crop',
      excerpt: 'How spa treatments help reduce stress and promote relaxation.'
    },
    {
      title: 'Self-Care Rituals: Creating Your Personal Spa Experience',
      author: 'Amara Johnson',
      date: 'Dec 15, 2024',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=300&fit=crop',
      excerpt: 'Simple daily rituals you can incorporate for ongoing wellness and relaxation.'
    },
  ]

  return (
    <>
      <Helmet>
        <title>Blog | Amani Temptress Spa</title>
        <meta name="description" content="Read wellness tips, spa advice, and lifestyle articles from Amani Temptress Spa." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl text-white md:text-6xl font-serif font-bold mb-6">Wellness Blog</h1>
          <p className="text-xl text-gray-100 max-w-2xl">Tips, advice, and stories for your wellness journey</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <article 
                key={idx}
                className="bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:shadow-lg cursor-pointer"
                data-aos="fade-up"
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300">
                    <span className="bg-gold-100 dark:bg-gold-900 text-gold-700 dark:text-gold-300 px-3 py-1 rounded-full transition-colors duration-300">{post.category}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-dark-900 dark:text-white mb-2 hover:text-gold-700 dark:hover:text-gold-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">{post.excerpt}</p>
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <span className="flex items-center gap-1"><FaUser size={14} /> {post.author}</span>
                    <span className="flex items-center gap-1"><FaCalendar size={14} /> {post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}