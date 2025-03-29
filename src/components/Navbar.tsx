"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white text-sm flex justify-between px-6 py-2 items-center ">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">📞 +1 (888) 123-4567</span>
          <span className="hidden md:flex items-center gap-1">
            📧 support@inventorypro.com
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:flex">🌐 English ▼</span>
          <span className="flex items-center gap-2">🔗 in | f | X</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-6 lg:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-red-500 text-xl font-bold">logo</span>
          <ul className="hidden lg:flex gap-6 text-gray-700">
            {["Features", "Solutions", "Pricing", "Customers"].map(
              (item, index) => (
                <li
                  key={index}
                  className="cursor-pointer flex items-center gap-1"
                >
                  {item} <ChevronDown size={14} />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <span className="cursor-pointer text-gray-700 flex items-center gap-1">
            ❓ Need Help?
          </span>
          <button className="text-red-500">Sign In</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Start Free Trial →
          </button>
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 flex flex-col gap-2">
          {["Features", "Solutions", "Pricing", "Customers"].map(
            (item, index) => (
              <div
                key={index}
                className="py-2 border-b flex items-center gap-1"
              >
                {item} <ChevronDown size={14} />
              </div>
            )
          )}
          <div className="py-2 border-b flex items-center gap-1">
            ❓ Need Help?
          </div>
          <button className="text-red-500 py-2">Sign In</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2">
            Start Free Trial →
          </button>
        </div>
      )}
    </header>
  );
}
