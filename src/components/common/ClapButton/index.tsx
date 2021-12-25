import React, { FC, useCallback, useState } from 'react'

import { put } from '../../../lib/api/client'
import { Medium } from './templates/Medium'

const templates = {
  Medium,
}

type ClabResult = {
  id: string
  title: string
  link: string
  clelabPick: boolean
  clapCount: number
}

export interface ClapButtonTemplateComponentProps {
  isLoading: boolean
  userClaps: number | undefined
  totalClaps: number | undefined
  handlePress: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  isCounterVisible: boolean
}

export interface ClapButtonProps {
  id?: string
  blogId: number
  hideCounterIfLessThan?: number
  onLoad?: () => void
  onPress?: () => void
  children?: (
    props: ClapButtonTemplateComponentProps,
  ) => React.ReactElement<any, any> | null
  component?: React.ComponentType<ClapButtonTemplateComponentProps>
}

type FCWithTemplates<Props> = FC<Props> & {
  templates: {
    Medium: React.ComponentType<ClapButtonTemplateComponentProps>
  }
}

const ClapButton: FCWithTemplates<ClapButtonProps> = ({
  blogId,
  children,
  component,
}) => {
  const [response, setResponse] = useState<number>(0)
  const handlePress = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      try {
        const response = await put<ClabResult>(`/blogs/${blogId}/clap`)
        setResponse(response.clapCount)
      } catch (error) {
        throw error
      }
    },
    [setResponse, blogId],
  )

  let isCounterVisible = true

  const props = {
    isLoading: true,
    blogId,
    totalClaps: (response && response) || 0,
    userClaps: (response && response) || 0,
    handlePress,
    isCounterVisible,
  }

  if (children) {
    return children(props)
  }

  const Component = component || ClapButton

  return <Component {...props} />
}

ClapButton.templates = templates

export { ClapButton }
