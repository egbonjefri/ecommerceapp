import React, { useState,useEffect } from 'react';
import { Grid, List, ListItem, ListItemText, Typography,Rating, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import  Link  from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import { Product } from '@/utils/products';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import { useRecoilState, } from 'recoil';
import styles from '../styles/ProductList.module.css'
import { cartState,loadingState,timeState } from '@/state/atoms';
import { loadAllProducts } from '@/utils/loadAllProducts';
import {getTokenFromLocalStorage} from '../utils/token'
import {saveCartItems} from '../pages/api/api'



  

const transition = {
  duration: 0.3,
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [amount, setAmount] = useState<number>(12);
  const [skeleton, setSkeleton] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<string>(''); 
  const [isClicked, setIsClicked] = useState<boolean>(true);
  const [cart, setCart] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [fetchTime, setFetchTime] = useRecoilState(timeState);

  const token = getTokenFromLocalStorage();



  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setAmount(value);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
  };
  const handleIconClick = () => {
    setIsClicked((prevClicked) => !prevClicked);

  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>,product:Product) => {
    e.preventDefault();

    if (token) {
      saveCartItems(product)
    }


    const itemIndex = cart.findIndex((item) => item.id === product.id);


    if (itemIndex === -1) {
      setCart([...cart, { ...product, quantity }]);
      
    } else {
      setCart(prev => {
        return prev.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
      });
    }
    setQuantity(quantity + 1);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const startTime = performance.now(); 
        const productList = await loadAllProducts();
        const endTime = performance.now(); 
        const myTime = endTime - startTime; 
        setProducts(productList);
        setFetchTime(myTime);
        setSkeleton(false)
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
    

 

  return (
    <div className={styles.products}>
      {skeleton ? (
        <Grid className={styles.grid}>
          <Grid sx={{display:'flex', flexDirection: 'row', flexWrap:'wrap'}}>
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />
         <Skeleton sx={{margin:'5%'}} variant="rectangular" width={300} height={200} />

         </Grid>
        </Grid>
      ) : (
        <div>
    <Typography ml={4} sx={{fontSize:'20px', fontWeight:'bolder', color:'#151875'}} variant='h5'>Ecommerce Accessories & Fashion items </Typography> 
    <Typography ml={4} sx={{opacity:'0.6'}} variant='caption'>About {products.length} results ({(fetchTime/1000).toFixed(2)}s)</Typography>
    <div className={styles.productView}>
      <label>
        Per Page:
        <input type="number" value={amount} onChange={handleAmountChange} />
      </label>

      <label>
        Sort By:
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="">Best Match</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <label className={styles.viewIcons}>View: 
      <span>
    
    <AppsIcon  onClick={handleIconClick}
      style={{
        backgroundColor: isClicked ? '#3b3fb4' : 'transparent',
      }} /> <ViewListIcon    onClick={handleIconClick}   style={{
        backgroundColor: isClicked ? 'transparent' : '#3b3fb4',
      }}  />
    
     </span>
         </label>

     
    </div>

      
        {isClicked ? (
          <Grid container spacing={2}>
            {products.map((product,index) => (
            
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={transition}
                 key={index}
                >
                
                  <Link key={index} className={styles.link}  href={`/products/${product.id}`}>
                   <div className={styles.grid}>
                  <Image src={product.image} alt={product.name} width={300} height={200} />
                  <h6 className={styles.subtitle}>{product.description}</h6>
                  <h6 className={styles.price}>${product.price}<s>${product.oldPrice}</s></h6>
                  <div className={styles.hover}>
                    <div className={styles.info}>
                      <IconButton  onClick={(e)=>handleAddToCart(e,product)}  sx={{display: 'flex',flexDirection:'column'}} >
                      <InfoIcon /> 
                      <ShoppingCartIcon   /> 
                      <FavoriteIcon  /> 
                      </IconButton>
                    </div>
              </div>
                  </div>
                  </Link>
                 
                </motion.div>
              </Grid>
             
            ))}
          </Grid>
        ) : (
          <List>
            {products.map((product,index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={transition}
              >
               
                <ListItem className={styles.listItem} sx={{marginLeft: '15%'}} >
                <Link className={styles.link}  href={`/products/${product.id}`}>
                <div className={styles.listDisplay}>
                  <Image src={product.image} alt={product.name} width={300} height={200} />
                  <div className={styles.text}>
                  <ListItemText sx={{margin:'20px',fontWeight:'bolder'}}  primary={product.description} secondary={
                    <React.Fragment>
                      <Rating sx={{position:'relative', flexShrink: 1,fontSize:'15px',marginLeft:'0em',top:'10px'}} name="read-only" value={product.rating} readOnly />
                    </React.Fragment>
                  } />
                  <Typography sx={{fontSize:'12px'}} variant='h6'>${product.price}<s>${product.oldPrice}</s></Typography>
                  <Typography sx={{opacity:'0.5', fontSize: '10px'}} variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <div className={styles.infolist}>
                    <IconButton sx={{display:'flex', gap: '50px'}}  >
                      <InfoIcon /> 
                      </IconButton>
                      <IconButton onClick={(e)=>handleAddToCart(e,product)}>
                      <ShoppingCartIcon /> 
                      </IconButton>
                      <IconButton>
                      <FavoriteIcon  /> 
                      </IconButton>
                      </div>
                      </div>
                      </div>
                      </Link>
                </ListItem>
                
              </motion.div>
            ))}
          </List>
        )}
      </div>
      )}
    </div>
  );
};


export default ProductList;