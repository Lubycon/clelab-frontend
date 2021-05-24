export const black = '#000000'
export const bg = '#F8F8F8'
export const white = '#FFFFFF'
export const solid = {
  primary: '#00B1D8',
  lightBlue: '#ebfafd',
  deepSkyBlue: '#3AC8E8',
  secondary: '#D9DAE2',
  dark: '#282828',
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
    hoverBackground: solid.primary,
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

export default { black, white, bg, solid }
