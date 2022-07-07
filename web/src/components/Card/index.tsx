import React from 'react';

import { IProduct } from '../../interfaces/IProduct';
import { Link } from '../Link';

interface ICardsProps {
  arrayCards: IProduct[] | undefined;
  hiddenSelfById: string | undefined;
  listAllProducts: boolean;
}

export function Cards({ arrayCards, hiddenSelfById, listAllProducts }: ICardsProps) {
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
            className="w-full min-w-[156px] max-w-[calc(50%-8px)] list-none flex-row pb-4 sm:mr-2 sm:last:mr-0 md:w-[30%] md:min-w-[164px] md:max-w-[250px] xl:pb-16"
          >
            {listAllProducts ? (
              <style jsx>
                {`
                  @media (max-width: 1128px) {
                    li:nth-child(n+5) {
                        display: none;
                }
              }
              }
            `}
              </style>
            ) : (
              <style jsx>
                {`
              }
            `}
              </style>
            )}

            <img
              src={card.productImage}
              alt={card.title}
              className="h-[174px] w-full object-cover sm:w-full xl:w-full"
            />
            <h4 className="pt-2 text-sm font-medium text-black-100">{card.title}</h4>
            <h3 className="py-2 text-base font-bold text-black-100">R$ {card.price}</h3>
            <div className="pr-3 text-sm font-bold text-blue-100">
              <Link href={`/product/${card.id}`}>Ver Produto</Link>
            </div>
          </li>
        );
      })}
    </>
  );
}
