import { ArrayProject } from "@/utils/images/get_poducts_api";
import axios from "axios";
export async function get_products(): Promise<ArrayProject | undefined>{
  return await axios.get("https://api-gold-e-shop-seven.vercel.app/api/products").then((e)=> {return e.data}).catch(() => {return undefined})
}