'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">WEZOM</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a>
            <a href="#cases" className="text-gray-700 hover:text-black transition-colors">Cases</a>
            <a href="#industries" className="text-gray-700 hover:text-black transition-colors">Industries</a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
          </nav>

          <button className="hidden md:block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Get Started
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-black">Services</a>
              <a href="#cases" className="text-gray-700 hover:text-black">Cases</a>
              <a href="#industries" className="text-gray-700 hover:text-black">Industries</a>
              <a href="#about" className="text-gray-700 hover:text-black">About</a>
              <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
              <button className="bg-black text-white px-4 py-2 rounded-md w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
