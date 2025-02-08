"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/public/images/icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      {/* Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <div className="flex justify-between items-center mx-auto px-4 md:px-8 lg:px-12 lg:gap-10 xl:px-20 py-4">
        {/* Left Section: Logo & Search Bar */}
        <div className="flex items-center space-x-4 md:space-x-10 lg:space-x-20 xl:space-x-32">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Icon} alt="Logo" width={40} height={40} />
            </Link>
          </div>

          {/* Search Bar (Hidden on smaller screens) */}
          <div className="relative hidden lg:block w-64 xl:w-96">
            <i className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-purple-600">
              menu
            </i>

            <i className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              search
            </i>

            <i className="material-icons absolute right-12 top-1/2 -translate-y-1/2 text-gray-500">
              notifications
            </i>

            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-20 py-3 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B3A80]"
            />
          </div>
        </div>

        {/* Right Section: Navigation Links & Icons */}
        <div className="flex items-center gap-x-6 lg:gap-x-12">
          {/* Desktop Navigation (Hidden on md and smaller) */}
          <div className="hidden lg:flex items-center text-black font-semibold space-x-6 xl:space-x-16 whitespace-nowrap">
            <Link href="/" className="text-purple-600">Home</Link>
            <Link href="/features" className="hover:text-purple-600 font-medium">Features</Link>
            <Link href="/products" className="hover:text-purple-600 font-medium">Products</Link>
            <Link href="/reviews" className="hover:text-purple-600 font-medium">Reviews</Link>
            <Link href="/about" className="hover:text-purple-600 font-medium">About Us</Link>
          </div>

          {/* Mobile & Tablet Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#8B3A80] hover:text-purple-600 focus:outline-none"
          >
            <i className="material-icons">{isOpen ? "close" : "menu"}</i>
          </button>

          {/* Login/Sign Up Button (Visible only on large screens) */}
          <div className="hidden lg:block">
            <Link
              href="/login"
              className="bg-[#8B3A80] text-white px-4 py-3 text-sm font-semibold rounded-md hover:bg-purple-700 whitespace-nowrap"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu (Visible when isOpen) */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-[64px] py-4 px-6">
          <div className="flex flex-col space-y-4 text-black font-semibold">
            <Link href="/" className="text-purple-600">Home</Link>
            <Link href="/features" className="hover:text-purple-600">Features</Link>
            <Link href="/products" className="hover:text-purple-600">Products</Link>
            <Link href="/reviews" className="hover:text-purple-600">Reviews</Link>
            <Link href="/about" className="hover:text-purple-600">About Us</Link>

            {/* Login/Sign Up Button (Now included in mobile menu) */}
            <Link
              href="/login"
              className="bg-[#8B3A80] text-white text-center py-3 rounded-md hover:bg-purple-700 whitespace-nowrap"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
