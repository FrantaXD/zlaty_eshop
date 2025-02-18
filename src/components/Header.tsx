"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCartShopping, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface NavLink {
  href: string;
  title: string;
  icon?: {
    icon: IconDefinition;
    left?: boolean;
  };
}

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const navLinks: NavLink[] = [
    { href: "/", title: "Domů" },
    { href: "/about", title: "O mně" },
    { href: "/galerie", title: "Galerie" },
    { href: "/nakupovat", title: "Nakupovat" },
    { href: "/kosik", title: "Košík", icon: { icon: faCartShopping } },
  ];

  // Přidání stínu při scrollování
  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 left-0 w-full z-50   bg-black  text-white transition-shadow duration-300 ${hasShadow ? "shadow-lg" : ""}`}>
      <div className="flex justify-between items-center p-4 container mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Jovana Šichová 
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, i) => (
            <button key={i} onClick={() => setNavbarOpen(false)}>
              <Link key={i} href={link.href} className="text-lg font-medium text-black text-white hover:text-blue-500 transition flex items-center gap-x-2">
                {link.icon && link.icon.left && <FontAwesomeIcon icon={link.icon.icon} />} {link.title} {link.icon && !link.icon.left && <FontAwesomeIcon icon={link.icon.icon} />}
              </Link>
            </button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <FontAwesomeIcon icon={navbarOpen ? faXmark : faBars} className="md:hidden text-2xl cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)} />
      </div>

      {/* Mobile menu */}
      {navbarOpen && (
        <div className="md:hidden flex flex-col items-end px-8 pb-4">
          {navLinks.map((link, i) => (
            <button key={i} onClick={() => setNavbarOpen(false)}>
              <Link key={i} href={link.href} className="text-lg font-medium text-black text-white hover:text-blue-500 transition flex items-center">
                {link.icon && link.icon.left && <FontAwesomeIcon icon={link.icon.icon} />} {link.title} {link.icon && !link.icon.left && <FontAwesomeIcon icon={link.icon.icon} />}
              </Link>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
