import React from 'react';

export const NavBarMenuItem = ({ menuName }: { menuName: string }) => {
  return (
    <a href='#' className='text-2xl p-3 text-gray-800 hover:text-gray-500'>
      {menuName}
    </a>
  );
};
