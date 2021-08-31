export function getPaviconUrl(url: string) {
  const arr = url.split('/') + 'favicon.ico'

  return arr[0] + '//' + arr[2]
}
