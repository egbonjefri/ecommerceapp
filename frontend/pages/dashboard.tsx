import Image from 'next/image';
import {useEffect} from 'react';
import { userState } from '@/state/atoms';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styles from '../styles/dashboard.module.css';
import {getTokenFromLocalStorage, getUserFromLocalStorage} from '../utils/token';
import {useRouter} from 'next/router';
import { useRecoilState } from 'recoil';
import { cartState } from '@/state/atoms';


const DashboardPage = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const userInfo = getUserFromLocalStorage();
  const token = getTokenFromLocalStorage();
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser([]);
    setCart([]);
    router.push('/loginPage');
  };
  
  useEffect(()=>{
    if (token){
     setUser(userInfo.data.user);
     setCart(userInfo.data.items);
    }
  }, [])
  
    return (
<Container className={styles.dashboard} maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} textAlign="center">
        </Grid>
        <Avatar sx={{width:'70px', margin:'10px'}} src="https://thenounproject.com/api/private/icons/432115/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" />
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome, {user.firstName} {user.lastName}!
          </Typography>
          <Typography variant="subtitle1" component="p" gutterBottom>
            {user.email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button sx={{margin:'20px'}} variant="contained" color="primary">
            Edit Profile
          </Button>
          <Button sx={{margin:'20px'}} onClick={handleLogout} variant="contained" color="primary">
           LOGOUT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};



    
    export default DashboardPage;