'use client'

import { useState } from 'react'
import { ArrowLeft, Search, Heart, ShoppingCart, Filter, Grid, List, TrendingUp, Globe, Music, MessageSquare, Palette, Star, Clock, User, Settings, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ClientDashboardPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  const handleNavigateTo = (path: string) => {
    router.push(path)
  }

  const categories = [
    {
      id: 'indonesia-culture',
      name: 'Indonesia Culture',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      description: 'Desain dengan nuansa budaya Indonesia'
    },
    {
      id: 'pop-culture',
      name: 'Pop Culture',
      icon: Music,
      color: 'from-pink-500 to-rose-500',
      description: 'Tren dan budaya pop terkini'
    },
    {
      id: 'vocal-statement',
      name: 'Vocal and Statement',
      icon: MessageSquare,
      color: 'from-blue-500 to-indigo-500',
      description: 'Desain dengan pesan dan makna'
    },
    {
      id: 'aesthetic-visual',
      name: 'Aesthetic and Visual Gimmick',
      icon: Palette,
      color: 'from-purple-500 to-violet-500',
      description: 'Estetika visual yang menarik'
    }
  ]

  const trendingDesigns = [
    {
      id: 1,
      title: 'Batik Modern Fusion',
      designer: 'Rani Wijaya',
      designerAvatar: 'RW',
      price: 150000,
      likes: 234,
      category: 'indonesia-culture',
      image: '/images/batik-modern.jpg',
      rating: 4.8,
      reviews: 45,
      createdAt: '2 jam yang lalu'
    },
    {
      id: 2,
      title: 'K-Pop Inspired Typography',
      designer: 'Kim Minji',
      designerAvatar: 'KM',
      price: 120000,
      likes: 189,
      category: 'pop-culture',
      image: '/images/kpop-typo.jpg',
      rating: 4.6,
      reviews: 32,
      createdAt: '3 jam yang lalu'
    },
    {
      id: 3,
      title: 'Climate Change Awareness',
      designer: 'Budi Santoso',
      designerAvatar: 'BS',
      price: 200000,
      likes: 156,
      category: 'vocal-statement',
      image: '/images/climate-change.jpg',
      rating: 4.9,
      reviews: 28,
      createdAt: '5 jam yang lalu'
    },
    {
      id: 4,
      title: 'Neon Dreams Aesthetic',
      designer: 'Maya Putri',
      designerAvatar: 'MP',
      price: 180000,
      likes: 145,
      category: 'aesthetic-visual',
      image: '/images/neon-dreams.jpg',
      rating: 4.7,
      reviews: 21,
      createdAt: '6 jam yang lalu'
    },
    {
      id: 5,
      title: 'Wayang Contemporary',
      designer: 'Ahmad Fauzi',
      designerAvatar: 'AF',
      price: 250000,
      likes: 298,
      category: 'indonesia-culture',
      image: '/images/wayang-modern.jpg',
      rating: 5.0,
      reviews: 67,
      createdAt: '1 hari yang lalu'
    },
    {
      id: 6,
      title: 'Retro Wave Vibes',
      designer: 'Sarah Chen',
      designerAvatar: 'SC',
      price: 130000,
      likes: 167,
      category: 'aesthetic-visual',
      image: '/images/retro-wave.jpg',
      rating: 4.5,
      reviews: 19,
      createdAt: '1 hari yang lalu'
    }
  ]

  const filteredDesigns = trendingDesigns.filter(design => {
    const matchesCategory = selectedCategory === 'all' || design.category === selectedCategory
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          design.designer.toLowerCase().includes(searchQuery.toLowerCase())
    
    let matchesPrice = true
    if (priceFilter === 'under-100k') matchesPrice = design.price < 100000
    else if (priceFilter === '100k-200k') matchesPrice = design.price >= 100000 && design.price <= 200000
    else if (priceFilter === 'above-200k') matchesPrice = design.price > 200000
    
    return matchesCategory && matchesSearch && matchesPrice
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/')}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  DeeCrate Client
                </span>
              </button>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Heart className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600"
              >
                <span>Keluar</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Temukan Desain Impian Anda 🎨
          </h1>
          <p className="text-gray-600">
            Jelajahi karya desainer berbakat dari seluruh Indonesia
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari desain atau desainer..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">Semua Harga</option>
                <option value="under-100k">Di bawah Rp 100.000</option>
                <option value="100k-200k">Rp 100.000 - 200.000</option>
                <option value="above-200k">Di atas Rp 200.000</option>
              </select>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Kategori Desain</h2>
              
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left p-4 rounded-xl mb-3 transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Grid className="w-5 h-5" />
                  <span className="font-medium">Semua Kategori</span>
                </div>
              </button>

              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-4 rounded-xl mb-3 transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className={`text-xs mt-1 ${
                          selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Trending Header */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-red-500" />
                    <span>Desain Trending Hari Ini</span>
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {filteredDesigns.length} desain ditemukan
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Designs Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
              {filteredDesigns.map((design) => (
                <div key={design.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div>
                      <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center relative overflow-hidden">
                        {design.image ? (
                          <img 
                            src={design.image} 
                            alt={design.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.nextElementSibling?.classList.remove('hidden')
                            }}
                          />
                        ) : null}
                        <div className="text-purple-600 font-medium hidden">
                          Preview Design
                        </div>
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-xs font-medium text-gray-700">{design.createdAt}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-gray-800 text-lg">{design.title}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{design.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{design.designerAvatar}</span>
                          </div>
                          <span className="text-sm text-gray-600">{design.designer}</span>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span className="text-sm">{design.likes}</span>
                            </button>
                            <span className="text-xs text-gray-500">{design.reviews} reviews</span>
                          </div>
                          <div className="text-lg font-bold text-purple-600">
                            {formatPrice(design.price)}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button 
                            onClick={() => router.push(`/payment?designId=${design.id}`)}
                            className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            Beli Sekarang
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <ShoppingCart className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="p-6">
                      <div className="flex space-x-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                          {design.image ? (
                            <img 
                              src={design.image} 
                              alt={design.title}
                              className="w-full h-full object-cover rounded-xl"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                e.currentTarget.style.display = 'none'
                                e.currentTarget.nextElementSibling?.classList.remove('hidden')
                              }}
                            />
                          ) : null}
                          <div className="text-purple-600 font-medium text-xs hidden">
                            Preview
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-800 text-lg mb-1">{design.title}</h3>
                              <div className="flex items-center space-x-3 mb-2">
                                <div className="flex items-center space-x-1">
                                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">{design.designerAvatar}</span>
                                  </div>
                                  <span className="text-sm text-gray-600">{design.designer}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-sm font-medium">{design.rating}</span>
                                  <span className="text-xs text-gray-500">({design.reviews})</span>
                                </div>
                                <span className="text-xs text-gray-500">{design.createdAt}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-purple-600 mb-2">
                                {formatPrice(design.price)}
                              </div>
                              <div className="flex items-center space-x-2">
                                <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                                  <Heart className="w-4 h-4" />
                                  <span className="text-sm">{design.likes}</span>
                                </button>
                                <button 
                                  onClick={() => router.push(`/payment?designId=${design.id}`)}
                                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                                >
                                  Beli
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredDesigns.length === 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Tidak ada desain ditemukan</h3>
                <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}