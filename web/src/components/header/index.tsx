import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import { SearchBar } from './searchBar';

export function Header() {
  return (
    <header className="container-Items flex h-[72px] items-center justify-between xl:h-[115px] ">
      <div className="flex items-center sm:w-full">
        <Link to="/">
          <img src={logo} alt="Logo Alura Geek" className="w-[100px] sm:mr-8 lg:w-[176px]" />
        </Link>
        <SearchBar />
      </div>
      <Link to="/login">
        <button
          type="button"
          className="btn-secundary px-[47.5px] py-3 sm:px-16 lg:px-[70px] lg:py-4 "
        >
          Login
        </button>
      </Link>
      <a href="teste">
        <MagnifyingGlass size={24} color="#464646" weight="bold" className="sm:hidden" />
      </a>
    </header>
  );
}
