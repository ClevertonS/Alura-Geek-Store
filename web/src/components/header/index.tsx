import React from 'react';

import logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <header className="flex w-auto h-[72px] p-4 md:px-8 xl:h-[115px] xl:px-[152px]">
      <img src={logo} alt="Logo Alura Geek" className="w-[100px] lg:w-[176px]" />
    </header>
  );
}
