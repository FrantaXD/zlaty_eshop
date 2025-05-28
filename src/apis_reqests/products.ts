import { Product_cart, Get_Once_Product } from "@/interface/product_cart";
import { product_curt_post_Interface, responde_cart } from "../interface/product_response";
import axios from "axios";

const reqest = axios.create({baseURL: "https://apigolde-shop-production-5431.up.railway.app/", headers: {}, withCredentials: true});


export async function post_product(values: product_curt_post_Interface): Promise<responde_cart | undefined>{
  return await reqest.post("/api/cart/add", values).then(e=>e.data).catch(e => undefined);
}

export async function get_products_cart(): Promise<Product_cart[] | undefined> {
  return await reqest.get("/api/cart").then(e => e.data).catch(e => undefined);
}

export async function put_products_cart(value: product_curt_post_Interface){
 return await reqest.put("/api/cart/update", value).then(e => console.log("put_products_cart response: "+e.data)).catch(e => console.log("put_products_cart response: "+undefined))
}

export async function delete_products_cart(value: { productId: number, }){
 return await reqest.delete("/api/cart/remove", {data: value}).then(e => console.log("delete_products_cart response: "+e.data)).catch(e => console.log("delete_products_cart response: "+undefined))
}

export async function get_products(){
 return await reqest.get("/api/products").then(e => {console.log(e.data);return e.data;}).catch(e => e);
}

export async function get_product_by_id(id: string): Promise<Get_Once_Product | undefined> {
  return await reqest.get(`/api/products/${id}`, ).then(e => e.data).catch((e) => undefined)
}


