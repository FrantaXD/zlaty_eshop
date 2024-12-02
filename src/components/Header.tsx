'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

interface NavLink {
  href: string;
  title: string;
}

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const navLinks: NavLink[] = [
    { href: '/', title: 'Domů' },
    { href: '/about', title: 'O mně' },
    { href: '/galerie', title: 'Galerie' },
    { href: '/nakupovat', title: 'Nakupovat' },
  ];

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        hasShadow ? 'shadow-lg' : ''
      }`}>
      {/* Desktop menu */}
      <div className='flex justify-evenly items-center p-4 container mx-auto'>
        {/* Logo */}
        <Link href='/' className='text-xl font-bold'>
          Jovana Šichová
        </Link>
        {/* Links */}
        <div className='hidden md:flex space-x-6'>
          {navLinks.map((link, i) => (
            <button key={i} onClick={() => setNavbarOpen(false)}>
              <Link
                key={i}
                href={link.href}
                className='text-lg font-medium text-black hover:text-blue-500 transition flex items-center gap-x-2'>
                {link.title}{' '}
              </Link>
            </button>
          ))}
        </div>
        {/* Mobile menu toggle */}
        <FontAwesomeIcon
          icon={navbarOpen ? faXmark : faBars}
          className='md:hidden text-2xl cursor-pointer'
          onClick={() => setNavbarOpen(!navbarOpen)}
        />
        {/* Languages & Admin */}
        <div className='flex items-center gap-4'>
          <h2>CZ|EN</h2>
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      {/* Mobile menu */}
      {navbarOpen && (
        <div className='md:hidden flex flex-col items-end px-8 pb-4'>
          {navLinks.map((link, i) => (
            <button key={i} onClick={() => setNavbarOpen(false)}>
              <Link
                key={i}
                href={link.href}
                className='text-lg font-medium text-black hover:text-blue-500 transition flex items-center gap-x-2'>
                {link.title}{' '}
              </Link>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
