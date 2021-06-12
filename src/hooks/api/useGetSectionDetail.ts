import { fetcher } from 'lib/api/fetch'
import useSWR from 'swr'

const key = (id: string, sectionId: string) =>
  `v2/curriculums/${id}/sections/${sectionId}`

export default function useSectionDetail(id: string, sectionId: string) {
  return useSWR<SectionDetail>(
    id && sectionId ? key(id, sectionId) : null,
    fetcher,
  )
}

export interface SectionDetail {
  title: string
  order: number
  description: string
  blogs: Blog[]
  nextSection: Section
  prevSection: Section
}

export interface Blog {
  title: string
  link: string
}

export interface Section {
  title: string
  id: number
}
