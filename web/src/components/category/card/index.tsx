import React from 'react';

export function Card() {
  return (
    <li className="category-Card odd:mr-2 even:mr-0 sm:even:mr-2  xl:last:mr-0 ">
      <img
        src="src/assets/teste.png"
        alt=""
        className="w-[156px] h-[174px] sm:w-[164px] xl:w-[176px] object-cover"
      />
      <h4 className="font-medium pt-2 text-black-100 text-sm">Produto XYZ</h4>
      <h3 className="font-bold py-2 text-black-100 text-base">R$ 60,00</h3>
      <a href="teste" className="text-blue-100 text-sm font-bold pr-3">
        Ver Produto
      </a>
    </li>
  );
}
