import { css } from '@emotion/react'
import CompanyItem from 'components/atoms/CompanyItem'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'
import { MajorCompany } from 'hooks/api/useGetSections'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

interface MajorCompanyProps {
  majorCompany: MajorCompany
}

function MajorCompanyList({ majorCompany }: MajorCompanyProps) {
  const { title, companies } = majorCompany

  return (
    <div css={wrapper}>
      <Text css={titleStyle}>{title}</Text>
      <div css={companyListStyle}>
        <CompanyItem company="naver" isActive={companies.naver} />
        <CompanyItem company="kakao" isActive={companies.kakao} />
        <CompanyItem company="line" isActive={companies.line} />
        <CompanyItem company="coupang" isActive={companies.coupang} />
        <CompanyItem company="woowabros" isActive={companies.woowabros} />
        <CompanyItem company="toss" isActive={companies.toss} />
        <CompanyItem company="daangn" isActive={companies.daangn} />
        <CompanyItem company="yanolja" isActive={companies.yanolja} />
      </div>
      <div css={activeSkillWrapper}>
        <div css={activeSkillStyle(true)}>
          <Icon name="square" />
          <Text>사용중</Text>
        </div>
        <div css={activeSkillStyle()}>
          <Icon name="square" />
          <Text>미사용</Text>
        </div>
      </div>
    </div>
  )
}

const wrapper = css`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-right: 16px;
  margin-bottom: 32px;
  ${media.xsmall} {
    width: 324px;
    margin-right: 0;
  }
  ${media.custom(320)} {
    width: 100%;
  }
`

const titleStyle = css`
  color: ${palette.solid.dark};
  font-weight: bold;
`

const companyListStyle = css`
  margin-top: 16px;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 2px solid #d5d5de;
  ${media.msmall} {
    flex: 1;
    width: 100%;
    justify-content: center;
  }
`

const activeSkillWrapper = css`
  margin-top: 16px;
  display: flex;
`

const activeSkillStyle = (isActive?: boolean) => css`
  color: ${isActive ? palette.solid.deepSkyBlue : '#9696A4'};
  margin-right: 16px;
  svg {
    margin-right: 8px;
  }
`
export default MajorCompanyList
