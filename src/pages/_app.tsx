import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import {
    createMuiTheme,
    MuiThemeProvider,
    CssBaseline,
    colors,
    Toolbar,
    AppBar,
    Grid
} from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: colors.blue[500]
        },
        secondary: {
            main: colors.blue[900]
        }
    },
    overrides: {
        MuiContainer: {
            root: {
                paddingTop: 50,
                paddingBottom: 80
            }
        }
    }
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Game Assets Generator</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
                <AppBar position="fixed" color="secondary">
                    <Toolbar variant="dense">
                        <Grid container justify="center" spacing={2}>
                            NextJS Demo
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        </>
    )
}

export default MyApp
