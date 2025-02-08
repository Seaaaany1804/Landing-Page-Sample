import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/public/images/icon.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      {/* Add Material Icons stylesheet */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      
      <div className="max-w-7xl flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo & Search Bar */}
        <div className="flex items-center space-x-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Icon} alt="Logo" width={40} height={40} />
            </Link>
          </div>

          {/* Search Bar with Icon */}
          <div className="relative">
            <i className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              search
            </i>
            <input 
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border text-black text-sm border-[#8B3A80] rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        {/* Right Section: Navigation Links & Icons */}
        <div className="flex justify-end items-center gap-x-16 h-16">
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center text-[#8B3A80] font-semibold space-x-8">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <Link href="/features" className="hover:text-purple-600">Features</Link>
            <Link href="/products" className="hover:text-purple-600">Products</Link>
            <Link href="/reviews" className="hover:text-purple-600">Reviews</Link>
            <Link href="/about" className="hover:text-purple-600">About Us</Link>
          </div>

          {/* Menu Icon (Mobile) */}
          <button className="md:hidden text-[#8B3A80] hover:text-purple-600">
            <i className="material-icons">menu</i>
          </button>


          {/* Login/Sign Up Button */}
          <div className="flex items-center">
            <Link 
              href="/login"
              className="bg-[#8B3A80] text-white px-4 py-2 font-semibold rounded-md hover:bg-purple-700"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}