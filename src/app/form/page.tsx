"use client"
import { Cart_form } from "@/components/kosik_cart_items/cart_form";
import { Formik } from "formik";
import * as Yup from "yup";

export default function FormKosik(){
   
    return(
        <div className="text-white">  
           <h1 className="text-white">Hello Form</h1>
           <Cart_form/>
        </div>
    )
}