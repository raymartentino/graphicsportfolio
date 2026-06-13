import { motion } from "motion/react";

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-gray-200 pb-12 mb-16">
        <h2 className="text-4xl mb-4">About Raymart</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Raymart Cherreguine Entino is a Graphic / Layout Artist and E-Commerce Creative based in Babatngon, Leyte, Philippines.
            He combines design-focused visual production with marketplace operations for TikTok Shop, Shopee, and Lazada.
          </p>

          <p className="text-gray-700 leading-relaxed">
            His work blends layout design and print production with live stream support, promotional video editing, and social media performance optimization.
            This makes him equally effective at delivering polished marketing assets and improving online storefront execution.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Raymart is recognized for creating visuals that support business growth through clear presentation, engaging content, and efficient campaign delivery.
          </p>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-6">CONTACT</h3>
            <div className="space-y-2">
              <p className="text-gray-800">Raymart Cherreguine Entino</p>
              <p className="text-sm text-gray-600">Babatngon, Leyte, Philippines</p>
              <p className="text-sm text-gray-600">raymartentino92999@gmail.com</p>
              <p className="text-sm text-gray-600">0993 338 8976</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-6">PROFESSIONAL EXPERIENCE</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-800 font-semibold">Beautiful Life Making Company</p>
                <p className="text-sm text-gray-600">E-Commerce Account Handler • Feb 2024 – Mar 2026</p>
                <p className="text-sm text-gray-500">Managed TikTok Shop, Shopee, and Lazada operations, promotional design, customer support, affiliate coordination, live stream execution, and video content production.</p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Aspac Ventures OPC</p>
                <p className="text-sm text-gray-600">Graphic / Layout Artist & Social Media Manager • Jul 2023 – Feb 2024</p>
                <p className="text-sm text-gray-500">Created marketing materials, social media visuals, and Facebook Marketplace content while managing client communication and project delivery.</p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">Printworks Graphics and Business Center</p>
                <p className="text-sm text-gray-600">Graphic / Layout Artist • May 2021 – Aug 2022</p>
                <p className="text-sm text-gray-500">Designed custom print materials, operated production equipment, and worked directly with clients on revisions and order fulfillment.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-6">KEY SKILLS</h3>
            <div className="space-y-2">
              <p className="text-gray-700">Product Listing Optimization • Campaign Management • Inventory Monitoring</p>
              <p className="text-gray-700">Customer Support • Affiliate Coordination • Live Stream Management</p>
              <p className="text-gray-700">Video Editing • Content Optimization • Canva • CapCut • Adobe Photoshop</p>
              <p className="text-gray-700">Graphic Design • Layout Design • Print Production • Facebook Page & Marketplace Management</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-6">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-800">Bachelor of Science in Information Technology</p>
                <p className="text-sm text-gray-600">Leyte Normal University</p>
                <p className="text-sm text-gray-500">Tacloban City, Leyte • Aug 2018 (3rd Year Level)</p>
              </div>
              <div>
                <p className="text-gray-800">National Certificate (NC) II — Computer Systems Servicing</p>
                <p className="text-sm text-gray-600">Emeterio-Federica Gerez National High School</p>
                <p className="text-sm text-gray-500">Babatngon, Leyte • Jun 2016 – May 2018</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 border-t border-gray-200 pt-16"
      >
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl mb-8 text-center">Professional Approach</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center italic">
            "I combine creative production with operational discipline: strong visuals, practical execution, and always a clear path to better engagement and sales."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
