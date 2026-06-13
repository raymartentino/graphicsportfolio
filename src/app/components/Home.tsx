import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { works } from "../data/works";

export function Home() {
  const featuredWorks = works.slice(0, 3);

  return (
    <div>
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl mb-6 leading-tight">
            E-Commerce and Creative Operations for digital storefronts
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Driving TikTok Shop, Shopee, and Lazada growth through campaign execution,
            marketing content, and visual design that supports engagement and conversion.
          </p>
        </motion.div>
      </section>

      {/* Current exhibition */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="border-t border-gray-200 pt-6 mb-16">
          <p className="text-xs tracking-widest text-gray-500 mb-2">CURRENT EXHIBITION</p>
          <h3 className="text-3xl">Featured Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Link to={`/work/${work.id}`} className="group block">
                <div className="aspect-square bg-gray-100 mb-6 overflow-hidden">
                  <ImageWithFallback
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs tracking-widest text-gray-500">{work.category}</p>
                  <h4 className="text-xl group-hover:text-gray-600 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-sm text-gray-600">{work.year}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/gallery"
            className="inline-block border border-black px-12 py-4 text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            VIEW FULL GALLERY
          </Link>
        </div>
      </section>

      {/* Statement */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "Design is not just what it looks like and feels like. Design is how it works, 
            how it communicates, and how it exists in space and time."
          </p>
          <p className="mt-4 text-sm tracking-wide text-gray-500">— RAYMART ENTINO</p>
        </div>
      </section>
    </div>
  );
}
