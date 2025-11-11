'use client'

import { useState } from 'react'
import { ArrowLeft, Download, Eye, Star, Calendar, Filter, Search, Package, Clock, CheckCircle, XCircle, AlertCircle, RefreshCw, ExternalLink, User, Heart, Settings, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PurchaseHistoryPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null)
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  const handleNavigateTo = (path: string) => {
    router.push(path)
  }

  const purchaseHistory = [
    {
      id: 1,
      designTitle: 'Batik Modern Fusion',
      designerName: 'Rani Wijaya',
      designerAvatar: 'RW',
      designerRating: 4.8,
      price: 150000,
      status: 'completed',
      purchaseDate: '2024-11-10',
      downloadDate: '2024-11-10',
      transactionId: 'TRX-20241110-001',
      fileFormat: 'PNG',
      fileSize: '2.5 MB',
      licenseType: 'Commercial Use',
      supportUntil: '2025-11-10'
    },
    {
      id: 2,
      designTitle: 'K-Pop Inspired Typography',
      designerName: 'Kim Minji',
      designerAvatar: 'KM',
      designerRating: 4.6,
      price: 120000,
      status: 'completed',
      purchaseDate: '2024-11-09',
      downloadDate: '2024-11-09',
      transactionId: 'TRX-20241109-002',
      fileFormat: 'AI',
      fileSize: '1.8 MB',
      licenseType: 'Personal Use',
      supportUntil: '2025-11-09'
    },
    {
      id: 3,
      designTitle: 'Climate Change Awareness',
      designerName: 'Budi Santoso',
      designerAvatar: 'BS',
      designerRating: 4.9,
      price: 200000,
      status: 'processing',
      purchaseDate: '2024-11-08',
      downloadDate: null,
      transactionId: 'TRX-20241108-003',
      fileFormat: 'PDF',
      fileSize: '3.2 MB',
      licenseType: 'Commercial Use',
      supportUntil: '2025-11-08'
    },
    {
      id: 4,
      designTitle: 'Neon Dreams Aesthetic',
      designerName: 'Maya Putri',
      designerAvatar: 'MP',
      designerRating: 4.7,
      price: 180000,
      status: 'refunded',
      purchaseDate: '2024-11-07',
      downloadDate: '2024-11-07',
      transactionId: 'TRX-20241107-004',
      fileFormat: 'SVG',
      fileSize: '0.8 MB',
      licenseType: 'Commercial Use',
      supportUntil: '2025-11-07',
      refundReason: 'File tidak sesuai deskripsi'
    },
    {
      id: 5,
      designTitle: 'Wayang Contemporary',
      designerName: 'Ahmad Fauzi',
      designerAvatar: 'AF',
      designerRating: 5.0,
      price: 250000,
      status: 'completed',
      purchaseDate: '2024-11-05',
      downloadDate: '2024-11-05',
      transactionId: 'TRX-20241105-005',
      fileFormat: 'JPG',
      fileSize: '4.1 MB',
      licenseType: 'Extended Commercial',
      supportUntil: '2026-11-05'
    }
  ]

  const filteredPurchases = purchaseHistory.filter(purchase => {
    const matchesSearch = purchase.designTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          purchase.designerName.toLowerCase().includes(searchQuery.toLowerCase())
    
    let matchesPeriod = true
    if (selectedPeriod === 'today') {
      const today = new Date().toISOString().split('T')[0]
      matchesPeriod = purchase.purchaseDate === today
    } else if (selectedPeriod === 'week') {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      matchesPeriod = purchase.purchaseDate >= weekAgo
    } else if (selectedPeriod === 'month') {
      const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      matchesPeriod = purchase.purchaseDate >= monthAgo
    }
    
    return matchesSearch && matchesPeriod
  })

  const totalSpent = filteredPurchases
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.price, 0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'processing': return 'text-yellow-600 bg-yellow-100'
      case 'refunded': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'processing': return <Clock className="w-4 h-4" />
      case 'refunded': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Selesai'
      case 'processing': return 'Sedang Diproses'
      case 'refunded': return 'Dikembalikan'
      default: return 'Tidak Diketahui'
    }
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  DeeCrate Purchase History
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
                      onClick={() => handleNavigateTo('/purchase-history')}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <Package className="w-4 h-4" />
                        <span>Riwayat Pembelian</span>
                      </div>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4" />
                        <span>Wishlist</span>
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
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">{filteredPurchases.length}</span>
            </div>
            <h3 className="text-gray-700 font-medium">Total Pembelian</h3>
            <p className="text-sm text-gray-500">Semua waktu</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">
                {filteredPurchases.filter(p => p.status === 'completed').length}
              </span>
            </div>
            <h3 className="text-gray-700 font-medium">Selesai</h3>
            <p className="text-sm text-gray-500">Bisa diunduh</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-yellow-600">
                {filteredPurchases.filter(p => p.status === 'processing').length}
              </span>
            </div>
            <h3 className="text-gray-700 font-medium">Diproses</h3>
            <p className="text-sm text-gray-500">Menunggu desain</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">Rp</span>
              </div>
              <span className="text-2xl font-bold text-purple-600">
                {formatPrice(totalSpent)}
              </span>
            </div>
            <h3 className="text-gray-700 font-medium">Total Pengeluaran</h3>
            <p className="text-sm text-gray-500">Pembelian berhasil</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari berdasarkan judul desain atau nama desainer..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">Semua Waktu</option>
              <option value="today">Hari Ini</option>
              <option value="week">Minggu Ini</option>
              <option value="month">Bulan Ini</option>
            </select>
          </div>
        </div>

        {/* Purchase History */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Riwayat Pembelian</h2>
            <p className="text-gray-600 mt-1">
              {filteredPurchases.length} transaksi ditemukan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Desain
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Desainer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Harga
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lisensi
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPurchases.map((purchase) => (
                  <tr key={purchase.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{purchase.purchaseDate}</p>
                        <p className="text-xs text-gray-500">
                          {purchase.downloadDate ? `Diunduh: ${purchase.downloadDate}` : 'Belum diunduh'}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{purchase.designTitle}</p>
                        <p className="text-xs text-gray-500">ID: {purchase.transactionId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{purchase.designerAvatar}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{purchase.designerName}</p>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{purchase.designerRating}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{formatPrice(purchase.price)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                        {getStatusIcon(purchase.status)}
                        <span>{getStatusText(purchase.status)}</span>
                      </div>
                      {purchase.status === 'refunded' && (
                        <p className="text-xs text-red-600 mt-1">
                          {purchase.refundReason}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">{purchase.licenseType}</p>
                        <p className="text-xs text-gray-500">
                          {purchase.fileFormat} • {purchase.fileSize}
                        </p>
                        {purchase.supportUntil && (
                          <p className="text-xs text-gray-500">
                            Support: {purchase.supportUntil}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        {purchase.status === 'completed' && (
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                        {purchase.status === 'processing' && (
                          <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors">
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        )}
                        {purchase.status === 'completed' && (
                          <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPurchases.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Belum Ada Pembelian</h3>
              <p className="text-gray-500">Mulai jelajahi desain menarik dari desainer berbakar!</p>
              <button 
                onClick={() => router.push('/client')}
                className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Jelajahi Desain
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}