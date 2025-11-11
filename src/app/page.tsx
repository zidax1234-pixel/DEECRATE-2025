'use client'

import { useState } from 'react'
import { Menu, X, Palette, Search, Users, Sparkles, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  DeeCrate
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#designers" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Desainer
              </a>
              <a href="#seekers" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Pencari Desain
              </a>
              <button 
                onClick={() => router.push('/login')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Masuk
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#designers" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                Desainer
              </a>
              <a href="#seekers" className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md">
                Pencari Desain
              </a>
              <button 
                onClick={() => router.push('/login')}
                className="w-full text-left px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-md"
              >
                Masuk
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Floating Icons */}
          <div className="relative mb-8">
            <div className="absolute top-0 left-1/4 animate-bounce">
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <div className="absolute top-4 right-1/4 animate-pulse">
              <Palette className="w-6 h-6 text-pink-400" />
            </div>
            <div className="absolute -top-2 left-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
              <Users className="w-7 h-7 text-blue-400" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            DeeCrate
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8">
            wadah para desainer dan pencari desain
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan komunitas kreatif terbesar untuk berkolaborasi, berbagi ide, dan mewujudkan desain impian Anda. Temukan desainer berbakat atau tunjukkan karya terbaik Anda.
          </p>

          {/* CTA Button */}
          <button 
            onClick={() => router.push('/register')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2"
          >
            <span>Mulai</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Sudah memiliki akun?{' '}
              <button 
                onClick={() => router.push('/login')}
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Log in
              </button>
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Untuk Desainer</h3>
              <p className="text-gray-600">Tampilkan portfolio Anda, dapatkan proyek, dan kolaborasi dengan klien dari seluruh dunia.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Untuk Pencari Desain</h3>
              <p className="text-gray-600">Temukan desainer berbakat yang sesuai dengan kebutuhan proyek Anda dengan mudah.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kolaborasi Mudah</h3>
              <p className="text-gray-600">Platform kolaborasi real-time untuk tim desain yang produktif dan efisien.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Brand Logos */}
      <footer className="bg-white/80 backdrop-blur-sm mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-8">Dipercaya oleh perusahaan dan komunitas kreatif</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">IBM</div>
              <div className="text-2xl font-bold text-gray-400">American Express</div>
              <div className="text-2xl font-bold text-gray-400">Google</div>
              <div className="text-2xl font-bold text-gray-400">Microsoft</div>
              <div className="text-2xl font-bold text-gray-400">Adobe</div>
              <div className="text-2xl font-bold text-gray-400">Figma</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}