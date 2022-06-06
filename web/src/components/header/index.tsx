import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';

import logo from '../../assets/Logo.svg';
import { SearchBar } from './searchBar';

export function Header() {
  return (
    <header className="container-Items flex justify-between items-center h-[72px] xl:h-[115px] ">
      <div className="flex items-center sm:w-full">
        <img src={logo} alt="Logo Alura Geek" className="w-[100px] lg:w-[176px] sm:mr-8" />
        <SearchBar />
      </div>
      <button
        type="button"
        className="btn-secundary px-[47.5px] py-3 lg:px-[70px] lg:py-4 sm:px-16 "
      >
        Login
      </button>
      <a href="teste">
        <MagnifyingGlass size={24} color="#464646" weight="bold" className="sm:invisible" />
      </a>
    </header>
  );
}
