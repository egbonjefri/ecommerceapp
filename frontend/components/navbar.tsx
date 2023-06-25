import * as React from 'react';
import styles from '../styles/Navbar.module.css'

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { styled, alpha } from '@mui/material/styles';
import {AppBar,ListItem, Box, Typography, Toolbar, InputBase, ListItemButton, ListItemText, CssBaseline,Divider,Drawer,Badge,List, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import { useRecoilState } from 'recoil';
import { cartState } from '@/state/atoms';
import {getTokenFromLocalStorage} from '../utils/token'


const drawerWidth = 240;




const Navbar: React.FC  = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  const token = getTokenFromLocalStorage();
  const array1 = [{icon: <ExpandMoreIcon/>, text: "Home", value:"/"},
  {icon: token ? <AccountCircleIcon /> : <LoginIcon/>,
   text: token ? "Profile" : "Login", value: token? "dashboard" : "loginPage"},
  {icon:     <IconButton color="inherit">
  <Badge badgeContent={cart.length} color="secondary">
    <ShoppingCartIcon />
  </Badge>
  </IconButton>, text: "Cart", value:"/shoppingCartPage"}];
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    height: '40px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0,2),
    height: '100%',
    top: '4px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#3b3fb4'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(2em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2, color: '#101750' }}>
        Serveased
      </Typography>
      <Divider />
      <List>
    {  array1.map((item,index) => (
             <Link className={styles.navlist} key={index} href={item.value}> 
             <ListItem      
      value={item.value} className={router.pathname === item.value ? styles.activeLink : ''} >
      
        <ListItemText primary={item.text} />
       {item.icon}
        </ListItem>
        </Link>
                          ))
                               
                        }
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar sx={{ position: 'absolute'}} component="nav">
        <Toolbar className={styles.toolbar} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            color="#101750"
            component="div"
            sx={{fontWeight: 'bolder', marginRight: 10, flexGrow: 1, display: {  sm: 'block' } }}
          >
            Serveased
          </Typography>

          <Box  className={styles.navbar} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {  array1.map((item,index) => (
             <Link className={styles.navlist} key={index} href={item.value}> 
             <ListItem      
      value={item.value} className={router.pathname === item.value ? styles.activeLink : ''} >
      
        <ListItemText primary={item.text} />
       {item.icon}
        </ListItem>
        </Link>
                          ))
                               
                        }
         
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className={styles.search}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
  );
};

export default Navbar;