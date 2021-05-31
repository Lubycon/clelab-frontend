import { css } from '@emotion/react'

import media from '../../lib/styles/media'

export interface CompanyItemProps {
  company: CompanyId
  isActive: boolean
}

export const CompanyId = {
  naver: 'naver',
  kakao: 'kakao',
  line: 'line',
  coupang: 'coupang',
  woowabros: 'woowabros',
  toss: 'toss',
  daangn: 'daangn',
  yanolja: 'yanolja',
} as const

export type CompanyId = typeof CompanyId[keyof typeof CompanyId]
export const CompanyIdTitleName = {
  [CompanyId.naver]: '네',
  [CompanyId.kakao]: '카',
  [CompanyId.line]: '라',
  [CompanyId.coupang]: '쿠',
  [CompanyId.woowabros]: '배',
  [CompanyId.toss]: '토',
  [CompanyId.daangn]: '당',
  [CompanyId.yanolja]: '야',
}

function CompanyItem({ company, isActive = false }: CompanyItemProps) {
  return <div css={companyStyle(isActive)}>{CompanyIdTitleName[company]}</div>
}

const companyStyle = (isActive: boolean) => css`
  font-weight: bold;
  font-size: 36px;
  line-height: 25px;
  color: ${isActive ? '#3AC8E8' : '#D5D5DE'};
  width: 100%;
  ${media.small} {
    font-size: 28px;
  }
  & + * {
    margin-left: 8px;
  }
`

export default CompanyItem
