import React from 'react'
import Link from 'next/link'
import { Container, Grid, Button } from '@material-ui/core'

export const Home: React.FC = () => {
    return (
        <>
            <Container maxWidth="lg" data-testid="any">
                <Grid container justify="space-between" spacing={2}>
                    <Grid item xs={12}>
                        <Link href="/" shallow={true}>
                            <Button>Test</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
                <Grid item xs={12}></Grid>
            </Container>
        </>
    )
}

export default Home
