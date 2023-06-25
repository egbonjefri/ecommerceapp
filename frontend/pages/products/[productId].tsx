import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { Tab, Tabs , Container, Typography, List, ListItemText, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';import Image from 'next/image';
import styles from '../../styles/[productId].module.css'
import { Product } from '../../utils/products';
import { cartState } from '@/state/atoms';
import { useRecoilState, } from 'recoil';
import { loadSingleProduct } from '@/utils/loadSingleProduct';
import { loadAllProducts } from '@/utils/loadAllProducts';
import Stack from '@mui/material/Stack';
import Head from 'next/head';


interface asyncProducts {
  products? : any;
}


const ProductPage: React.FC<asyncProducts> = ({ products }) => {
  const details = JSON.parse(products.details);
  const [cart, setCart] = useRecoilState(cartState);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
      setIsFavorite((prevFavorite) => !prevFavorite);
    };
  
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>,product:Product) => {
      e.preventDefault();
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
  
  return (
    <div>
        <Head>
        <title>{products.name} Details</title>
      </Head>
      <div className={styles.product}>
      <Container>
        <div className={styles.headerDiv}>
        <Typography sx={{fontWeight:'bolder', fontSize:'30px', color:'#151875'}} variant="h4" component="h1" align="center">
          {products.name} Details
        </Typography>
        </div>
        <div className={styles.imageContainer}>
        <div className={styles.productImage}>
        <Image src={products.image} alt={products.name} width={400} height={300} />
        <div className={styles.text}>
        <Typography className={styles.productTitle} variant="h6" component="h1">
          {products.description} 
        </Typography>
        <Stack  spacing={1}>
      <Rating name="rating" defaultValue={Number(products.rating)} precision={0.5} />
        </Stack>
          
                  <Typography sx={{fontSize:'15px'}} variant='h6'>${products.price}<s>${products.oldPrice}</s></Typography>
                  <Typography sx={{opacity:'0.5', fontSize: '10px'}} variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <div className={styles.infolist}>
                    <div className={styles.cart}>
                  <button  onClick={(e)=>handleAddToCart(e,products)}>Add to Cart 
                  </button>
                  <button onClick={handleFavoriteClick}>
                  {isFavorite ? <FavoriteIcon  color="secondary" /> : <FavoriteBorderOutlinedIcon  />}
                  </button>
                 
                  
                   </div>
                      </div>
                      </div>
        </div>
        </div>
      </Container>
      <div className={styles.productContainer}>
      <div className={styles.productDetails}>
      <Tabs value={selectedTab} onChange={handleTabChange} aria-label="Product Tabs">
        <Tab sx={{margin: '0 40px'}} label="Description" value="description" />
        <Tab sx={{margin: '0 40px'}} label="Additional Info" value="additional-info" />
        <Tab sx={{margin: '0 40px'}} label="Reviews" value="reviews" />
      </Tabs>
     
      <div className={styles.productSubDetails}>
        {selectedTab === 'description' &&  <ul className={styles.detailList}>
          <Typography fontWeight='bolder' variant='h6'>
            {details[0].title}
          </Typography>
          <Typography  variant='caption'>
            {details[0].body}
          </Typography>
          <Typography fontWeight='bolder' variant='h6'>
            {details[0].title2}
          </Typography>
          <div className={styles.moreDetails}>
          <Typography sx={{display:'flex', gap:'10px'}} variant='caption'>
            <ArrowForwardIcon/>{details[0].listItem1}
          </Typography>
          <Typography  sx={{display:'flex', gap:'10px'}}  variant='caption'>
            <ArrowForwardIcon/>{details[0].listItem2}
          </Typography>
          <Typography  sx={{display:'flex', gap:'10px'}}  variant='caption'>
            <ArrowForwardIcon/>{details[0].listItem3}
          </Typography>
          </div>
        </ul>}
        {selectedTab === 'additional-info' && <ul  className={styles.detailList}><div> <Typography  fontWeight='bolder' variant="h6"  >{products.additionalInfo}</Typography></div></ul>}
        {selectedTab === 'reviews' && (
          <ul className={styles.detailList}>
            {JSON.parse(products.reviews).map((review:any, index:number) => (
              <div key={index}>
              <Typography fontWeight='bolder' variant="h6"  >{review.title}</Typography>
              <Stack>
                <Rating defaultValue={review.rating}></Rating>
              </Stack>
              <Typography variant="subtitle1">{review.body}</Typography>
           
              </div>
            ))}
          </ul>
        )}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await loadAllProducts();

  const paths = allProducts
  .filter((item: any) => item.id !== undefined)
  .map((item: any) => ({
    params: { productId: item.id.toString() },
  }))
    return {
      paths,
      fallback: 'blocking', 
    };
};


export const getStaticProps: GetStaticProps<asyncProducts> = async (context) => {

  try {
    const productId = context.params?.productId
     const products = await loadSingleProduct(productId);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      props: {
        product: null,
      },
    };
  }
};

export default ProductPage;