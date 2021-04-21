import { css } from '@emotion/react'

import useRequest from '../hooks/useRequest'

/* sample code for useRequest test */
type swrExample = {
  id: string
  node_id: string
  private: string
  name: string
  full_name: string
}

const IndexPage = () => {
  const { data, error } = useRequest<swrExample>({
    url: 'https://api.github.com/repos/vercel/swr',
  })

  if (error) return null
  if (!data) return 'Loading'

  return <h1 css={style}>{data.name}</h1>
}

const style = css`
  color: red;
`
export default IndexPage
