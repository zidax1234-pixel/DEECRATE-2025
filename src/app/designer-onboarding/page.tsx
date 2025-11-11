'use client'

import { useState } from 'react'
import { ArrowLeft, Upload, User, Calendar, MapPin, Linkedin, Camera, Check, AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function DesignerOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Data
    fullName: '',
    birthDate: '',
    birthPlace: '',
    phone: '',
    address: '',
    bio: '',
    
    // Documents
    ktpImage: null as File | null,
    linkedinUrl: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value})
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({...errors, [field]: ''})
    }
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData({...formData, [field]: file})
    if (errors[field]) {
      setErrors({...errors, [field]: ''})
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      // Personal Data Validation
      if (!formData.fullName.trim()) newErrors.fullName = 'Nama lengkap harus diisi'
      if (!formData.birthDate) newErrors.birthDate = 'Tanggal lahir harus diisi'
      if (!formData.birthPlace.trim()) newErrors.birthPlace = 'Tempat lahir harus diisi'
      if (!formData.phone.trim()) newErrors.phone = 'Nomor telepon harus diisi'
      if (!formData.address.trim()) newErrors.address = 'Alamat harus diisi'
      if (!formData.bio.trim()) newErrors.bio = 'Bio harus diisi'
    }

    if (step === 2) {
      // Documents Validation
      if (!formData.ktpImage) newErrors.ktpImage = 'Foto KTP harus diupload'
      if (!formData.linkedinUrl.trim()) newErrors.linkedinUrl = 'URL LinkedIn harus diisi'
      else if (!formData.linkedinUrl.includes('linkedin.com')) {
        newErrors.linkedinUrl = 'URL LinkedIn tidak valid'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (validateStep(2)) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        console.log('Onboarding data:', formData)
        setIsSubmitting(false)
        // Redirect to designer dashboard
        router.push('/designer')
      }, 2000)
    }
  }

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {[1, 2].map((step) => (
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
            {step < 2 && (
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
        <span>Data Diri</span>
        <span>Dokumen</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/register')}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali</span>
          </button>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                DeeCrate Designer
              </span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Lengkapi Profil Desainer</h1>
          </div>
          <div className="w-20"></div>
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Form Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
          {/* Step 1: Personal Data */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Diri Pribadi</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="08xx-xxxx-xxxx"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tempat Lahir *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.birthPlace}
                      onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.birthPlace ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Kota, Provinsi"
                    />
                  </div>
                  {errors.birthPlace && (
                    <p className="text-xs text-red-500 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.birthPlace}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Lahir *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.birthDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.birthDate && (
                    <p className="text-xs text-red-500 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.birthDate}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap *
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  rows={3}
                  placeholder="Masukkan alamat lengkap Anda"
                />
                {errors.address && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.address}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio / Deskripsi Diri *
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.bio ? 'border-red-500' : 'border-gray-300'
                  }`}
                  rows={4}
                  placeholder="Ceritakan tentang diri Anda, pengalaman, dan gaya desain Anda..."
                />
                {errors.bio && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Documents */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dokumen Verifikasi</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Foto KTP *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange('ktpImage', e.target.files?.[0] || null)}
                    className="hidden"
                    id="ktp-upload"
                  />
                  <label htmlFor="ktp-upload" className="cursor-pointer">
                    {formData.ktpImage ? (
                      <div className="space-y-4">
                        <div className="w-32 h-20 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm text-green-600 font-medium">
                          {formData.ktpImage.name}
                        </p>
                        <p className="text-xs text-gray-500">Klik untuk mengganti</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-gray-700 font-medium">Upload Foto KTP</p>
                          <p className="text-sm text-gray-500">PNG, JPG, PDF (Max 5MB)</p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
                {errors.ktpImage && (
                  <p className="text-xs text-red-500 mt-2 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.ktpImage}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Akun LinkedIn *
                </label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-600" />
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      errors.linkedinUrl ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                {errors.linkedinUrl && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.linkedinUrl}
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Masukkan URL profil LinkedIn Anda untuk verifikasi profesional
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Sebelumnya
            </button>

            {currentStep < 2 ? (
              <button
                onClick={handleNext}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Selanjutnya
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-purple-700 hover:to-pink-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Menyimpan...' : 'Selesai & Masuk ke Dashboard'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}