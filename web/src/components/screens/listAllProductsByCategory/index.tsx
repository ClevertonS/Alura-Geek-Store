import { ICategory } from '../../../interfaces/ICategory';
import { Cards } from '../../Card';

interface IListAllProducts {
  handleCategory: ICategory;
}

function listAllProductsByCategory({ handleCategory }: IListAllProducts) {
  return (
    <section className="container-Items bg-black-5 py-8 lg:py-16">
      <div className="pb-4">
        <h2 className="text-[22px] font-bold text-black-100 lg:text-2xl">
          {handleCategory.category}
        </h2>
      </div>
      <div className="flex flex-wrap justify-between">
        <Cards arrayCards={handleCategory.Products} hiddenSelfById={undefined} listAllProducts />
      </div>
    </section>
  );
}

export default listAllProductsByCategory;
