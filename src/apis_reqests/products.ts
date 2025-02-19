import { Product_cart } from "@/interface/product_cart";
import { product_curt_post_Interface, responde_cart } from "../interface/product_response";
import axios from "axios";

const reqest = axios.create({baseURL: "https://api-gold-e-shop-seven.vercel.app/", headers: {}, withCredentials: true});


export async function post_product(values: product_curt_post_Interface): Promise<responde_cart | undefined>{
  return await reqest.post("/api/cart/add", values).then(e=>e.data).catch(e => undefined);
}

export async function get_products_cart(): Promise<Product_cart[] | undefined> {
    return reqest.get("/api/cart").then(e => e.data).catch(e => undefined);
}

export async function put_products_cart(value: product_curt_post_Interface): Promise<Product_cart[] | undefined>{
  return reqest.put("/api/cart/update", value).then(e => e.data).catch(e => undefined)
}

export async function delete_products_cart(value: { productId: number, }): Promise<Product_cart[] | undefined>{
  return reqest.put("/api/cart/update", value).then(e => e.data).catch(e => undefined)
}