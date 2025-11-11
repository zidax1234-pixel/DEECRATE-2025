// Utility function untuk mengirim email notifikasi
export const sendEmailNotification = async (emailData: {
  to: string
  subject: string
  htmlContent: string
}) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: emailData.email,
        subject: emailData.subject,
        htmlContent: htmlContent,
        // Additional data for email template
        purchaseData: emailData.purchaseData,
        designerData: emailData.designerData,
        clientData: emailData.clientData,
        designData: emailData.designData
      }),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: error.message }
  }
}

// Mock email service untuk development
export const mockEmailService = {
  sendPurchaseNotification: async (data: any) => {
    console.log('📧 Email pembelian terkirim ke:', data.clientData.email)
    console.log('Detail:', data)
    return { success: true }
  },
  sendDesignerNotification: async (data: any) => {
    console.log('📧 Email notifikasi desainer terkirim ke:', data.designerData.email)
    console.log('Detail:', data)
    return { success: true }
  },
  sendClientNotification: async (data: any) => {
    console.log('📧 Email notifikasi client terkirim ke:', data.clientData.email)
    console.log('Detail:', data)
    return { success: true }
  }
}