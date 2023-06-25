import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'universal-cookie';
import { Product } from '@/utils/products';
import { getTokenFromLocalStorage } from '@/utils/token';


const token = getTokenFromLocalStorage();




export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
});

// Add CORS headers to all requests
api.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return config;
  });


export const login = async (object: any) => {
  const response = await fetch('http://127.0.0.1:8000/api/login',
  {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(object),});
  const responseBody = await response.text();

  return responseBody
}


export const getUser = async (object:any): Promise<AxiosResponse> => {
  return api.get(`/users`,
  {headers: {'Authorization': `Bearer ${object.token.replace(/['"]+/g, '')}`,}},);
};

    //save the cart item to the database if user is logged in
   export const saveCartItems = async (product:any) =>{
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/cart-items',
        {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token.replace(/['"]+/g, '')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
       
      } catch (error) {
        console.error(error);
      }
      
    }