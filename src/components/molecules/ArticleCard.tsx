import { css } from '@emotion/react'
import Text from 'components/atoms/Text'
import { mediaQuery } from 'lib/styles/media'
import palette from 'lib/styles/palette'
import { ReactNode, SyntheticEvent, useCallback } from 'react'
import { getFaviconUrl } from 'utils/favicon'

import AnimationItem from '../atoms/AnimationItem'

export interface ArticleCardProps {
  title: string
  link: string
  blogId: number
  writer?: string
  count: number
  badge?: ReactNode
  onClick: () => void
}

function ArticleCard({
  title,
  link,
  blogId,
  onClick,
  writer,
  badge,
}: ArticleCardProps) {
  const handleClick = useCallback(() => {
    onClick()
    window.open(link)
  }, [link, onClick])

  return (
    <>
      <div css={articleCardStyle}>
        {badge}
        <Text as="h6" css={articleTitleStyle} onClick={handleClick}>
          {title}
        </Text>
        <div css={articleFooterStyle}>
          <div css={blogInfo}>
            <img
              src={getFaviconUrl(link)}
              onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
                (e.currentTarget.src = '/images/default_profile.png')
              }
              alt="favicon-img"
            />
            <Text style={{ fontSize: '13px', marginLeft: '10px' }}>
              {writer}
            </Text>
          </div>
          <AnimationItem blogId={blogId} />
        </div>
      </div>
    </>
  )
}

const articleCardStyle = css`
  width: 320px;
  background-color: ${palette.white};
  border: 1px solid ${palette.solid.grey};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px 24px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* :hover {
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 2px 4px 24px rgba(0, 0, 0, 0.1);
  }

  :active {
    border: 1px solid ${palette.brandColor};
  } */
  ${mediaQuery(1440)} {
    width: calc(50% - 32px);
  }

  ${mediaQuery(767)} {
    width: 100%;
    margin: 12px 0;
  }
`

const articleTitleStyle = css`
  display: -webkit-box;
  width: 276px;
  height: 52px;
  font-size: 16px;
  line-height: 26px;
  color: ${palette.black};
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 30px;

  ${mediaQuery(1024)} {
    width: 100%;
  }
`

const articleFooterStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const blogInfo = css`
  display: flex;
  align-items: center;
  width: 100%;

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
`

export default ArticleCard
