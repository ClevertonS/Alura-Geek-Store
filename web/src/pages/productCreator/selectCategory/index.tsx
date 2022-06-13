import { ArrowDown, ArrowUp } from 'phosphor-react';
import React, { useState } from 'react';

interface ICateogry {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectCategory({ category, setCategory }: ICateogry) {
  const [open, setOpen] = useState(false);
  const teste2 = 'teste';

  function handleClick() {
    setOpen(true);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <fieldset className="input-container relative mb-4 w-full px-3 py-2 md:max-w-[559px]">
      <p className="text-xs text-black-50">Categoria</p>
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
        <span>{category === teste2 ? teste2 : 'Escolha a Caaategoria'}</span>
        {open ? <ArrowUp color="#464646" size={16} /> : <ArrowDown color="#464646" size={16} />}
        {open ? (
          <div className="absolute left-0 top-full flex w-full flex-col">
            <div
              aria-hidden="true"
              className="input-container flex h-12 w-full items-center border-y-2 border-black-5 px-3 hover:bg-slate-50"
              onClick={() => setCategory(teste2)}
              onKeyDown={handleKeyDown}
            >
              {teste2}
            </div>
            <div
              aria-hidden="true"
              className="input-container flex h-12 w-full items-center border-y-2 border-black-5 px-3 hover:bg-slate-50"
              onClick={() => setCategory(teste2)}
              onKeyDown={handleKeyDown}
            >
              {teste2}
            </div>
            <div
              aria-hidden="true"
              className="input-container flex h-12 w-full items-center border-y-2 border-black-5 px-3 hover:bg-slate-50"
              onClick={() => setCategory(teste2)}
              onKeyDown={handleKeyDown}
            >
              {teste2}
            </div>
            <div
              aria-hidden="true"
              className="input-container flex h-12 w-full items-center border-y-2 border-black-5 px-3 hover:bg-slate-50"
              onClick={() => setCategory(teste2)}
              onKeyDown={handleKeyDown}
            >
              {teste2}
            </div>
          </div>
        ) : (
          <div className="hidden" />
        )}
      </button>
    </fieldset>
  );
}
