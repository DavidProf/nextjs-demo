import React from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import Home from './index'

export const NotFound: React.FC = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <>
            <Home />
            <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
                onClose={() => setOpen(false)}
                message="Page not found, we redirect you!"
            >
                <SnackbarContent
                    style={{ background: '#f44336', color: 'whitesmoke' }}
                    message="Page not found, we redirect you!"
                />
            </Snackbar>
        </>
    )
}

export default NotFound
