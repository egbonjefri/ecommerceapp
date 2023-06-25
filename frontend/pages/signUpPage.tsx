import * as React from 'react';
import type { NextPage } from "next";
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from '../styles/signUpPage.module.css'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {getUser} from './api/api';
import { userState } from '@/state/atoms';
import FormHelperText from '@mui/material/FormHelperText';
import {storeTokenInLocalStorage} from '../utils/token'






interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const router = useRouter();
  const [userID, setUserID] = useRecoilState(userState);
  const [user, setUser] = useState<NewUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
     const data = await response.json();
     const newUser = await getUser({email: data.id,token: data.token});
     storeTokenInLocalStorage(data.token);
     setUserID(newUser.data);
     router.push('dashboard')
    } catch (error) {
      const errorMsg = document.getElementById('component-helper-text');
      errorMsg.innerHTML = 'Registration failed, Email must be unique and passwords must contain at least 8 characters';
      errorMsg.style.display = 'flex'

    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Head>
        <title>Sign Up</title>
      </Head>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#151875' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  onChange={handleInputChange}
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={handleInputChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleInputChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
        <FormHelperText sx={{color:'red',display:'none',justifyContent:'center', alignItems:'center'}} id="component-helper-text">
          Some important helper text
        </FormHelperText>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: '#151875' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/loginPage" className={styles.navlist}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default SignUpPage;