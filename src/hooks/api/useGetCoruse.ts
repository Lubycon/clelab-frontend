import useSWR from 'swr'

import { fetcher } from '../../lib/api/fetch'

const key = 'curriculums'

export default function useGetCourse() {
  return useSWR<Course[]>(key, fetcher)
}

export interface Course {
  id: number
  title: string
  description: string
  thumbnail: string
}
