const fallbackFonts = [
  'DSiOSsubset',
  '-apple-system',
  'BlinkMacSystemFont',
  'Basier Square',
  'Apple SD Gothic Neo',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]
export const getFontFamilyWithFallbackFont = (fontNames: string[]) => {
  return `${fontNames.join(',')}, ${fallbackFonts.join(',')}`
}

export const getKoreanUnicodeRange = () => {
  return 'U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF'
}
