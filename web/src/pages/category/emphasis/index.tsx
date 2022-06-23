import React from 'react';
import { Link } from 'react-router-dom';

export function Emphasis() {
  return (
    <section
      className="container-Items position flex h-[192px] flex-col
     justify-end bg-emphasis bg-cover bg-center bg-no-repeat py-4 sm:h-[352px] sm:bg-cover sm:py-8 xl:bg-emphasis-desktop"
    >
      <h2 className="text-[22px] font-bold text-white sm:text-[52px]">Dezembro Promocional</h2>
      <h3 className="my-2 text-sm font-semibold text-white sm:my-4 sm:text-[22px] sm:font-bold">
        Produtos selecionados com 33% de desconto
      </h3>
      <Link to="/category/1" className="btn-primary mr-auto">
        Ver Consoles
      </Link>
    </section>
  );
}
