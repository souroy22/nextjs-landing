"use client"; // Ensure Next.js compatibility

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section (Subscription & Logo) */}
        <div>
          <Image
            src="/coca-cola-logo.png"
            alt="Coca Cola"
            width={100}
            height={40}
            className="mb-4"
          />
          <p className="text-sm">
            <span className="font-bold">Become an Inventory Insider:</span> All
            the inventory news & insights you need, delivered straight to your
            inbox every week.
          </p>

          {/* Email Input */}
          <div className="flex items-center mt-4 bg-[#2A2A2A] p-2 rounded-lg">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-white outline-none flex-1 px-2 placeholder-gray-400"
            />
            <button className="bg-pink-500 p-3 rounded-lg hover:bg-pink-600">
              <span className="text-white text-lg">➜</span>
            </button>
          </div>
        </div>

        {/* Middle Sections (Industries & Users) */}
        <div>
          <h3 className="text-blue-300 font-semibold mb-3">Industries</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            {[
              "Construction",
              "Medical",
              "Warehouse",
              "Interior Designer & Staging",
              "Automotive",
              "Dental",
              "Events",
              "Non-Profit",
              "View All",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-blue-300 font-semibold mb-3">Users</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            {["World Bank", "ADB", "ADB", "ADB", "ADB", "ADB", "ADB"].map(
              (item, index) => (
                <li key={index} className="hover:text-white cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Section (Information & Social Icons) */}
        <div>
          <h3 className="text-blue-300 font-semibold mb-3">Information</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            {[
              "Disclaimer",
              "Accessibility Statement",
              "Terms of use",
              "Site Map",
              "Copyright Policy",
            ].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="bg-[#333] p-2.5 rounded-full hover:bg-gray-500"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="bg-[#333] p-2.5 rounded-full hover:bg-gray-500"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="bg-[#333] p-2.5 rounded-full hover:bg-gray-500"
            >
              <FaYoutube className="text-white" />
            </a>
            <a
              href="#"
              className="bg-[#333] p-2.5 rounded-full hover:bg-gray-500"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="text-center text-gray-500 text-sm mt-10">
        &copy; 2025 Sortly Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
