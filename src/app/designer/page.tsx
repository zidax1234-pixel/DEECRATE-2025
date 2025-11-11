'use client'

import { useState } from 'react'
import { ArrowLeft, Upload, TrendingUp, Calendar, Search, Plus, Heart, MessageCircle, Share2, Filter, Grid, List, Send, Phone, Video, MoreVertical, User, Settings, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DesignerDashboardPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [activeTab, setActiveTab] = useState('upload')
  const [selectedChat, setSelectedChat] = useState<number | null>(null)
  const [messageInput, setMessageInput] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    description: ''
  })
  const [priceError, setPriceError] = useState('')
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({...formData, price: value})
    
    // Validate minimum price
    if (value && parseInt(value) < 10000) {
      setPriceError('Harga minimum adalah Rp 10.000')
    } else {
      setPriceError('')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value})
  }

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput)
      setMessageInput('')
    }
  }

  const customerChats = [
    {
      id: 1,
      name: 'Budi Santoso',
      avatar: 'BS',
      lastMessage: 'Apakah desain logo ini masih tersedia?',
      time: '10:30',
      unread: 2,
      designTitle: 'Logo Minimalist Tech',
      status: 'online'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      avatar: 'SN',
      lastMessage: 'Bisa dibuatkan variasi warna lain?',
      time: '09:15',
      unread: 1,
      designTitle: 'Brand Identity Pack',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Ahmad Fauzi',
      avatar: 'AF',
      lastMessage: 'Saya tertarik dengan desain ini',
      time: 'Kemarin',
      unread: 0,
      designTitle: 'UI Dashboard Concept',
      status: 'online'
    },
    {
      id: 4,
      name: 'Maya Putri',
      avatar: 'MP',
      lastMessage: 'Berapa harga untuk revisi minor?',
      time: 'Kemarin',
      unread: 0,
      designTitle: 'Logo Minimalist Tech',
      status: 'offline'
    }
  ]

  const chatMessages = [
    {
      id: 1,
      sender: 'customer',
      message: 'Halo, saya tertarik dengan desain logo yang Anda buat',
      time: '10:00'
    },
    {
      id: 2,
      sender: 'designer',
      message: 'Halo! Terima kasih atas minat Anda. Ada yang bisa saya bantu?',
      time: '10:05'
    },
    {
      id: 3,
      sender: 'customer',
      message: 'Apakah desain logo ini masih tersedia?',
      time: '10:30'
    }
  ]

  const handleSubmit = (action: 'draft' | 'publish') => {
    // Validate form
    if (!formData.title.trim()) {
      alert('Judul desain harus diisi')
      return
    }
    
    if (!formData.category) {
      alert('Kategori harus dipilih')
      return
    }
    
    if (!formData.price || parseInt(formData.price) < 10000) {
      alert('Harga minimum adalah Rp 10.000')
      return
    }
    
    if (!formData.description.trim()) {
      alert('Deskripsi harus diisi')
      return
    }

    // Handle form submission
    console.log('Form data:', formData)
    console.log('Action:', action)
    
    if (action === 'publish') {
      alert('Desain berhasil dipublikasikan!')
      // Reset form
      setFormData({
        title: '',
        category: '',
        price: '',
        description: ''
      })
    } else {
      alert('Draft berhasil disimpan!')
    }
  }

  const trendingDesigns = [
    {
      id: 1,
      title: 'Logo Minimalist Tech',
      designer: 'Sarah Chen',
      likes: 234,
      comments: 45,
      image: '/api/placeholder/300/200',
      category: 'Logo Design'
    },
    {
      id: 2,
      title: 'Brand Identity Pack',
      designer: 'Mike Johnson',
      likes: 189,
      comments: 32,
      image: '/api/placeholder/300/200',
      category: 'Branding'
    },
    {
      id: 3,
      title: 'UI Dashboard Concept',
      designer: 'Emma Wilson',
      likes: 156,
      comments: 28,
      image: '/api/placeholder/300/200',
      category: 'UI/UX'
    }
  ]

  const designEvents = [
    {
      id: 1,
      title: 'Design Challenge 2024',
      date: '15-30 November 2024',
      participants: 150,
      prize: '$1000',
      type: 'competition'
    },
    {
      id: 2,
      title: 'Creative Workshop: Branding',
      date: '20 November 2024',
      participants: 50,
      price: '$25',
      type: 'workshop'
    },
    {
      id: 3,
      title: 'Design Meetup Jakarta',
      date: '25 November 2024',
      participants: 100,
      price: 'Free',
      type: 'meetup'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Upload className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  DeeCrate Designer
                </span>
              </button>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Filter className="w-5 h-5" />
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-purple-600">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JD</span>
                  </div>
                  <span className="text-sm font-medium">John Doe</span>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Profil Saya</span>
                      </div>
                    </button>
                    <button 
                      onClick={() => router.push('/sales')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Penjualan</span>
                      </div>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>Pengaturan</span>
                      </div>
                    </button>
                    <hr className="my-2 border-gray-200" />
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <LogOut className="w-4 h-4" />
                        <span>Keluar</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Selamat Datang, Desainer! 👋
          </h1>
          <p className="text-gray-600">
            Waktunya menunjukkan karya terbaik Anda dan menemukan peluang baru
          </p>
        </div>

        {/* Main Menu Tabs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 mb-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeTab === 'upload' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <Upload className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Upload Desainmu</span>
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeTab === 'trending' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <TrendingUp className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Desain Trending</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeTab === 'events' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <Calendar className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Event Desain</span>
            </button>
            <button
              onClick={() => setActiveTab('clients')}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeTab === 'clients' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <Search className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Cari Pelanggan</span>
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex flex-col items-center p-4 rounded-xl transition-all relative ${
                activeTab === 'chat' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-600 hover:bg-purple-100'
              }`}
            >
              <MessageCircle className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">Chat</span>
              {customerChats.reduce((acc, chat) => acc + chat.unread, 0) > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {customerChats.reduce((acc, chat) => acc + chat.unread, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'upload' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Karya Terbaru Anda</h2>
            
            <div className="border-2 border-dashed border-purple-300 rounded-xl p-12 text-center hover:border-purple-500 transition-colors">
              <Upload className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Seret dan lepas file desain Anda
              </h3>
              <p className="text-gray-500 mb-6">
                atau klik untuk memilih file (PNG, JPG, PDF, SVG - Max 10MB)
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Pilih File
              </button>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Desain
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Berikan judul yang menarik"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select 
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="logo">Logo Design</option>
                  <option value="uiux">UI/UX</option>
                  <option value="branding">Branding</option>
                  <option value="illustration">Illustration</option>
                  <option value="photography">Photography</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harga Desain
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  Rp
                </span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={handlePriceChange}
                  min="10000"
                  className={`w-full pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    priceError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan harga (minimal Rp 10.000)"
                />
              </div>
              {priceError && (
                <p className="text-xs text-red-500 mt-1">
                  {priceError}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Harga minimum adalah Rp 10.000
              </p>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                placeholder="Jelaskan konsep dan inspirasi desain Anda"
              />
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <button 
                onClick={() => handleSubmit('draft')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Simpan Draft
              </button>
              <button 
                onClick={() => handleSubmit('publish')}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Publikasikan
              </button>
            </div>
          </div>
        )}

        {activeTab === 'trending' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Desain Trending Minggu Ini</h2>
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

            <div className={viewMode === 'grid' ? 'grid md:grid-cols-3 gap-6' : 'space-y-4'}>
              {trendingDesigns.map((design) => (
                <div key={design.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <span className="text-purple-600 font-medium">Preview Design</span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{design.title}</h3>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                        {design.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">by {design.designer}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{design.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{design.comments}</span>
                        </button>
                      </div>
                      <button className="text-gray-500 hover:text-purple-600">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Desain Terdekat</h2>
            
            <div className="space-y-4">
              {designEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          event.type === 'competition' ? 'bg-red-100 text-red-600' :
                          event.type === 'workshop' ? 'bg-blue-100 text-blue-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {event.type === 'competition' ? 'Kompetisi' :
                           event.type === 'workshop' ? 'Workshop' : 'Meetup'}
                        </span>
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{event.participants} peserta</span>
                        <span className="font-semibold text-purple-600">
                          {event.type === 'competition' ? `Hadiah: ${event.prize}` : `Harga: ${event.price}`}
                        </span>
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      {event.type === 'competition' ? 'Ikuti' : 'Daftar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cari Pelanggan</h2>
            
            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Pencarian</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Proyek
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Semua Jenis</option>
                    <option>Logo Design</option>
                    <option>UI/UX Design</option>
                    <option>Branding</option>
                    <option>Illustration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Semua Budget</option>
                    <option>$50 - $200</option>
                    <option>$200 - $500</option>
                    <option>$500 - $1000</option>
                    <option>$1000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durasi
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Semua Durasi</option>
                    <option>1-3 hari</option>
                    <option>1 minggu</option>
                    <option>2 minggu</option>
                    <option>1 bulan+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Logo Design untuk Startup Tech
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Kami mencari desainer untuk membuat logo modern dan minimalis untuk startup teknologi kami...
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                          Budget: $300-500
                        </span>
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                          Durasi: 1 minggu
                        </span>
                        <span className="text-gray-500">
                          Posted 2 hari yang lalu
                        </span>
                      </div>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Lamar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
            <div className="flex h-full">
              {/* Chat List */}
              <div className="w-full md:w-1/3 border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">Chat Pelanggan</h2>
                  <p className="text-sm text-gray-600">{customerChats.length} percakapan aktif</p>
                </div>
                <div className="overflow-y-auto" style={{ height: 'calc(100% - 80px)' }}>
                  {customerChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedChat === chat.id ? 'bg-purple-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {chat.avatar}
                          </div>
                          {chat.status === 'online' && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-gray-800 truncate">{chat.name}</h3>
                            <span className="text-xs text-gray-500">{chat.time}</span>
                          </div>
                          <p className="text-xs text-purple-600 mb-1">{chat.designTitle}</p>
                          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <div className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Content */}
              <div className="hidden md:flex flex-col flex-1">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 bg-white">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {customerChats.find(c => c.id === selectedChat)?.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {customerChats.find(c => c.id === selectedChat)?.name}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {customerChats.find(c => c.id === selectedChat)?.designTitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                            <Phone className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                            <Video className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'designer' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs px-4 py-2 rounded-2xl ${
                              message.sender === 'designer'
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'designer' ? 'text-purple-200' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Ketik pesan..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                          onClick={handleSendMessage}
                          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                        >
                          <Send className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Pilih chat untuk memulai percakapan</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}