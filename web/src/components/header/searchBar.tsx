import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';

export function SearchBar() {
  return (
    <div className="invisible w-0 h-0 rounded-full bg-black-5 sm:visible xl:w-[393px] sm:max-w-[393px] sm:min-w-[272px] sm:w-1/2 sm:h-10 ">
      <form action="" className="flex justify-between items-center px-4 py-2">
        <input
          type="textArea"
          name="search"
          placeholder="O que deseja encontrar?"
          className="bg-inherit outline-none w-full text-black-50 lg:pr-2"
        />
        <button type="submit">
          <MagnifyingGlass size={24} color="#a2a2a2" />
        </button>
      </form>
    </div>
  );
}
