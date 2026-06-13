import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Museum-style header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <h1 className="text-2xl tracking-wide">
                RAYMART ENTINO
              </h1>
              <p className="text-sm text-gray-500 tracking-widest mt-1">
                GRAPHIC & LAYOUT ARTIST
              </p>
            </Link>
            
            <nav className="flex gap-12">
              <Link
                to="/"
                className={`text-sm tracking-widest transition-colors ${
                  location.pathname === "/" ? "text-black" : "text-gray-400 hover:text-black"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/gallery"
                className={`text-sm tracking-widest transition-colors ${
                  location.pathname === "/gallery" || location.pathname.startsWith("/work/")
                    ? "text-black"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                GALLERY
              </Link>
              <Link
                to="/about"
                className={`text-sm tracking-widest transition-colors ${
                  location.pathname === "/about" ? "text-black" : "text-gray-400 hover:text-black"
                }`}
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className={`text-sm tracking-widest transition-colors ${
                  location.pathname === "/contact" ? "text-black" : "text-gray-400 hover:text-black"
                }`}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>

      {/* Museum-style footer */}
      <footer className="border-t border-gray-200 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p className="tracking-wide">© 2026 Raymart Entino. All rights reserved.</p>
            <div className="flex gap-8 tracking-wide">
              <a href="https://www.facebook.com/raymartentino/" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Facebook</a>
              <a href="https://www.linkedin.com/in/raymart-entino-436545249" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
