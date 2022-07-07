import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

interface IProductPrice {
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export function ProductPrice({ setPrice }: IProductPrice) {
  const [formattedValue, setFormattedValue] = useState('');
  return (
    <fieldset className="input-container mr-4 mb-4 w-full min-w-[177px] px-3 py-2 md:max-w-[559px]">
      <p className="text-xs text-black-50">Preço do Produto</p>
      <NumberFormat
        className="outline-none"
        value={formattedValue}
        thousandSeparator="."
        decimalScale={2}
        decimalSeparator=","
        prefix="R$ "
        required
        onValueChange={(values) => {
          const { formattedValue, floatValue } = values;
          setPrice(floatValue);
          setFormattedValue(formattedValue);
        }}
      />
    </fieldset>
  );
}
