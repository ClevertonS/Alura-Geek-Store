import { IProduct } from '../../../interfaces/IProduct';
import { Cards } from '../../Card';
import { Link } from '../../Link';

interface IListAllProducts {
  handleCategory: IProduct[];
}

function listAllProducts({ handleCategory }: IListAllProducts) {
  return (
    <section className="container-Items bg-black-5 py-8 lg:py-16">
      <div className="flex w-full items-center justify-between pb-4">
        <h2 className="text-[22px] font-bold text-black-100 lg:text-2xl">Todos os produtos</h2>
        <div className="btn-primary flex items-center justify-center">
          <Link href="/create">Criar Produtos</Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <Cards arrayCards={handleCategory} hiddenSelfById={undefined} listAllProducts />
      </div>
    </section>
  );
}

export default listAllProducts;
