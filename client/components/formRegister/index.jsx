'use client';
import React from "react";

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from "react";

export default function Form(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleBlur =  () => {
        setPasswordsMatch(password === confirmPassword);
    };

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-name"
                        name="usuario"
                        required
                        fullWidth
                        id="usuario"
                        label="Usuário"
                        autoFocus
                        InputLabelProps={{
                            style: {
                                color: '#8a4fff',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputLabelProps={{
                            style: {
                                color: '#8a4fff',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Senha"
                        type="password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        onChange={e=>{setPassword(e.target.value); handleBlur();}}
                        InputLabelProps={{
                            style: {
                                color: '#8a4fff',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Confirmar Senha"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        onChange={e=>{setConfirmPassword(e.target.value);handleBlur();}}
                        onBlur={handleBlur}
                        InputLabelProps={{
                            style: {
                                color: '#8a4fff',
                            },
                        }}
                    />/
                    {!passwordsMatch && (
                        <span style={{ color: 'red' }}>As senhas não coincidem.</span>
                    )}
                </Grid>

            </Grid>
            {passwordsMatch && (<Button
                type="submit"
                fullWidth
                variant="contained"
                className="w-1/1 bg-purple-700 text-white hover:bg-purple-500"

            >
                Registrar-se
            </Button>)}
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2" className="text-purple-700 no-underline hover:underline transition duration-100">
                        Ja tem uma conta? Entrar
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}