import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const onRequestFulfilled = (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      Authorization: 'Bearer TOKEN',
    },
  }
}

const onResponseFulfilled = (res: AxiosResponse) => {
  if (res.data.result === 'SUCCESS') {
    return res.data.data
  }

  return Promise.reject(res.data)
}

const onResponseRejected = (error: AxiosError) => {
  if (error.response?.data?.message != null) {
    return Promise.reject(new Error(error.response.data.message))
  }

  return Promise.reject(error)
}

instance.interceptors.request.use(onRequestFulfilled)
instance.interceptors.response.use(onResponseFulfilled, onResponseRejected)

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args)
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args)
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args)
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args)
}
