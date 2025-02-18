import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-Footer w-full h-fit flex justify-around bg-cover font-playfair py-20 text-white">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl">Kontaktuj </h2>
        <p>email: jovanak@seznam.cz</p>
        <p>číslo: 123 456 789</p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl">Sociální sitě</h2>
        <p>Instagram</p>
      </div>
      <div className="flex flex-col gap-3">
        <Link href={"/"}>
          <p>Home</p>
        </Link>
        <Link href={"/about"}>
          <p>About</p>
        </Link>
        <Link href={"/shop"}>
          <p>Shop</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
