import { fetcher } from 'lib/api/fetch'
import useSWR from 'swr'

const key = 'curriculums'

export default function useGetCourse() {
  return useSWR<Course[]>(key, fetcher, {suspense: true})
}

export interface Course {
  id: number
  title: string
  description: string
  thumbnail: string
  urlSlug: string
}
