"use client";
import { Cart_form } from "@/components/kosik_cart_items/cart_form";
import { Formik } from "formik";
import * as Yup from "yup";

export default function FormKosik() {
  return (
    <main className=" text-white  flex-1 mt-[60px]">
      <div className="absolute right-[50%] translate-x-[50%]">
        <h1 className="absoute mx-auto text-[64px] text-white">
          Košík
        </h1>
      </div>
      <Cart_form/>
    </main>
  );
}
