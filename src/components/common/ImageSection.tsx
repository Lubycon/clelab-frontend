import { css } from '@emotion/react'

export interface ImageSectionProps {
  widthRatio: number
  heightRatio: number
  src: string
  alt?: string
  className?: string
}

function ImageSection({
  widthRatio,
  heightRatio,
  src,
  alt,
  className,
}: ImageSectionProps) {
  const paddingTop = `${(heightRatio / widthRatio) * 100}%`

  return (
    <div
      css={imageBlockStyle}
      style={{
        paddingTop,
      }}
      className={className}
    >
      <img src={src} alt={alt} />
    </div>
  )
}

const imageBlockStyle = css`
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`

export default ImageSection
