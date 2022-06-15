import { ArrowRight } from 'phosphor-react';
import React from 'react';

import { Card } from '../../components/card';

export function Category() {
  return (
    <section className="container-Items bg-black-5 py-4">
      <div className="flex items-center justify-between sm:py-4 xl:pt-12">
        <h3 className="subTitle">Star Wars</h3>
        <a href="Testando1-2-3" className="flex items-center">
          <p className="pr-3 text-sm font-bold text-blue-100 sm:text-base">Ver tudo</p>
          <ArrowRight
            size={24}
            color="#2A7AE4"
            weight="bold"
            className="h-4 w-4 sm:h-auto sm:w-auto"
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
