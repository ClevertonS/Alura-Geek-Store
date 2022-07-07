import { ArrowRight } from 'phosphor-react';
import React from 'react';

import { ICategory } from '../../../../interfaces/ICategory';
import { Cards } from '../../../Card';
import { Link } from '../../../Link';

interface ICategorys {
  handleCategory: ICategory[];
}

function Categorys({ handleCategory }: ICategorys) {
  return (
    <section className="bg-black-5 py-4">
      {handleCategory.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between pb-4">
            <h3 className="subTitle">{item.category}</h3>
            <div className="flex  items-center">
              <Link href={`/category/${item.id}`}>
                <p className="pr-3 text-sm font-bold text-blue-100 sm:text-base">Ver tudo</p>
                <ArrowRight
                  size={24}
                  color="#2A7AE4"
                  weight="bold"
                  className="h-4 w-4 sm:h-auto sm:w-auto"
                />
              </Link>
            </div>
          </div>
          <ul className="flex flex-row flex-wrap justify-between md:flex-nowrap">
            <Cards arrayCards={item.Products} hiddenSelfById={undefined} listAllProducts={false} />
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Categorys;
