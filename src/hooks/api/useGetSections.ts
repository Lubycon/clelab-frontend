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
  intro: Intro
  sections: SectionItem[]
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
