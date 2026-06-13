import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { works } from "../data/works";

export function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(works.map((work) => work.category)))];
  
  const filteredWorks = filter === "All" 
    ? works 
    : works.filter((work) => work.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Gallery header */}
      <div className="border-b border-gray-200 pb-12 mb-16">
        <h2 className="text-4xl mb-4">Exhibition Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          A comprehensive collection of graphic design and layout work spanning various 
          disciplines and methodologies.
        </p>
      </div>

      {/* Filter */}
      <div className="mb-16">
        <p className="text-xs tracking-widest text-gray-500 mb-4">FILTER BY CATEGORY</p>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 text-sm tracking-wide border transition-colors ${
                filter === category
                  ? "border-black bg-black text-white"
                  : "border-gray-300 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredWorks.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            layout
          >
            <Link to={`/work/${work.id}`} className="group block">
              {/* Artwork frame */}
              <div className="bg-white p-8 border border-gray-200">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <ImageWithFallback
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Artwork label */}
              <div className="mt-6 space-y-1">
                <h3 className="text-lg group-hover:text-gray-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-600">{work.year}</p>
                <p className="text-xs tracking-wide text-gray-500">{work.category}</p>
                <p className="text-xs text-gray-500">{work.medium}</p>
                  {work.tools && work.tools.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {work.tools.map((t) => (
                        <span
                          key={t}
                          className="inline-block bg-gray-100 text-xs text-gray-800 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* No results */}
      {filteredWorks.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-500">No works found in this category.</p>
        </div>
      )}
    </div>
  );
}
