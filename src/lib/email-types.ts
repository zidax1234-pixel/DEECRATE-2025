// Email notification types
export interface EmailNotificationData {
  type: 'purchase' | 'designer' | 'client'
  purchaseData: {
    clientData: {
      name: string
      email: string
      phone: string
    }
    designerData: {
      name: string
      email: string
      totalSales: number
      totalEarnings: number
      averageRating: number
    }
    designData: {
      title: string
      fileName: string
      fileFormat: string
      fileSize: string
      description: string
    }
    transactionData: {
      transactionId: string
      price: number
      purchaseDate: string
      paymentMethod: string
      downloadLink: string
      licenseExpiry: string
      downloadCount: number
    }
  }
}

// Mock email service untuk development
export const mockEmailService = {
  sendPurchaseNotification: async (data: EmailNotificationData) => {
    console.log('📧 Email pembelian terkirim ke:', data.purchaseData.clientData.email)
    console.log('Detail pembelian:', data.purchaseData)
    console.log('Info desainer:', data.designerData)
    console.log('Info client:', data.purchaseData.clientData)
    return { success: true, messageId: `PURCHASE_${Date.now()}` }
  },
  
  sendDesignerNotification: async (data: EmailNotificationData) => {
    console.log('📧 Email notifikasi desainer terkirim ke:', data.designerData.email)
    console.log('Detail penjualan:', data.purchaseData)
    console.log('Update statistik:', data.designerData)
    return { success: true, messageId: `SALE_${Date.now()}` }
  },
  
  sendClientNotification: async (data: EmailNotificationData) => {
    console.log('📧 Email notifikasi client terkirim ke:', data.purchaseData.clientData.email)
    console.log('Detail pembelian:', data.purchaseData)
    console.log('Info desain:', data.purchaseData.designData)
    return { success: true, messageId: `CLIENT_${Date.now()}` }
  },
  
  sendFileReadyNotification: async (data: EmailNotificationData) => {
    console.log('📧 Email notifikasi siap diunduh terkirim ke:', data.purchaseData.clientData.email)
    console.log('Detail file:', data.purchaseData.designData)
    console.log('Link unduh:', data.purchaseData.transactionData.downloadLink)
    return { success: true, messageId: `READY_${Date.now()}` }
  }
}