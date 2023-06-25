import type { NextPage } from "next";
import Head from "next/head";

import { Typography } from "@mui/material";
import styles from '../styles/Home.module.css'
import ProductList from "@/components/productList";
import Footer from "@/components/footer";


const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Serveased Volunteer Project</title>
      </Head>
        <div className={styles.headerDiv}>
        <Typography sx={{fontWeight:'bolder', fontSize:'30px', color:'#151875'}} variant="h4" component="h1" align="center">
        Shopping List
        </Typography>
        <Typography sx={{opacity:'0.6'}}  mt={2} variant='subtitle1'>
          Lorem ipsum diem
        </Typography>
        </div>
     <div className={styles.productSection}>

    <ProductList  />
   
     </div>
     <Footer />
    </div>
  );
};

export default Home;
