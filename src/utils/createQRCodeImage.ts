import QRCode from 'qrcode'

export async function createQRCodeImage(secret: string): Promise<string> {
  try {
    return await QRCode.toDataURL(secret)
  } catch (err) {
    throw new Error('Could not create QR code')
  }
}
