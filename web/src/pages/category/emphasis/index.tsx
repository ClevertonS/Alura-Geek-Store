import React from 'react';

export function Emphasis() {
  return (
    <section
      className="container-Items py-4 bg-emphasis bg-no-repeat bg-cover
     bg-center flex flex-col justify-end position h-[192px] sm:py-8 sm:h-[352px] sm:bg-cover xl:bg-emphasis-desktop"
    >
      <h2 className="text-white font-bold text-[22px] sm:text-[52px]">Dezembro Promocional</h2>
      <h3 className="text-white font-semibold text-sm my-2 sm:text-[22px] sm:font-bold sm:my-4">
        Produtos selecionados com 33% de desconto
      </h3>
      <button type="button" className="btn-primary mr-auto">
        Ver Consoles
      </button>
    </section>
  );
}
