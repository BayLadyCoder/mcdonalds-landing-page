import React from 'react';
import Image from 'next/image';
import { NavBarMenuItem } from './NavBarMenuItem';

export const NavBar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center p-5'>
      <a href='#'>
        <Image
          src='/logo.jpeg'
          alt="WcDonald's Logo"
          className='dark:invert'
          width={80}
          height={90}
          priority
        />
      </a>
      <div className='flex justify-center space-2'>
        <NavBarMenuItem menuName='Menu' />
        <NavBarMenuItem menuName='About' />
        <NavBarMenuItem menuName='Locations' />
      </div>
      <button className='rounded-lg bg-yellow-400 p-4 text-xl hover:bg-yellow-300 font-bold'>
        Order Now
      </button>
    </div>
  );
};
