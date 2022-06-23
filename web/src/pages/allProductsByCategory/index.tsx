import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Cards } from '../../components/card';
import { ICategory } from '../../interface/ICategory';

export function AllProductsByCategory() {
  const [handleProducts, setHandleProducts] = useState<ICategory>();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      axios
        .get<ICategory>(`http://localhost:4000/category/${params.id}/allproducts`)
        .then((event) => {
          setHandleProducts(event.data);
        })
        .catch((error) => console.log(error));
    }
  }, []);
  return (
    <section className="container-Items bg-black-5">
      <h2 className="py-8 text-[22px] font-bold text-black-100 xl:pt-16 xl:text-[32px]">
        {handleProducts?.category}
      </h2>
      <ul className="flex flex-row flex-wrap justify-between pb-[32px] xl:pb-[64px]">
        <Cards arrayCards={handleProducts?.Products} hiddenSelfById={undefined} />
      </ul>
    </section>
  );
}
