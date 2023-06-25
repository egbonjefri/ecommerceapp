import { Product } from "./products";


export async function loadAllProducts () {
    const response = await fetch('http://127.0.0.1:8000/products/all');
    const productsData: Product[] = await response.json();
    return productsData;
}