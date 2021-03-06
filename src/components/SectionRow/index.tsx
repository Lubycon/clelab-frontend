import { css } from '@emotion/react'
import Text from 'components/common/Text'
import media from 'lib/styles/media'
import palette from 'lib/styles/palette'

export type SectionRowProps = {
  title: string
  description?: string
}

function SectionRow({ title, description }: SectionRowProps) {
  return (
    <article css={rowStyle}>
      <Text as="header" css={titleWrapperStyle}>
        {title}
      </Text>
      {description && (
        <Text
          as="p"
          css={descriptionStyle}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </article>
  )
}

const rowStyle = css`
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0 12px;

  ${media.small} {
    margin: 12px 0;
  }
`

const titleWrapperStyle = css`
  flex-shrink: 0;

  ${media.small} {
    margin-bottom: 8px;
  }
`
const descriptionStyle = css`
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  line-height: 24px;
  text-align: left;
  color: #545454;
  white-space: pre-line;

  a {
    color: ${palette.brandColor};
    text-decoration: underline;
  }
`

export default SectionRow
