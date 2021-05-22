const { env } = process
export const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: 'clelab',
  storageBucket: env.FIREBASE_STORAGE_BUCKET_HOST,
  messagingSenderId: env.FIREBASE_MESSAGE_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
}
