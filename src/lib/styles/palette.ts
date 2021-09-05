export const black = '#000000'
export const bg = '#F8F8F8'
export const white = '#FFFFFF'
export const brandColor = '#6D3DF6'
export const solid = {
  primary: '#00B1D8',
  lightBlue: '#ebfafd',
  deepSkyBlue: '#3AC8E8',
  secondary: '#EFECF8',
  storke: '#C9B8F8',
  grey: '#DEDEE2',
  dark: '#282828',
  error: '#FF4038',
}

export const buttonColorMap: {
  [color: string]: {
    background: string
    color: string
    hoverBackground: string
  }
} = {
  primary: {
    background: solid.primary,
    color: 'white',
    hoverBackground: solid.lightBlue,
  },
  lightBlue: {
    background: solid.lightBlue,
    color: solid.primary,
    hoverBackground: solid.primary,
  },
  deepSkyBlue: {
    background: solid.deepSkyBlue,
    color: 'white',
    hoverBackground: solid.primary,
  },
  secondary: {
    background: solid.secondary,
    color: solid.dark,
    hoverBackground: solid.secondary,
  },
}

export default { black, white, bg, solid, brandColor }
