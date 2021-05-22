import firebase from 'firebase/app'

import { isProduction } from '../constants/env'
import { getAmplitudeClient } from './amplitude'

type EventParams = {
  [key: string]: string | boolean | number | undefined
}

interface Params {
  view: string
  action: string
  params?: EventParams
}

const track = async (logName: string, { view, action, params }: Params) => {
  if (isProduction) {
    firebase.analytics().logEvent(logName, {
      view,
      action,
      ...params,
    })

    try {
      const amplitude = await getAmplitudeClient()
      amplitude?.logEvent(logName, {
        view,
        action,
        ...params,
      })
    } catch (e) {
      return
    }
  } else {
    console.table({
      view,
      logName,
      action,
      ...params,
    })
  }
}

const getView = (logger: string) => (params: EventParams = {}) =>
  track(`${logger}_view`, {
    view: logger,
    action: 'view',
    params,
  })

const getClick = (logger: string) => (
  logName: string,
  params: EventParams = {},
) =>
  track(logName, {
    view: logger,
    action: 'click',
    params,
  })

const getImpression = (logger: string) => (
  logName: string,
  params: EventParams = {},
) =>
  track(logName, {
    view: logger,
    action: 'impression',
    params,
  })

const getCustomEvent = (logger: string) => (
  logName: string,
  eventType: string,
  params: EventParams = {},
) =>
  track(logName, {
    view: logger,
    action: eventType,
    params,
  })

export interface Logger {
  view: ReturnType<typeof getView>
  click: ReturnType<typeof getClick>
  impression: ReturnType<typeof getImpression>
  event: ReturnType<typeof getCustomEvent>
}
export const generateLogger = (logger: string): Logger => {
  return {
    view: getView(logger),
    click: getClick(logger),
    impression: getImpression(logger),
    event: getCustomEvent(logger),
  }
}
