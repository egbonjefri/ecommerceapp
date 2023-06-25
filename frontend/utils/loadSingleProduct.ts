import { Product } from "./products";


export async function loadSingleProduct (id : any) {
    const response = await fetch(`http://127.0.0.1:8000/products/${id}`);
    const productsData: Product[] = await response.json();
    return productsData;
}