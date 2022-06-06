import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';

import logo from '../../assets/Logo.svg';
import { SearchBar } from './searchBar';

export function Header() {
  return (
    <header className="flex justify-between items-center w-auto h-[72px] p-4 md:px-8 xl:h-[115px] xl:px-[152px]">
      <div className="flex items-center sm:w-full">
        <img src={logo} alt="Logo Alura Geek" className="w-[100px] lg:w-[176px] sm:mr-8" />
        <SearchBar />
      </div>
      <button
        type="button"
        className="btn-secundary text-sm px-[47.5px] py-3 lg:text-base lg:px-[70px] lg:py-4 sm:px-16 "
      >
        Login
      </button>
      <a href="teste">
        <MagnifyingGlass size={24} color="#464646" weight="bold" className="sm:invisible" />
      </a>
    </header>
  );
}
