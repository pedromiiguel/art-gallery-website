export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  font: {
    light: 300,
    bold: 900,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
      xhuge: '8rem'
    },
    heading: 'Big Shoulders Display'
  },
  colors: {
    primary: '#D5966C',
    black: '#151515 ',
    gray: '#444444',
    white: '#FFFFFF'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '8rem'
  },
  layers: {
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out'
  }
} as const;
