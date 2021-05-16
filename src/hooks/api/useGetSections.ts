import useSWR from 'swr'

import { fetcher } from '../../lib/api/fetch'

const key = (id: string) => `curriculums/${id}/sections`

export default function useGetSections(id: string) {
  return useSWR<SectionList>(id ? key(id) : null, fetcher)
}

export interface SectionList {
  curriculum: {
    id: number
    title: string
  }
  intro: {
    summary: string
    description: string
  }
  sections: SectionItem[]
}

export interface SectionItem {
  id: number
  title: string
  order: number
}
