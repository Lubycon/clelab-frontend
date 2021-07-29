import { fetcher } from 'lib/api/fetch'
import useSWR from 'swr'

const key = (name: string, sectionId: string) =>
  `v2/courses/${name}/sections/${sectionId}`

export default function useSectionDetail(name: string, sectionId: string) {
  return useSWR<SectionDetail>(
    name && sectionId ? key(name, sectionId) : null,
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
  thumbnail: string
}

export interface Blog {
  title: string
  link: string
}

export interface Section {
  title: string
  id: number
  urlSlug: string
}
