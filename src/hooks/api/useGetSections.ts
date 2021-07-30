import { fetcher } from 'lib/api/fetch'
import useSWR from 'swr'

const key = (name: string) => `v2/courses/${name}/sections`

export default function useGetSections(name: string) {
  return useSWR<SectionList>(name ? key(name) : null, fetcher)
}

export interface SectionList {
  curriculum: {
    id: number
    title: string
  }
  intro: Intro
  sections: SectionItem[]
  thumbnail: string
}

export interface Intro {
  description: Description
  majorCompany: MajorCompany
  googleTrend: GoogleTrend
  stackOverflowTrend: StackOverflowTrend
  statistics: Statistic[]
}

export interface StackOverflowTrend {
  title: string
  description: string
  imagePath: string
}

export interface Description {
  footer: string
  header: string
  subSummary: string
  summary: string
}

export interface SectionItem {
  id: number
  title: string
  order: number
  urlSlug: string
}

export interface MajorCompany {
  title: string
  companies: {
    naver: boolean
    kakao: boolean
    line: boolean
    coupang: boolean
    woowabros: boolean
    toss: boolean
    daangn: boolean
    yanolja: boolean
  }
}

export interface Statistic {
  title: string
  description: string
  values: StatisticValue[]
}

export interface StatisticValue {
  keyword: string
  value: string
  courseTopic: boolean
}

export interface GoogleTrend {
  title: string
  csvHtml: string
}
