'use client'

import { useState } from 'react'
import { ArrowLeft, Upload, TrendingUp, Calendar, Search, Heart, MessageCircle, Share2, Palette, Users, Star, Clock, DollarSign, Eye, Check, ChevronRight, ChevronDown, Sparkles, Target, Zap, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DesignerGuidePage() {
  const [activeSection, setActiveSection] = useState('overview')
  const router = useRouter()

  const handleStartJourney = () => {
    router.push('/designer-onboarding')
  }

  const features = [
    {
      id: 'upload',
      title: 'Upload Desainmu',
      description: 'Tampilkan karya terbaik Anda ke seluruh Indonesia',
      icon: Upload,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Jangkauan ribuan client potensial',
        'Setiap desain bisa dijual berulang kali',
        'Build portfolio profesional Anda',
        'Dapatkan review dan rating dari client'
      ],
      howToUse: [
        '1. Klik tombol "Upload Desainmu"',
        '2. Isi judul desain yang menarik',
        '3. Pilih kategori yang sesuai (Logo, UI/UX, dll)',
        '4. Tentukan harga minimum Rp 10.000',
        '5. Tulis deskripsi yang detail dan menarik',
        '6. Upload file desain (PNG, JPG, PDF, SVG)',
        '7. Klik "Publikasikan" untuk mulai menjual'
      ]
    },
    {
      id: 'trending',
      title: 'Desain Trending',
      description: 'Lihat desain apa yang sedang populer dan dapat inspirasi',
      icon: TrendingUp,
      color: 'from-red-500 to-orange-500',
      benefits: [
        'Analisis trend pasar desain terkini',
        'Dapatkan inspirasi dari karya terbaik',
        'Pelajari apa yang client cari',
        'Tingkatkan kualitas desain Anda',
        'Ikuti kompetisi desain yang sedang trending'
      ],
      howToUse: [
        '1. Klik tab "Desain Trending"',
        '2. Lihat desain dengan like dan review tertinggi',
        '3. Gunakan filter untuk kategori tertentu',
        '4. Klik desain untuk melihat detail lengkap',
        '5. Perhatikan harga dan rating yang kompetitif',
        '6. Study komposisi dan teknik yang digunakan',
        '7. Gunakan insight untuk improve desain Anda sendiri'
      ]
    },
    {
      id: 'events',
      title: 'Event Desain',
      description: 'Ikuti kompetisi, workshop, dan meetup desainer',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500',
      benefits: [
        'Menangkan hadiah total jutaan rupiah',
        'Bangun networking dengan desainer lain',
        'Learn dari expert di industri kreatif',
        'Dapatkan exposure dan recognition',
        'Update skill dengan teknik terbaru'
      ],
      howToUse: [
        '1. Klik tab "Event Desain"',
        '2. Browse event yang tersedia (Kompetisi, Workshop, Meetup)',
        '3. Baca detail event (tanggal, hadiah, peserta)',
        '4. Klik "Ikuti" atau "Daftar" untuk bergabung',
        '5. Siapkan karya terbaik Anda untuk kompetisi',
        '6. Join workshop untuk belajar teknik baru',
        '7. Network dengan desainer lain di meetup'
      ]
    },
    {
      id: 'clients',
      title: 'Cari Pelanggan',
      description: 'Temukan client yang membutuhkan jasa desain Anda',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Akses ribuan proyek desain',
        'Filter berdasarkan budget dan keahlian',
        'Langsung hubungi client yang tertarik',
        'Bangun reputasi dan portofolio proyek',
        'Dapatkan penghasilan yang konsisten'
      ],
      howToUse: [
        '1. Klik tab "Cari Pelanggan"',
        '2. Gunakan filter: Jenis Proyek, Budget, Durasi',
        '3. Baca deskripsi proyek dengan detail',
        '4. Perhatikan requirements dan deadline',
        '5. Klik "Lamar" untuk menawarkan jasa Anda',
        '6. Siapkan portfolio yang relevan',
        '7. Negosiasikan harga dan timeline dengan client'
      ]
    },
    {
      id: 'chat',
      title: 'Chat dengan Pelanggan',
      description: 'Komunikasi langsung dengan client untuk negosiasi dan konsultasi',
      icon: MessageCircle,
      color: 'from-pink-500 to-rose-500',
      benefits: [
        'Komunikasi real-time dengan client',
        'Bangun hubungan yang lebih baik',
        'Negosiasi harga dan requirements',
        'Kirim preview desain langsung',
        'Dapatkan konfirmasi instan',
        'Simpan riwayat percakapan penting'
      ],
      howToUse: [
        '1. Klik tab "Chat" di navigation',
        '2. Lihat daftar percakapan aktif',
        '3. Identifikasi chat dengan unread messages (badge merah)',
        '4. Klik chat untuk membuka percakapan',
        '5. Kirim pesan teks untuk komunikasi',
        '6. Gunakan fitur voice/video call jika needed',
        '7. Share file desain untuk preview client'
      ]
    }
  ]

  const getFeatureIcon = (featureId: string) => {
    const feature = features.find(f => f.id === featureId)
    return feature ? feature.icon : Upload
  }

  const getFeatureColor = (featureId: string) => {
    const feature = features.find(f => f.id === featureId)
    return feature ? feature.color : 'from-purple-500 to-pink-500'
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
                onClick={() => router.push('/register')}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  DeeCrate Designer Guide
                </span>
              </button>
            </div>

            {/* Start Journey Button */}
            <button
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Mulai Perjalanan Desainer
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Selamat Datang Calon Desainer Hebat!
            </h1>
          </div>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Platform DeeCrate akan membantu Anda mengubah bakat kreatif menjadi sumber penghasilan yang luar biasa. 
            Mari kita pelajari setiap fitur yang akan membantu kesuksesan Anda!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Raih Pasar Global</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">Penghasilan Tak Terbatas</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Tools Modern</span>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <button
                key={feature.id}
                onClick={() => setActiveSection(feature.id)}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-left ${
                  activeSection === feature.id ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <span>Klik untuk detail lengkap</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Detailed Feature Information */}
        {activeSection !== 'overview' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
            {features.map((feature) => {
              if (feature.id !== activeSection) return null
              const Icon = feature.icon
              
              return (
                <div key={feature.id} className="space-y-8">
                  {/* Feature Header */}
                  <div className="flex items-center space-x-4 pb-6 border-b border-gray-200">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h2>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Keuntungan Menggunakan Fitur Ini</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {feature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How to Use Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span>Cara Penggunaan Step-by-Step</span>
                    </h3>
                    <div className="space-y-3">
                      {feature.howToUse.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips Section */}
                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3 flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                      <span>Tips Pro untuk Maximalisasi Hasil</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Update portfolio secara rutin dengan karya terbaru</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Gunakan deskripsi yang detail dengan keywords yang relevan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Responsif terhadap chat dan pesan dari client</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Ikuti trend desain untuk tetap relevan di pasar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Success Stories */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎉 Kisah Sukses Desainer DeeCrate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">R</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Rani Wijaya</h3>
              <p className="text-sm text-gray-600 mb-2">Specialist: Logo Design</p>
              <div className="space-y-1 text-xs text-gray-500">
                <p>💰 Rp 15 Juta/Bulan</p>
                <p>📈 250+ Desain Terjual</p>
                <p>⭐ 4.9/5.0 Rating</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">A</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ahmad Fauzi</h3>
              <p className="text-sm text-gray-600 mb-2">Specialist: UI/UX Design</p>
              <div className="space-y-1 text-xs text-gray-500">
                <p>💰 Rp 12 Juta/Bulan</p>
                <p>📈 180+ Desain Terjual</p>
                <p>⭐ 4.8/5.0 Rating</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-200 to-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">M</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Maya Putri</h3>
              <p className="text-sm text-gray-600 mb-2">Specialist: Illustration</p>
              <div className="space-y-1 text-xs text-gray-500">
                <p>💰 Rp 8 Juta/Bulan</p>
                <p>📈 120+ Desain Terjual</p>
                <p>⭐ 4.7/5.0 Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              🚀 Siap Menjadi Desainer Sukses?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan desainer lain yang telah mengubah passion mereka menjadi penghasilan yang luar biasa melalui DeeCrate.
            </p>
            <button
              onClick={handleStartJourney}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Mulai Perjalanan Desainer Saya Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}