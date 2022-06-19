import React from 'react';
import { Link } from 'react-router-dom';

import { IProduct } from '../../interface/IProduct';

interface ICardsProps {
  arrayCards: IProduct[] | undefined;
  hiddenSelfById: string | undefined;
}

export function Cards({ arrayCards, hiddenSelfById }: ICardsProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {arrayCards?.map((card) => {
        if (card.id === hiddenSelfById) {
          return <li className="hidden" key={card.id} />;
        }
        return (
          <li
            key={card.id}
            className="w-full min-w-[156px] max-w-[calc(50%-8px)] flex-row sm:mr-2  sm:last:mr-0 "
          >
            <img
              src={card.productImage}
              alt={card.title}
              className="h-[174px] w-full object-cover sm:w-full xl:w-full"
            />
            <h4 className="pt-2 text-sm font-medium text-black-100">{card.title}</h4>
            <h3 className="py-2 text-base font-bold text-black-100">R$ {card.price}</h3>
            <Link to={`/product/${card.id}`} className="pr-3 text-sm font-bold text-blue-100">
              Ver Produto
            </Link>
          </li>
        );
      })}
    </>
  );
}
