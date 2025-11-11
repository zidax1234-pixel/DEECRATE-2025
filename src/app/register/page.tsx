'use client'

import { useState } from 'react'
import { ArrowLeft, Mail, Lock, User, Palette, Search, Eye, EyeOff, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<'designer' | 'seeker' | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement registration logic
    console.log('Registration data:', { ...formData, userType })
    
    // Redirect based on user type
    if (userType === 'designer') {
      router.push('/designer-guide')
    } else if (userType === 'seeker') {
      router.push('/client')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => router.push('/')}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali</span>
        </button>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                DeeCrate
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Bergabung dengan DeeCrate
            </h1>
            <p className="text-gray-600">
              Buat akun Anda dan mulai perjalanan kreatif Anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Pilih peran Anda:
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType('designer')}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    userType === 'designer' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 hover:border-purple-300 bg-white'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      userType === 'designer' ? 'bg-purple-500' : 'bg-gray-100'
                    }`}>
                      <Palette className={`w-8 h-8 ${userType === 'designer' ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">Desainer</h3>
                      <p className="text-sm text-gray-600">Saya ingin menampilkan karya dan mendapatkan proyek</p>
                    </div>
                    {userType === 'designer' && (
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setUserType('seeker')}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    userType === 'seeker' 
                      ? 'border-pink-500 bg-pink-50' 
                      : 'border-gray-200 hover:border-pink-300 bg-white'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      userType === 'seeker' ? 'bg-pink-500' : 'bg-gray-100'
                    }`}>
                      <Search className={`w-8 h-8 ${userType === 'seeker' ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">Pencari Desain</h3>
                      <p className="text-sm text-gray-600">Saya ingin mencari desainer berbakat</p>
                    </div>
                    {userType === 'seeker' && (
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="nama@email.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Minimal 8 karakter"
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!userType}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                userType 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Daftar Sekarang
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Sudah memiliki akun?{' '}
              <button 
                onClick={() => router.push('/login')}
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Masuk di sini
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}