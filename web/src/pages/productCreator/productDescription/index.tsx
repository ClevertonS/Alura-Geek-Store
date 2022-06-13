import React from 'react';

interface IProductDescription {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export function ProductDescription({ description, setDescription }: IProductDescription) {
  return (
    <fieldset className="input-container h-[82px] w-full px-3 py-4 md:max-w-[559px]">
      <input
        type="textArea"
        placeholder="Descrição do produto"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        className="w-full pb-[30px] outline-none"
      />
    </fieldset>
  );
}
