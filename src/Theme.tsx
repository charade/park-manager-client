import { createTheme, ThemeProvider } from '@material-ui/core';
import { useMemo } from 'react';
/**
 * lighterblue 'rgb(157, 203, 234)' 
 */
type ThemeProps = {
    children : React.ReactNode
};

export const Theme = ({ children } : ThemeProps) => {

    const theme = useMemo(() => createTheme({
        typography : {
            fontFamily : 'Archivo'
        },
        palette : {
            primary : {
                main : 'rgb(64, 85, 136)',
                light : 'rgba(128, 179, 244, .3)',
            },
            secondary : {
                main : 'rgb(243, 242, 239)',
                light : '#fff'
            },
        }
    }),[])

    return(
        <ThemeProvider theme = { theme }>
            { children }
        </ThemeProvider>
    )
}
