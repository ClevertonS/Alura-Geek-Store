import axios from 'axios';
import React, { useState } from 'react';

import { ProductDescription } from './productDescription';
import { NameProduct } from './productName';
import { ProductPrice } from './productPrice';
import { SelectCategory } from './selectCategory';
import { SelectImage } from './selectImage';
import { LoadImage } from './selectImage/loadImage';

export function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | undefined>();
  const [image, setImage] = useState<string | undefined>('');
  const [category, setCategory] = useState<string>('');

  function onSubmitFrom(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/category/product', {
        title: name,
        category,
        productImage: image,
        description,
        price,
      })
      .then(() => {
        console.log('Produto cadastrado com sucesso');
      })
      .catch((error) => console.log(error));
  }

  return (
    <section className="container-Items bg-black-5">
      <div className="m-auto flex flex-col md:max-w-[559px]">
        <h2 className="subTitle pb-4">Adcionar novo produto</h2>
        <form action="submit" onSubmit={onSubmitFrom} className="flex flex-col items-center">
          <NameProduct name={name} setName={setName} />
          <div className="flex w-full md:max-w-[559px]">
            <ProductPrice setPrice={setPrice} />
            <SelectImage setImage={setImage} />
          </div>
          <LoadImage image={image} />
          <SelectCategory category={category} setCategory={setCategory} />
          <ProductDescription description={description} setDescription={setDescription} />
          <button type="submit" className="btn-primary mt-4 w-full md:max-w-[559px]">
            Adcionar produto
          </button>
        </form>
      </div>
    </section>
  );
}
