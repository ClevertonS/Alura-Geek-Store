import { MagnifyingGlass } from 'phosphor-react';
import React, { useState } from 'react';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="invisible h-0 w-0 rounded-full bg-black-5 sm:visible sm:h-10 sm:w-1/2 sm:min-w-[250px] sm:max-w-[393px] xl:w-[393px] ">
      <form action="" className="flex items-center justify-between px-4 py-2">
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
          type="textArea"
          name="search"
          placeholder="O que deseja encontrar?"
          className="w-full bg-inherit text-black-50 outline-none lg:pr-2"
        />
        <button type="submit">
          <MagnifyingGlass size={24} color="#a2a2a2" />
        </button>
      </form>
    </div>
  );
}
