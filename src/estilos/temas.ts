import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
    colors: {
        gray: {
            300: '#E1E1E6'                   
        },
        blue: {
            500: '#339CFF',
            800: '#0B3B60'
        },
        white: '#FFF',
        black: '#000'
    },
    fontSizes: {
       xs: 12,
       sm: 14,
       md: 16,
       lg: 20,
    },
})