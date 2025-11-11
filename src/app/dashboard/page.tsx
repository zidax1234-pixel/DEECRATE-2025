'use client'

import { useState } from 'react'
import { ArrowLeft, Palette, Search, Users, Settings, LogOut, Home, Briefcase, MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('home')
  const router = useRouter()

  const handleLogout = () => {
    // TODO: Implement logout logic
    router.push('/')
  }

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

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-5 h-5" />
                <span>Keluar</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'home' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Beranda</span>
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'projects' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Proyek</span>
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'messages' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Pesan</span>
                </button>
                <button
                  onClick={() => setActiveTab('community')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'community' 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>Komunitas</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              {activeTab === 'home' && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Selamat Datang di Dashboard DeeCrate!
                  </h1>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                          <Palette className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Portofolio Anda</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Kelola dan tampilkan karya desain terbaik Anda
                      </p>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        Kelola Portofolio
                      </button>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <Search className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">Cari Proyek</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Temukan proyek menarik yang sesuai dengan keahlian Anda
                      </p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Jelajahi Proyek
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Aktivitas Terkini</h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-600">Selamat datang! Mulai perjalanan kreatif Anda di DeeCrate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-6">Proyek Saya</h1>
                  <p className="text-gray-600">Belum ada proyek aktif. Mulai cari proyek menarik!</p>
                </div>
              )}

              {activeTab === 'messages' && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-6">Pesan</h1>
                  <p className="text-gray-600">Kotak masuk Anda kosong.</p>
                </div>
              )}

              {activeTab === 'community' && (
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-6">Komunitas</h1>
                  <p className="text-gray-600">Bergabunglah dengan komunitas desainer dan klien kreatif!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}