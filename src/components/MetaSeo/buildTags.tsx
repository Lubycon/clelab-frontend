import { ReactNodeArray } from 'react'

import { MetaSeoProps } from './types'

function buildTags(config: MetaSeoProps) {
  const tagsToRender: ReactNodeArray = []

  if (config.openGraph?.title) {
    tagsToRender.push(
      <meta key="og:title" name="og:title" content={config.openGraph?.title} />,
    )
  }

  if (config.openGraph?.description) {
    tagsToRender.push(
      <meta
        key="og:description"
        name="og:description"
        content={config.openGraph?.description}
      />,
    )
  }

  if (config.openGraph?.image) {
    tagsToRender.push(
      <meta key="og:image" name="og:image" content={config.openGraph?.image} />,
    )
  }

  console.log(tagsToRender)

  return tagsToRender
}

export default buildTags
