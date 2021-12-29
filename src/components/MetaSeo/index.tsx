import buildTags from './buildTags'
import { MetaSeoProps } from './types'

function MetaSeo({ openGraph }: MetaSeoProps) {
  return <>{buildTags({ openGraph })}</>
}

export default MetaSeo
