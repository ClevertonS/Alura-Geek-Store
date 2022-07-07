import axios from 'axios';
import { useEffect, useState } from 'react';

import { ICategory } from '../../../../../interfaces/ICategory';
import { Cards } from '../../../../Card';

interface ISimilarProduct {
  categoryId: number | undefined;
  selfId: string | undefined;
}

function SimilarProduct({ categoryId, selfId }: ISimilarProduct) {
  const [handleProducts, setHandleProducts] = useState<ICategory | undefined>();
  useEffect(() => {
    axios
      .get<ICategory>(`http://localhost:4000/category/filter?id=${categoryId}&limit=6`)
      .then((event) => {
        setHandleProducts(event.data);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);
  return (
    <ul className="my-4 flex flex-row flex-wrap justify-between sm:mb-8 md:flex-nowrap xl:mb-16">
      <Cards
        arrayCards={handleProducts?.Products}
        hiddenSelfById={selfId}
        listAllProducts={false}
      />
    </ul>
  );
}

export default SimilarProduct;
