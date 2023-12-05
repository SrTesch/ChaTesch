'use client';
import React from "react";

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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

export default function Form(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
        InputLabelProps={{
          style: {
            color: '#8a4fff',
          },
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Senha"
        name="password"
        type="password"
        autoComplete="password"
        autoFocus
        InputLabelProps={{
          style: {
            color: '#8a4fff',
          },
        }}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="secondary" />}
        label="Lembrar de mim por 7 dias"
        className="text-purple-700"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="w-1/1 bg-purple-700 text-white hover:bg-purple-500"
      >
        Entrar
      </Button>
      <Grid container>
        <Grid item>
          <Link href="/register" variant="body2" className="text-purple-700 no-underline hover:underline transition duration-100">
            {"Não tem conta? Cadatre-se"}
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  )
}