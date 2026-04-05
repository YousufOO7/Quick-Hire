"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2533] text-gray-300 pt-14 pb-6 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">Q</span>
            </div>
            <h2 className="text-white text-lg font-semibold">QuickHire</h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Companies</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Advice</li>
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Docs</li>
            <li className="hover:text-white cursor-pointer">Guide</li>
            <li className="hover:text-white cursor-pointer">Updates</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Get job notifications
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            The latest job news, articles, sent to your inbox weekly.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 text-sm bg-gray-200 text-black rounded-l-md outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 text-sm text-white rounded-r-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-xs text-gray-400 mb-4 md:mb-0">
          2021 © QuickHire. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3">
          {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
            (Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2A3245] hover:bg-blue-600 transition cursor-pointer"
              >
                <Icon className="text-sm text-gray-300" />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;