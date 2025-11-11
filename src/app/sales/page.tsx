'use client'

import { useState } from 'react'
import { ArrowLeft, TrendingUp, Download, Eye, Star, Calendar, Filter, Search, DollarSign, Package, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SalesPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleLogout = () => {
    router.push('/')
  }

  const salesData = [
    {
      id: 1,
      designTitle: 'Batik Modern Fusion',
      buyerName: 'Budi Santoso',
      buyerEmail: 'budi@example.com',
      price: 150000,
      status: 'completed',
      date: '2024-11-10',
      time: '14:30',
      transactionId: 'TRX-20241110-001',
      commission: 15000,
      netEarning: 135000
    },
    {
      id: 2,
      designTitle: 'K-Pop Inspired Typography',
      buyerName: 'Siti Nurhaliza',
      buyerEmail: 'siti@example.com',
      price: 120000,
      status: 'completed',
      date: '2024-11-09',
      time: '10:15',
      transactionId: 'TRX-20241109-002',
      commission: 12000,
      netEarning: 108000
    },
    {
      id: 3,
      designTitle: 'Climate Change Awareness',
      buyerName: 'Ahmad Fauzi',
      buyerEmail: 'ahmad@example.com',
      price: 200000,
      status: 'pending',
      date: '2024-11-08',
      time: '16:45',
      transactionId: 'TRX-20241108-003',
      commission: 20000,
      netEarning: 180000
    },
    {
      id: 4,
      designTitle: 'Neon Dreams Aesthetic',
      buyerName: 'Maya Putri',
      buyerEmail: 'maya@example.com',
      price: 180000,
      status: 'completed',
      date: '2024-11-07',
      time: '09:20',
      transactionId: 'TRX-20241107-004',
      commission: 18000,
      netEarning: 162000
    },
    {
      id: 5,
      designTitle: 'Wayang Contemporary',
      buyerName: 'Rina Wijaya',
      buyerEmail: 'rina@example.com',
      price: 250000,
      status: 'cancelled',
      date: '2024-11-06',
      time: '13:10',
      transactionId: 'TRX-20241106-005',
      commission: 0,
      netEarning: 0
    }
  ]

  const filteredSales = salesData.filter(sale => {
    const matchesSearch = sale.designTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sale.buyerName.toLowerCase().includes(searchQuery.toLowerCase())
    
    let matchesPeriod = true
    if (selectedPeriod === 'today') {
      const today = new Date().toISOString().split('T')[0]
      matchesPeriod = sale.date === today
    } else if (selectedPeriod === 'week') {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      matchesPeriod = sale.date >= weekAgo
    } else if (selectedPeriod === 'month') {
      const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      matchesPeriod = sale.date >= monthAgo
    }
    
    return matchesSearch && matchesPeriod
  })

  const totalSales = filteredSales.filter(s => s.status === 'completed').length
  const totalRevenue = filteredSales.filter(s => s.status === 'completed').reduce((sum, s) => sum + s.netEarning, 0)
  const pendingSales = filteredSales.filter(s => s.status === 'pending').length
  const cancelledSales = filteredSales.filter(s => s.status === 'cancelled').length

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
      case 'pending': return 'text-yellow-600 bg-yellow-100'
      case 'cancelled': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Selesai'
      case 'pending': return 'Menunggu Pembayaran'
      case 'cancelled': return 'Dibatalkan'
      default: return 'Tidak Diketahui'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/designer')}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  DeeCrate Sales
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
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">{totalSales}</span>
            </div>
            <h3 className="text-gray-700 font-medium">Total Penjualan</h3>
            <p className="text-sm text-gray-500">Desain terjual</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">{formatPrice(totalRevenue)}</span>
            </div>
            <h3 className="text-gray-700 font-medium">Total Pendapatan</h3>
            <p className="text-sm text-gray-500">Setelah komisi</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-yellow-600">{pendingSales}</span>
            </div>
            <h3 className="text-gray-700 font-medium">Menunggu Pembayaran</h3>
            <p className="text-sm text-gray-500">Transaksi pending</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-2xl font-bold text-red-600">{cancelledSales}</span>
            </div>
            <h3 className="text-gray-700 font-medium">Dibatalkan</h3>
            <p className="text-sm text-gray-500">Transaksi gagal</p>
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
                placeholder="Cari berdasarkan nama pembeli atau judul desain..."
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

        {/* Sales History */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">History Penjualan</h2>
            <p className="text-gray-600 mt-1">
              {filteredSales.length} transaksi ditemukan
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
                    Pembeli
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Harga
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pendapatan
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{sale.date}</p>
                        <p className="text-xs text-gray-500">{sale.time}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{sale.designTitle}</p>
                        <p className="text-xs text-gray-500">ID: {sale.transactionId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{sale.buyerName}</p>
                        <p className="text-xs text-gray-500">{sale.buyerEmail}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{formatPrice(sale.price)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(sale.status)}`}>
                        {getStatusIcon(sale.status)}
                        <span>{getStatusText(sale.status)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className={`text-sm font-semibold ${
                        sale.status === 'completed' ? 'text-green-600' : 
                        sale.status === 'cancelled' ? 'text-red-600' : 'text-gray-400'
                      }`}>
                        {formatPrice(sale.netEarning)}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        {sale.status === 'completed' && (
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSales.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Belum Ada Penjualan</h3>
              <p className="text-gray-500">Mulai upload desain Anda untuk mendapatkan penjualan pertama!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}