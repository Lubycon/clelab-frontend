import { post } from '../../lib/api/client'

export async function subscribeEmail(email: string) {
  const response = await post<EmailSubscribeResult>('/subscribe', {
    email,
  })

  return response
}

type EmailSubscribeResult = {
  email: string
  message?: string
}
