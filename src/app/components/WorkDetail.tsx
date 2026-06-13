import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { works } from "../data/works";

export function WorkDetail() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = works.findIndex((work) => work.id === id);
  const work = works[currentIndex];
  const prevWork = works[currentIndex - 1];
  const nextWork = works[currentIndex + 1];

  if (!work) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl mb-4">Work not found</h2>
        <Link to="/gallery" className="text-gray-600 hover:text-black">
          Return to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 text-sm tracking-wide text-gray-600 hover:text-black transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        BACK TO GALLERY
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 border border-gray-200"
        >
          <div
            className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer"
            onClick={() => setShowOverlay(true)}
          >
            <ImageWithFallback
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          </div>

          {showOverlay && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
              onClick={() => setShowOverlay(false)}
            >
              <div
                className="relative max-w-full max-h-full"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-black shadow-lg"
                  onClick={() => setShowOverlay(false)}
                >
                  ✕
                </button>
                <img
                  src={work.imageUrl}
                  alt={`${work.title} full view`}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                />
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-xs tracking-widest text-gray-500 mb-3">{work.category}</p>
              <h1 className="text-3xl mb-2">{work.title}</h1>
              <p className="text-base text-gray-600">{work.year}</p>
            </div>

            <div>
              <p className="text-gray-700">{work.description}</p>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-1">MEDIUM</p>
                <p className="text-gray-800">{work.medium}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-1">DIMENSIONS</p>
                <p className="text-gray-800">{work.dimensions}</p>
              </div>
              {work.tools && work.tools.length > 0 && (
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-1">TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {work.tools.map((t) => (
                      <span
                        key={t}
                        className="inline-block bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-6">
            {prevWork ? (
              <button
                onClick={() => navigate(`/work/${prevWork.id}`)}
                className="flex items-center gap-2 text-sm tracking-wide hover:text-gray-600 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                PREVIOUS
              </button>
            ) : (
              <div />
            )}

            {nextWork ? (
              <button
                onClick={() => navigate(`/work/${nextWork.id}`)}
                className="flex items-center gap-2 text-sm tracking-wide hover:text-gray-600 transition-colors group"
              >
                NEXT
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
