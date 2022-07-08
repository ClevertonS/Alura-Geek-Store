import axios from 'axios';
import { ArrowDown, ArrowUp } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

import { ICategory } from '../../../../interfaces/ICategory';

interface IProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setIdCategory: React.Dispatch<React.SetStateAction<number>>;
}

export function SelectCategory({ category, setIdCategory, setCategory }: IProps) {
  const [open, setOpen] = useState(false);
  const [handleCategory, setHandleCategory] = useState<ICategory[]>();

  const categoryName =
    category && handleCategory?.find((option) => option.category === category)?.category;

  useEffect(() => {
    axios
      .get<ICategory[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`)
      .then((event) => setHandleCategory(event.data))
      .catch((error) => console.log(error));
  });

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
        <span>{categoryName || 'Escolha a Caaategoria'}</span>
        {open ? <ArrowUp color="#464646" size={16} /> : <ArrowDown color="#464646" size={16} />}
        {open ? (
          <div className="absolute left-0 top-full flex w-full flex-col">
            {handleCategory?.map((item) => (
              <div
                key={item.id}
                aria-hidden="true"
                className="input-container flex h-12 w-full items-center border-y-2 border-black-5 px-3 hover:bg-slate-50"
                onClick={() => {
                  setIdCategory(item.id);
                  setCategory(item.category);
                }}
                onKeyDown={handleKeyDown}
              >
                {item.category}
              </div>
            ))}
          </div>
        ) : (
          <div className="hidden" />
        )}
      </button>
    </fieldset>
  );
}
