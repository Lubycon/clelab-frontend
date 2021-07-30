import { fetcher } from 'lib/api/fetch'
import useSWR from 'swr'

const key = (courseSlug: string, sectionSlug: string) =>
  `v2/courses/${courseSlug}/sections/${sectionSlug}`

export default function useSectionDetail(
  courseSlug: string,
  sectionSlug: string,
) {
  return useSWR<SectionDetail>(
    courseSlug && sectionSlug ? key(courseSlug, sectionSlug) : null,
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
