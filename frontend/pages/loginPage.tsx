


import * as React from 'react';
import { useState } from 'react';
import { NextPage } from 'next';
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
import styles from '../styles/loginPage.module.css'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {getUser,login} from './api/api';
import { userState } from '@/state/atoms';
import FormHelperText from '@mui/material/FormHelperText';
import {storeTokenInLocalStorage, storeUserInLocalStorage} from '../utils/token'
import CircularProgress from '@mui/material/CircularProgress';
import { cartState } from '@/state/atoms';


interface User {
  email: string;
  password: string;
}



const LoginPage: NextPage = () => {
  const router = useRouter();
  const [cart, setCart] = useRecoilState(cartState);
  const [userID, setUserID] = useRecoilState(userState);
  const [user, setUser] = useState<User>({
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
    const loading = document.getElementById('loading');
    loading.style.display = 'flex'
    event.preventDefault();
    try {
      const response = await login(user);
      const parsedData = JSON.parse(response);
      storeTokenInLocalStorage(parsedData.token);
      const userInfo = await getUser(parsedData);
      storeUserInLocalStorage(userInfo);
      setUserID(userInfo.data.user);
      setCart(userInfo.data.items);
      router.push('dashboard')
  
    } catch (error) {
      
      const errorMsg = document.getElementById('component-helper-text');
      errorMsg.innerHTML = 'Login Failed: Username or Password incorrect.';
      loading.style.display = 'none';
      errorMsg.style.display = 'flex'
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Head>
        <title>Login</title>
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

          <Typography component="p" sx={{opacity:'0.5'}}>
          Please login using account details below
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleInputChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleInputChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:'#151875'}}
            >
              Sign In
            </Button>
            <FormHelperText sx={{color:'red',display:'none',justifyContent:'center', alignItems:'center'}} id="component-helper-text">
          Some important helper text
        </FormHelperText>
            <Grid container>
              <Grid item xs>
                <Link className={styles.navlist} href="/PasswordReset">
                  Forgot password?
                </Link>

              </Grid>
              <Grid item>
                <Link className={styles.navlist} href="/signUpPage">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>

            </Grid>
            <Box className={styles.loading} id='loading' mt={5} sx={{ display: 'flex', justifyContent:'center', alignItems:'flex-start' }}>
      <CircularProgress />
    </Box>
          </Box>
        </Box>
      
      </Container>
  );
}



export default LoginPage;