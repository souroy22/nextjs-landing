"use client"; // Ensure Next.js compatibility

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import Next.js router
import { FaChevronDown } from "react-icons/fa";

const CommonNavBar = () => {
  const router = useRouter(); // Initialize Next.js router

  const [menuItems] = useState([
    { name: "Home", link: "/" },
    { 
      name: "Features", 
      link: "#", 
      dropdown: true, 
      options: [
        { name: "Feature 1", path: "/features/feature1" },
        { name: "Feature 2", path: "/features/feature2" },
        { name: "Feature 3", path: "/features/feature3" }
      ] 
    },
    { 
      name: "Solutions", 
      link: "#", 
      dropdown: true, 
      options: [
        { name: "Solution 1", path: "/solutions/solution1" },
        { name: "Solution 2", path: "/solutions/solution2" },
        { name: "Solution 3", path: "/solutions/solution3" }
      ] 
    },
    { name: "Pricing", link: "/pricing" },
  ]);

  const handleNavigation = (path) => {
    router.push(path); // Navigate to the selected page
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative z-50">
      {/* Logo */}
      <div>
        <img src="/coca-cola-logo.png" alt="Coca Cola" className="h-10" />
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <a
              href={item.link}
              className={`text-sm font-medium ${
                item.active ? "text-red-500" : "text-gray-700"
              } hover:text-red-500 flex items-center gap-1`}
            >
              {item.name} {item.dropdown && <FaChevronDown size={12} />}
            </a>
            {item.dropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                {item.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavigation(option.path)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Login Button */}
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm">
          Log In / Sign Up
        </button>
      </div>
    </nav>
  );
};

export default CommonNavBar;
