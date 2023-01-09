import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'


const styles = {
    global: props => ({
        body: {
            bg: mode('#FFFCF7', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                fontSize: 24,
                fontFamily: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 10
            },
            'gradient':{
                    fontSize: '20px',
                    background: '-webkit-linear-gradient(#eee, #333)',
                    webkitBackgroundClip: 'text',
                    webkitTextFillColor: 'transparent'
            }
        },
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    },
    div: {
        variants: {
            'atomic-landing': {
                marginTop: '100px',
            }
        }
    }
}

/* const fonts = {
    heading: "'M PLUS Rounded 1c'"
} */

const colors = {
    glassTeal: '#2FCCEC'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
/*     fonts */
})

export default theme
