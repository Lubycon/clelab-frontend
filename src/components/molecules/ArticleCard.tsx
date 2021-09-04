import { css } from '@emotion/react'
import Text from 'components/atoms/Text'
import { mediaQuery } from 'lib/styles/media'
import palette from 'lib/styles/palette'
import { SyntheticEvent, useCallback } from 'react'
import { getPaviconUrl } from 'utils/favicon'

export interface ArticleCardProps {
  title: string
  link: string
  writer?: string
  onClick: () => void
}
function ArticleCard({ title, link, onClick, writer }: ArticleCardProps) {
  const handleClick = useCallback(() => {
    onClick()
    window.open(link)
  }, [link, onClick])

  return (
    <div css={ArticleCardStyle} onClick={handleClick}>
      <Text as="h6" css={ArticleTitleStyle}>
        {title}
      </Text>
      <div css={ArticleFooterStyle}>
        <div css={BlogInfo}>
          <img
            src={getPaviconUrl(link)}
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
              (e.currentTarget.src = '/images/default_profile.png')
            }
            alt=""
          />
          <Text style={{ fontSize: '13px', marginLeft: '10px' }}>{writer}</Text>
        </div>
        {/* <Icon name="applaud_off" /> */}
      </div>
    </div>
  )
}

const ArticleCardStyle = css`
  width: 320px;
  background-color: ${palette.white};
  border: 1px solid ${palette.solid.grey};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 24px 20px;
  margin: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 2px 4px 24px rgba(0, 0, 0, 0.1);
  :hover {
    cursor: pointer;
  }
  ${mediaQuery(1440)} {
    width: calc(50% - 32px);
  }

  ${mediaQuery(767)} {
    width: 100%;
  }
`

const ArticleTitleStyle = css`
  display: -webkit-box;
  width: 276px;
  height: 52px;
  font-size: 16px;
  line-height: 26px;
  color: ${palette.black};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;

  ${mediaQuery(1024)} {
    width: 100%;
  }
`

const ArticleFooterStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BlogInfo = css`
  display: flex;
  align-items: center;

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
`

export default ArticleCard
