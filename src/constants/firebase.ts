import { FirebaseConfig } from '@lubycon/utils'

import { isProduction } from './env'

export const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '',
  projectId: isProduction ? 'clelab' : 'logger-library-test',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_HOST ?? '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID ?? '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '',
}
