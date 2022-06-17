import axios from 'axios';
import { ArrowRight } from 'phosphor-react';
import React, { useEffect, useState } from 'react';

import { Cards } from '../../components/card';
import { ICategory } from '../../interface/ICategory';
import { useWindowDimensions } from '../../widget/getWidht';

export function Category() {
  const { width } = useWindowDimensions();
  const [handleCategory, setHandleCategory] = useState<ICategory[]>();
  const [cardLimit, setCardLimit] = useState<number>(() => {
    if (width > 1096) {
      return 6;
    }
    return 4;
  });

  function qntCard() {
    if (width > 1096) {
      setCardLimit(6);
      console.log(width);
    } else {
      setCardLimit(4);
    }
    return cardLimit;
  }

  useEffect(() => {
    axios
      .get<ICategory[]>(`http://localhost:4000/category/limit=${qntCard()}`)
      .then((event) => {
        setHandleCategory(event.data);
      })
      .catch((error) => console.log(error));
  }, [width]);

  return (
    <section className="container-Items bg-black-5 py-4">
      {handleCategory?.map((item) => (
        <div key={item.id}>
          <div className="flex items-center justify-between sm:py-4 xl:pt-12">
            <h3 className="subTitle">{item.category}</h3>
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
          <ul className="flex flex-row flex-wrap justify-between md:flex-nowrap">
            <Cards arrayCards={item.Products} />
          </ul>
        </div>
      ))}
    </section>
  );
}
