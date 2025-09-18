import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
