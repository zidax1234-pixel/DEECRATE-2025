'use client'

import { useState } from 'react'
import { ArrowLeft, CreditCard, Smartphone, Building2, Check, AlertCircle, Shield, Clock, User, Mail, Phone, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface DesignData {
  id: number
  title: string
  designer: string
  price: number
  image: string
  category: string
}

export default function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState<'bank' | 'gopay' | 'dana' | 'ovo' | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const router = useRouter()

  // Mock data - in real app, this would come from URL params or state
  const designData: DesignData = {
    id: 1,
    title: 'Batik Modern Fusion',
    designer: 'Rani Wijaya',
    price: 150000,
    image: '/images/batik-modern.jpg',
    category: 'indonesia-culture'
  }

  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const paymentMethods = [
    {
      id: 'bank',
      name: 'Transfer Bank',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      description: 'Transfer melalui ATM, Mobile Banking, atau Internet Banking',
      fee: 0,
      accounts: [
        { bank: 'BCA', number: '1234567890', holder: 'PT DeeCrate Indonesia' },
        { bank: 'Mandiri', number: '0987654321', holder: 'PT DeeCrate Indonesia' },
        { bank: 'BNI', number: '5678901234', holder: 'PT DeeCrate Indonesia' }
      ]
    },
    {
      id: 'gopay',
      name: 'GoPay',
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      description: 'Pembayaran instan menggunakan GoPay',
      fee: 1000,
      phoneNumber: '0812-3456-7890'
    },
    {
      id: 'dana',
      name: 'DANA',
      icon: Smartphone,
      color: 'from-blue-500 to-indigo-600',
      description: 'Pembayaran instan menggunakan DANA',
      fee: 1000,
      phoneNumber: '0812-3456-7890'
    },
    {
      id: 'ovo',
      name: 'OVO',
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
      description: 'Pembayaran instan menggunakan OVO',
      fee: 1000,
      phoneNumber: '0812-3456-7890'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const calculateTotal = () => {
    const paymentMethod = paymentMethods.find(p => p.id === selectedPayment)
    const fee = paymentMethod?.fee || 0
    return designData.price + fee
  }

  const handleInputChange = (field: string, value: string) => {
    setCustomerData({...customerData, [field]: value})
  }

  const validateCustomerData = () => {
    return customerData.name.trim() && 
           customerData.email.trim() && 
           customerData.phone.trim() && 
           customerData.address.trim()
  }

  const handlePayment = async () => {
    if (!validateCustomerData()) {
      alert('Mohon lengkapi data diri terlebih dahulu')
      return
    }

    if (!selectedPayment) {
      alert('Pilih metode pembayaran terlebih dahulu')
      return
    }

    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentComplete(true)
      setCurrentStep(3)
    }, 3000)
  }

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                currentStep >= step
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {currentStep > step ? <Check className="w-5 h-5" /> : step}
            </div>
            {step < 3 && (
              <div
                className={`w-full h-1 mx-2 transition-colors ${
                  currentStep > step ? 'bg-purple-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Data Pembeli</span>
        <span>Pembayaran</span>
        <span>Konfirmasi</span>
      </div>
    </div>
  )

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Pembayaran Berhasil!</h1>
            <p className="text-gray-600 mb-6">
              Terima kasih telah membeli desain "{designData.title}". Anda akan menerima email konfirmasi dan file desain dalam 24 jam.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">Detail Pembayaran:</p>
              <p className="font-semibold">{formatPrice(calculateTotal())}</p>
              <p className="text-xs text-gray-500">Transaction ID: #{Date.now()}</p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/client')}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Kembali ke Dashboard
              </button>
              <button
                onClick={() => router.push('/client')}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Lihat Pesanan Saya
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/client')}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali</span>
          </button>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                DeeCrate Payment
              </span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Proses Pembayaran</h1>
          </div>
          <div className="w-20"></div>
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Ringkasan Pesanan</h2>
              
              <div className="flex space-x-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-medium text-xs">Preview</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{designData.title}</h3>
                  <p className="text-sm text-gray-600">by {designData.designer}</p>
                  <p className="text-xs text-purple-600 mt-1">{designData.category}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Harga Desain</span>
                  <span className="font-medium">{formatPrice(designData.price)}</span>
                </div>
                {selectedPayment && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Biaya Layanan</span>
                    <span className="font-medium">
                      {formatPrice(paymentMethods.find(p => p.id === selectedPayment)?.fee || 0)}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="font-bold text-lg text-purple-600">
                      {formatPrice(calculateTotal())}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-purple-700">Pembayaran aman dan terjamin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              {/* Step 1: Customer Data */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Pembeli</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={customerData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          value={customerData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          value={customerData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <textarea
                          value={customerData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          rows={3}
                          placeholder="Masukkan alamat lengkap"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => setCurrentStep(2)}
                      disabled={!validateCustomerData()}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        validateCustomerData()
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Lanjut ke Pembayaran
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Metode Pembayaran</h2>
                  
                  <div className="space-y-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <button
                          key={method.id}
                          onClick={() => setSelectedPayment(method.id as any)}
                          className={`w-full p-4 rounded-xl border-2 transition-all ${
                            selectedPayment === method.id
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 text-left">
                              <h3 className="font-semibold text-gray-800">{method.name}</h3>
                              <p className="text-sm text-gray-600">{method.description}</p>
                              {method.fee > 0 && (
                                <p className="text-xs text-purple-600 mt-1">
                                  Biaya layanan: {formatPrice(method.fee)}
                                </p>
                              )}
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedPayment === method.id
                                ? 'border-purple-500 bg-purple-500'
                                : 'border-gray-300'
                            }`}>
                              {selectedPayment === method.id && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Payment Details */}
                  {selectedPayment === 'bank' && (
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Detail Transfer Bank</h3>
                      <div className="space-y-3">
                        {paymentMethods.find(p => p.id === 'bank')?.accounts.map((account, index) => (
                          <div key={index} className="bg-white rounded-lg p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-medium text-gray-800">{account.bank}</p>
                                <p className="text-sm text-gray-600">{account.number}</p>
                                <p className="text-xs text-gray-500">a.n. {account.holder}</p>
                              </div>
                              <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                                Salin
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                          <span className="text-xs text-yellow-700">
                            Mohon transfer sesuai total pembayaran dan konfirmasi setelah transfer
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedPayment && selectedPayment !== 'bank' && (
                    <div className="bg-green-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Pembayaran Instan</h3>
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-4">
                          Klik tombol di bawah untuk melanjutkan pembayaran dengan {paymentMethods.find(p => p.id === selectedPayment)?.name}:
                        </p>
                        <div className="flex items-center justify-center mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${paymentMethods.find(p => p.id === selectedPayment)?.color} rounded-2xl flex items-center justify-center`}>
                            <Smartphone className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                          Bayar dengan {paymentMethods.find(p => p.id === selectedPayment)?.name}
                        </button>
                        <p className="text-xs text-gray-500 mt-3 text-center">
                          Anda akan diarahkan ke aplikasi {paymentMethods.find(p => p.id === selectedPayment)?.name} untuk menyelesaikan pembayaran
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
                    >
                      Kembali
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={!selectedPayment || isProcessing}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        !selectedPayment || isProcessing
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
                      }`}
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Memproses...</span>
                        </div>
                      ) : (
                        `Bayar ${formatPrice(calculateTotal())}`
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}