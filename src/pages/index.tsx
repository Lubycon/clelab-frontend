import { css } from '@emotion/react'

import useSampleFetch from '../hooks/useSample'

const IndexPage = () => {
  const { data, error } = useSampleFetch()
  if (error) return null
  if (!data) return 'Loading'

  return <div css={style}>{data[0].id}</div>
}

const style = css`
  color: red;
`
export default IndexPage
