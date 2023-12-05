import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { Paper } from '@mui/material';
// const defaultTheme = createTheme();
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/srTesch">
                TescDev
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp() {

    const Form = dynamic(() => import('../../components/formRegister'), { ssr: false });

    return (
        <Box component="main" sx={{ height: '100vh', width: '100%' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    display: "flex",
                    alignItems: "center"
                }}>

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ margin: "auto", width: "40%", padding: '50px', borderRadius: "12px"}}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className='text-black'>
                        Cadastre-se
                    </Typography>
                    <Form />
                    <Copyright sx={{ mt: 5 }} />
                </Grid>
            </Grid>
        </Box >
    );
}