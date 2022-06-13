import React from 'react';

export function Card() {
  return (
    <li className="category-Card odd:mr-2 even:mr-0 sm:even:mr-2  xl:last:mr-0 ">
      <img
        src="src/assets/teste.png"
        alt=""
        className="h-[174px] w-[156px] object-cover sm:w-[164px] xl:w-[176px]"
      />
      <h4 className="pt-2 text-sm font-medium text-black-100">Produto XYZ</h4>
      <h3 className="py-2 text-base font-bold text-black-100">R$ 60,00</h3>
      <a href="teste" className="pr-3 text-sm font-bold text-blue-100">
        Ver Produto
      </a>
    </li>
  );
}
