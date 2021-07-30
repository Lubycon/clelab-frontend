import { FirebaseConfig } from '@lubycon/logger'

import { isProduction } from './env'

export const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? '123123',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? '1231231',
  projectId: isProduction ? 'clelab' : 'logger-library-test',
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_HOST ?? '123123',
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID ?? '123123',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? '123123',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? '12312312',
}
