# Cara Memasukkan Gambar di DeeCrate

## 📁 Lokasi Penyimpanan Gambar

### 1. **Static Images (Recommended)**
Simpan gambar di folder: `/home/z/my-project/public/images/`

```
/home/z/my-project/public/images/
├── batik-modern.jpg
├── kpop-typo.jpg
├── climate-change.jpg
├── neon-dreams.jpg
├── wayang-modern.jpg
└── retro-wave.jpg
```

### 2. **Upload via Form**
User bisa upload gambar melalui:
- Designer Onboarding (KTP, Portfolio)
- Designer Dashboard (Upload desain baru)

## 🖼️ Format Gambar yang Didukung

- **JPG/JPEG** - Untuk foto dan desain kompleks
- **PNG** - Untuk gambar dengan transparansi
- **WebP** - Format modern yang lebih ringan
- **SVG** - Untuk vektor dan logo

## 📏 Ukuran yang Direkomendasikan

### **Design Preview:**
- **Ukuran**: 800x600px (4:3 ratio)
- **File size**: Max 2MB
- **Format**: JPG atau PNG

### **Thumbnail:**
- **Ukuran**: 300x200px
- **File size**: Max 500KB
- **Format**: JPG

### **KTP/Documents:**
- **Ukuran**: Max 1200x800px
- **File size**: Max 5MB
- **Format**: JPG atau PDF

## 🔧 Cara Mengganti Gambar

### **Method 1: Static Images**
1. Copy gambar ke `/home/z/my-project/public/images/`
2. Update path di code:
```javascript
image: '/images/nama-gambar.jpg'
```

### **Method 2: URL Eksternal**
```javascript
image: 'https://example.com/gambar.jpg'
```

### **Method 3: Upload Form**
User upload melalui interface yang sudah disediakan

## 🎨 Contoh Gambar yang Bisa Digunakan

### **Indonesia Culture:**
- Batik patterns
- Wayang characters
- Traditional motifs
- Cultural illustrations

### **Pop Culture:**
- K-Pop inspired designs
- Movie posters
- Music album covers
- Trending memes

### **Vocal & Statement:**
- Social justice designs
- Environmental awareness
- Typography quotes
- Protest art

### **Aesthetic & Visual:**
- Neon designs
- Retro/vintage styles
- Minimalist art
- Abstract patterns

## 🚀 Tips untuk Gambar Berkualitas

1. **High Resolution** - Minimal 72dpi untuk web
2. **Proper Compression** - Balance quality vs file size
3. **Consistent Style** - Satu gaya desain per portfolio
4. **Good Lighting** - Untuk foto produk
5. **Clean Background** - Fokus pada subjek

## 📱 Mobile Optimization

- **Responsive Images** - Otomatis menyesuaikan ukuran
- **Lazy Loading** - Load gambar saat needed
- **WebP Format** - Lebih cepat di mobile
- **Alt Text** - Untuk accessibility

## 🔍 Error Handling

Aplikasi sudah memiliki fallback jika gambar gagal load:
- Menampilkan placeholder text
- Tidak broken layout
- User-friendly error message