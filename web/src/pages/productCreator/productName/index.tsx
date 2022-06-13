import React from 'react';

interface IProductName {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export function NameProduct({ name, setName }: IProductName) {
  return (
    <fieldset className="input-container mb-4 w-full px-3 py-2 md:max-w-[559px]">
      <p className="text-xs text-black-50">Nome do Produto</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="w-full outline-none md:max-w-[559px]"
      />
    </fieldset>
  );
}
