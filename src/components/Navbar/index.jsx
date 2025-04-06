"use client";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Headset } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navbarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="container mx-auto z-50 px-6 relative" ref={navbarRef}>
      <div className="flex items-center justify-between">
        {/* Left Section - Logo & Nav Links */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/" className="text-2xl pacifico-regular text-primary relative group">
            logo
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Features Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDropdown(dropdown === "features" ? null : "features")}
                className="flex items-center gap-1 text-gray-600 hover:text-primary py-2"
              >
                Features <i className="ri-arrow-down-s-line transition-transform group-hover:rotate-180"></i>
              </button>
              {dropdown === "features" && (
                <div className="absolute top-full left-0 pt-2 bg-white rounded-lg shadow-lg border border-gray-100 w-64 p-4">
                  <div className="space-y-2">
                    <Link href="/industry" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="ri-dashboard-3-line text-primary"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">Industry</div>
                        <div className="text-sm text-gray-500">Real-time analytics</div>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="ri-stack-line text-primary"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">Feature</div>
                        <div className="text-sm text-gray-500">Stock management</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setDropdown(dropdown === "solutions" ? null : "solutions")}
                className="flex items-center gap-1 text-gray-600 hover:text-primary py-2"
              >
                Solutions <i className="ri-arrow-down-s-line transition-transform group-hover:rotate-180"></i>
              </button>
              {dropdown === "solutions" && (
                <div className="absolute top-full left-0 pt-2 bg-white rounded-lg shadow-lg border border-gray-100 w-64 p-4">
                  <div className="space-y-2">
                    <Link href="/solution" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="ri-store-2-line text-primary"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">Solutions</div>
                        <div className="text-sm text-gray-500">Store management</div>
                      </div>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className="ri-truck-line text-primary"></i>
                      </div>
                      <div>
                        <div className="font-medium text-primary">Logistics</div>
                        <div className="text-sm text-gray-500">Supply chain</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-600 hover:text-primary relative group py-2">
              Pricing
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
            <Link href="/customers" className="text-gray-600 hover:text-primary relative group py-2">
              Customers
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Right Section - Help & Buttons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-gray-600">
            <span><Headset className="w-4 h-4 font-bold" /></span> 
            <span>Need Help?</span>
          </div>
          <div className="h-6 w-px bg-gray-200 hidden lg:block"></div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-primary hover:bg-primary/5 rounded-lg flex items-center gap-2">
              <i className="ri-user-line"></i> Sign In
            </button>
            <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 rounded-lg flex items-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <i className="ri-arrow-right-line relative z-10 transition-transform group-hover:translate-x-1"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
