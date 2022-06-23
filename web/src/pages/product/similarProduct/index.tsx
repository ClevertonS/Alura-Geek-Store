import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Cards } from '../../../components/card';
import { ICategory } from '../../../interface/ICategory';
import { useWindowDimensions } from '../../../widget/getWidht';

interface ISimilarProduct {
  categoryId: number | undefined;
  selfId: string | undefined;
}

export function SimilarProduct({ categoryId, selfId }: ISimilarProduct) {
  const { width } = useWindowDimensions();
  const [handleProducts, setHandleProducts] = useState<ICategory | undefined>();
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
      .get<ICategory>(`http://localhost:4000/category/filter?id=${categoryId}&limit=${qntCard()}`)
      .then((event) => {
        setHandleProducts(event.data);
      })
      .catch((error) => console.log(error));
  }, [width, categoryId]);
  return (
    <ul className="my-4 flex flex-row flex-wrap justify-between sm:mb-8 md:flex-nowrap xl:mb-16">
      <Cards arrayCards={handleProducts?.Products} hiddenSelfById={selfId} />
    </ul>
  );
}
