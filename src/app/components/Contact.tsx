import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="border-b border-gray-200 pb-12 mb-12">
        <h2 className="text-4xl mb-4">Contact</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Reach out for freelance projects, design collaborations, e-commerce operations support,
          or any marketing and visual production inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-3">EMAIL</h3>
            <p className="text-lg text-gray-800">raymartentino92999@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-3">PHONE</h3>
            <p className="text-lg text-gray-800">0993 338 8976</p>
          </div>
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-3">LOCATION</h3>
            <p className="text-lg text-gray-800">Babatngon, Leyte, Philippines</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-3">SOCIAL</h3>
            <div className="space-y-2 text-lg text-gray-800">
              <p>
                <a href="https://www.facebook.com/raymartentino/" target="_blank" rel="noreferrer" className="underline hover:text-black">
                  Facebook
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/raymart-entino-436545249" target="_blank" rel="noreferrer" className="underline hover:text-black">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xs tracking-widest text-gray-500 mb-3">NOTE</h3>
            <p className="text-gray-700 leading-relaxed">
              Available for design, e-commerce operations, and social media projects. Send a message with your project details and timeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
