import { ArrowRight } from 'phosphor-react';
import React from 'react';

import { Card } from '../../components/card';

export function Category() {
  return (
    <section className="container-Items bg-black-5 py-4">
      <div className="flex items-center justify-between sm:py-4 xl:pt-12">
        <h3 className="subTitle">Star Wars</h3>
        <a href="Testando1-2-3" className="flex items-center">
          <p className="text-blue-100 text-sm font-bold pr-3 sm:text-base">Ver tudo</p>
          <ArrowRight
            size={24}
            color="#2A7AE4"
            weight="bold"
            className="w-4 h-4 sm:w-auto sm:h-auto"
          />
        </a>
      </div>
      <ul className="flex flex-wrap justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </section>
  );
}
