import { IProduct } from '../../../../interfaces/IProduct';
import SimilarProduct from './SimilarProduct';

interface IProductById {
  handleProduct: IProduct;
}

function ProductById({ handleProduct }: IProductById) {
  return (
    <section className="container-Items relative bg-black-5 px-0 pb-5">
      <div className="flex flex-col sm:flex-row sm:py-8">
        <img
          src={handleProduct?.productImage}
          alt={handleProduct?.title}
          className="sm:container-Items mb-4 max-h-[340px] min-h-[192px] w-full object-cover p-0 sm:mb-0 sm:ml-8 sm:min-h-[157px] sm:min-w-[254px] sm:bg-white sm:object-contain sm:px-0 lg:max-h-[50vw] lg:min-w-[calc(50%-80px)] lg:object-cover xl:ml-[152px] xl:max-h-[560px] xl:min-w-[calc(50%-168px)]"
        />
        <div className="container-Items sm:self-center sm:pl-4">
          <h2 className="text-[22px] font-medium text-black-100 xl:text-[52px]">
            {handleProduct?.title}
          </h2>
          <p className="my-2 text-base font-bold text-black-100">R$ {handleProduct?.price},00</p>
          <p className="text-sm xl:text-base">{handleProduct?.description}</p>
        </div>
      </div>
      <div className="container-Items mb-4 mt-8 sm:mt-16">
        <h3 className="text-[22px] font-bold text-black-100 xl:text-[32px]">Produtos Similares</h3>
        <SimilarProduct
          categoryId={handleProduct === undefined ? 0 : handleProduct.categoryId}
          selfId={handleProduct?.id}
        />
      </div>
    </section>
  );
}

export default ProductById;
