import { createTheme, ThemeProvider } from '@material-ui/core';
import { useMemo } from 'react';

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
                light : 'rgb(157, 203, 234)',
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
