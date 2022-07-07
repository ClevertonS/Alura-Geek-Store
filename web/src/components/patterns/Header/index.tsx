import Image from 'next/image';
import { MagnifyingGlass, X } from 'phosphor-react';
import React, { useState } from 'react';

import logo from '../../../../public/logo.svg';
import { Link } from '../../Link';
import { SearchBar } from './searchBar';

interface IHeader {
  hiddenButton: boolean;
  isLogged: boolean;
}

export function Header({ hiddenButton, isLogged }: IHeader) {
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);
  const [logged, setLogged] = useState('');
  return (
    <header className="relative flex flex-col">
      <div className="container-Items flex h-[72px] items-center justify-between xl:h-[115px] ">
        <div className="flex flex-row items-center sm:w-full">
          <Link href="/">
            <div className="w-full max-w-[100px] sm:max-w-[176px] lg:w-[176px]">
              <Image src={logo} alt="Logo Alura Geek" className="w-full sm:mr-8 " />
            </div>
          </Link>
          <div className="ml-8 hidden w-full sm:flex">
            <SearchBar />
          </div>
        </div>
        {hiddenButton ? (
          <Link href={isLogged ? '/admin' : '/login'}>
            <button
              type="button"
              className="btn-secundary w-[133px] whitespace-nowrap px-4 py-3 sm:w-[166px] lg:w-[182px] lg:py-4"
            >
              {isLogged ? 'Menu administrador' : 'Login'}
            </button>
          </Link>
        ) : null}

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
