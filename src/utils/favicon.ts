export function getFaviconUrl(url: string) {
  const arr = url.split('/')

  return arr[0] + '//' + arr[2] + '/favicon.ico'
}
