import { MagnifyingGlass, X } from 'phosphor-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import { SearchBar } from './searchBar';

export function Header() {
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);
  return (
    <header className="relative flex flex-col ">
      <div className="container-Items flex h-[72px] items-center justify-between xl:h-[115px] ">
        <div className="flex items-center sm:w-full">
          <Link to="/">
            <img src={logo} alt="Logo Alura Geek" className="w-[100px] sm:mr-8 lg:w-[176px]" />
          </Link>
          <div className="ml-8 hidden w-full sm:flex">
            <SearchBar />
          </div>
        </div>
        <Link to="/login">
          <button
            type="button"
            className="btn-secundary px-[47.5px] py-3 sm:px-16 lg:px-[70px] lg:py-4 "
          >
            Login
          </button>
        </Link>
        {showMobileSearchBar ? (
          <X
            size={24}
            color="#464646"
            weight="bold"
            className="cursor-pointer sm:hidden"
            onClick={() => setShowMobileSearchBar(!showMobileSearchBar)}
          />
        ) : (
          <MagnifyingGlass
            size={24}
            color="#464646"
            weight="bold"
            className="cursor-pointer sm:hidden"
            onClick={() => setShowMobileSearchBar(!showMobileSearchBar)}
          />
        )}
      </div>
      {showMobileSearchBar ? (
        <div className="absolute top-full h-auto w-full rounded-b-xl bg-white">
          <div className="mb-2">
            <SearchBar />
          </div>
        </div>
      ) : (
        <div className="hidden" />
      )}
    </header>
  );
}
