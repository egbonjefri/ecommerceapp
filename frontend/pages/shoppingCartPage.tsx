import * as React from "react";
import Image from "next/image";
import { useRecoilState,useRecoilValue } from 'recoil';
import { cartState } from '../state/atoms';
import {totalPriceSelector} from '../state/selectors'
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Head from "next/head";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import styles from '../styles/shoppingCartPage.module.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {getTokenFromLocalStorage} from '../utils/token'
import {saveCartItems} from '../pages/api/api'

const ShoppingCartPage: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const total = useRecoilValue(totalPriceSelector);
  const token = getTokenFromLocalStorage();


  const incrementQuantity = (itemId: string) => {
    const updatedCartItems = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: Number(item.quantity) + 1 };
      }
      return item;
    });

    setCart(updatedCartItems);
    if (token) {
      saveCartItems(updatedCartItems)
    }

  }
  const decrementQuantity = (itemId: string) => {
    const updatedCartItems = cart.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: Number(item.quantity) - 1 };
      }
      return item;
    });
    if (token) {
      saveCartItems(updatedCartItems)
    }
    setCart(updatedCartItems);
  }
  const handleDeleteItem = (itemId: string) => {
    const updatedCartItems = cart.filter(item => item.id !== itemId);
    setCart(updatedCartItems);
    if (token) {
      saveCartItems(updatedCartItems)
    }
  };
  return (
      <Container  className={styles.cart} >
              <Head>
        <title>Shopping Cart</title>
      </Head>
        <div className={styles.headerDiv}>
        <Typography sx={{fontSize:'40px', color:'#151875'}} variant="h4" component="h1" align="center">
        Shopping Cart
        </Typography>
        </div>
  
        {cart.length > 0 ? (
            <Grid className={styles.cartList} container spacing={2}>
            <Grid item xs={12}>
              <div className={styles.cartHeader} >
              <Grid sx={{ display: { xs: 'none', md: 'flex' }}} container justifyContent="space-around">
                <Grid item xs={5}>
                  <strong>Product</strong>
                </Grid>
                <Grid item xs={2} >
                  <strong>Price</strong>
                </Grid>
                <Grid item xs={2}>
                  <strong>Quantity</strong>
                </Grid>
                <Grid item xs={2}>
                  <strong>Total</strong>
                </Grid>
              </Grid>
              </div>
            </Grid>
      
            {cart.map((product) => (
              <React.Fragment  key={product.id}>
               
                <Grid sx={{ display: { xs: 'none', md:'block'}}} item xs={5}>
                <div  style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={()=>handleDeleteItem(product.id)} className={styles.deleteButton}>
                  <DeleteIcon/>
                  </button>
                  <Image alt={product.description} src={product.image} width={150} height={100} />
                 <Typography ml={2} variant="caption" color='black' display='block'>
                  {product.description}<br />
                  
                 </Typography> 
 
                 </div>
                </Grid>
                
                <Grid sx={{ display: { xs: 'none', md: 'block' }}} margin={0} item xs={2}>
                 <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                 <Typography mt={3} ml={-6.5} variant="subtitle1" gutterBottom  display="flex">
                  ${product.price}</Typography> 
                  </div> 
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'block' }}} item xs={2}>
                 <div className={styles.gridButtons} >
                  <button onClick={()=>decrementQuantity(product.id)}>  <RemoveIcon  />
                  </button>
                  <Typography mt={0} ml={0} variant="subtitle1" gutterBottom  display="flex">
                  {(product.quantity)}</Typography> 
                  <button onClick={()=>incrementQuantity(product.id)}>
                    <AddIcon/></button>
                  </div> 
                </Grid>
                <Grid sx={{ display: { xs: 'none', md: 'block' }}} margin={0} item xs={2}>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                 <Typography mt={3} ml={5.5} variant="subtitle1" fontWeight='700' gutterBottom  display="flex">
                  ${(Number(product.price)*(product.quantity)).toFixed(2)}</Typography> 
                  </div> 
                </Grid>
                <Grid sx={{opacity:'0.1',display: { xs: 'none', md: 'block' }}} item xs={12}>
              <hr />
            </Grid>
           <div className={styles.mobileView}>
            <Paper>
              <div className={styles.mobileContainer}>
            <Image alt={product.description} src={product.image} width={150} height={100} />
            <Typography variant="caption" color='black' align='center'>
                  {product.description}<br />
                 </Typography>
                 </div> 
              <div className={styles.gridButtons} >
                  <button onClick={()=>decrementQuantity(product.id)}>  <RemoveIcon  />
                  </button>
                  <Typography mt={0} ml={0} variant="subtitle1" gutterBottom  display="flex">
                  {product.quantity}</Typography> 
                  <button onClick={()=>incrementQuantity(product.id)}>
                    <AddIcon/></button>
                  </div> 
                  <div>
                 <Typography align='center' variant="subtitle1" gutterBottom>
                  Price: ${product.price}</Typography> 
                  </div> 
                  <div>
                 <Typography align='center' variant="subtitle1" gutterBottom >
                 Total: ${(Number(product.price)*(product.quantity)).toFixed(2)}</Typography> 
                  </div> 
                  </Paper>
                  </div>
              </React.Fragment>
            ))}
      

      
            <Grid sx={{color:'#151875'}} justifyContent='center' item xs={5.5} />
              <Typography className={styles.totalHeader} sx={{ color:'#151875'}} variant="h6">
                Cart Total
              </Typography>
              <div className={styles.cartTotal}>
            <Grid sx={{fontWeight:'bolder',color:'#151875'}} item xs={12}>
              <div className={styles.cartText}>
              <div>Subtotal: </div> 
              <div>${total.toFixed(2)}</div>
              </div>
              <Divider />
            </Grid>
      
            <Grid item xs={9} />
      
            <Grid sx={{fontWeight:'bolder',color:'#151875'}}  item xs={12}>
            <div className={styles.cartText}>
              <div>Estimated Total:</div> 
              <div>${total.toFixed(2)}</div>
              </div>
              <Divider />
            </Grid>
            <Grid item xs={9} />
            <Grid sx={{gap:'0', display:'flex',justifyContent:'center', alignItems:'center', fontWeight:'bolder',color:'#151875'}}  item xs={12}>
            <Button>
              <CheckCircleIcon sx={{color:'green'}} /> 
              </Button>
            <Typography mr={5} variant='subtitle1'>
            Shipping & Taxes calculated at checkout
              </Typography>
             
              <Divider />
            </Grid>
      </div>
          </Grid>
          )
         : (
          <Typography className={styles.message} >Your cart is empty.
            Please add <Link href="/">Products</Link>
          </Typography>
        )}
  
        <Button
          variant="contained"
          color="primary"
          sx={{background: '#151875'}}
          disabled={cart.length === 0}
        >
         <Link className={styles.navlist} href='/checkout'>Checkout</Link> 
        </Button>
      </Container>
  );
}


export default ShoppingCartPage;