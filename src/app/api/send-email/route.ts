import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { purchaseData, designerData, clientData } = await request.json()

    // Email template untuk notifikasi pembelian
    const emailSubject = `DeeCrate - Pembelian Desain Berhasil: ${purchaseData.designTitle}`
    
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DeeCrate - Konfirmasi Pembelian</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 40px;
            text-align: center;
            border-radius: 12px 12px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .header p {
            margin: 10px 0 0;
            font-size: 16px;
            opacity: 0.9;
          }
          .content {
            padding: 40px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section h2 {
            color: #667eea;
            font-size: 20px;
            margin-bottom: 15px;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
          }
          .purchase-details {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e9ecef;
          }
          .detail-label {
            font-weight: 600;
            color: #495057;
            font-size: 14px;
          }
          .detail-value {
            font-weight: 700;
            color: #333;
            font-size: 16px;
          }
          .designer-info {
            background-color: #e9ecef;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
          }
          .footer {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            margin-top: 20px;
          }
          .footer p {
            margin: 0;
            font-size: 14px;
            color: #6c757d;
          }
          .cta-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            display: inline-block;
            margin-top: 20px;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }
          .social-links {
            margin-top: 20px;
            text-align: center;
          }
          .social-links a {
            color: #667eea;
            text-decoration: none;
            margin: 0 10px;
            font-weight: 500;
          }
          .social-links a:hover {
            text-decoration: underline;
          }
          .watermark {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #999;
            border-top: 1px solid #e9ecef;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎨 Pembelian Berhasil!</h1>
            <p>Terima kasih telah mempercayai DeeCrate</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h2>📋 Detail Pembelian</h2>
              <div class="purchase-details">
                <div class="detail-row">
                  <span class="detail-label">ID Transaksi:</span>
                  <span class="detail-value">${purchaseData.transactionId}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Judul Desain:</span>
                  <span class="detail-value">${purchaseData.designTitle}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Harga:</span>
                  <span class="detail-value">Rp ${purchaseData.price.toLocaleString('id-ID')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Tanggal Pembelian:</span>
                  <span class="detail-value">${new Date(purchaseData.purchaseDate).toLocaleString('id-ID')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Metode Pembayaran:</span>
                  <span class="detail-value">${purchaseData.paymentMethod}</span>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>👤 Informasi Desainer</h2>
              <div class="designer-info">
                <div class="detail-row">
                  <span class="detail-label">Nama Desainer:</span>
                  <span class="detail-value">${designerData.name}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span>
                  <span class="detail-value">${designerData.email}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Rating:</span>
                  <span class="detail-value">⭐ ${designerData.rating}/5.0</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Total Penjualan:</span>
                  <span class="detail-value">${designerData.totalSales} desain</span>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>📧 Informasi Pembeli</h2>
              <div class="purchase-details">
                <div class="detail-row">
                  <span class="detail-label">Nama:</span>
                  <span class="detail-value">${clientData.name}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span>
                  <span class="detail-value">${clientData.email}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">No. Telepon:</span>
                  <span class="detail-value">${clientData.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="footer">
            <p><strong>🎉 Selamat!</strong> Desain "${purchaseData.designTitle}" sekarang milik Anda.</p>
            <p>File desain akan segera dikirim ke email Anda.</p>
            <a href="#" class="cta-button">Unduh File Desain</a>
            
            <div class="social-links">
              <p>Ikuti kami:</p>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div class="watermark">
            <p>© 2024 DeeCrate - Platform Desain Indonesia</p>
            <p>Email ini dikirim otomatis. Jangan membalas email ini.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Simulasi pengiriman email (dalam production, gunakan email service sebenarnya)
    console.log('Email terkirim ke:', clientData.email)
    console.log('Detail pembelian:', purchaseData)
    console.log('Info desainer:', designerData)
    console.log('Info client:', clientData)

    return NextResponse.json({ 
      success: true,
      message: 'Email notifikasi berhasil dikirim',
      emailSent: true,
      recipient: clientData.email,
      subject: emailSubject
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ 
      success: false,
      message: 'Gagal mengirim email notifikasi',
      error: error.message
    }, { status: 500 })
  }
}