import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const interceptorsRequestFulfilled = (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      Authorization: 'Bearer TOKEN',
    },
  }
}

const interceptorsResponseFulfilled = (res: AxiosResponse) => {
  if (res.status >= 200 && res.status < 300) {
    return res.data
  }

  console.log(res)

  return Promise.reject(res.data)
}

const interceptorsResponseRejected = (error: AxiosError) => {
  if (error.response?.data?.message != null) {
    return { message: error.response?.data?.message }
  }

  console.log(error)

  return Promise.reject(new Error(error.response?.data?.message ?? error))
}

instance.interceptors.request.use(interceptorsRequestFulfilled)
instance.interceptors.response.use(
  interceptorsResponseFulfilled,
  interceptorsResponseRejected,
)

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
