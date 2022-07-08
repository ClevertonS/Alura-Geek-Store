import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { Footer } from '../../src/components/patterns/Footer';
import { Header } from '../../src/components/patterns/Header';
import ListAllProductsByCategory from '../../src/components/screens/listAllProductsByCategory';
import { ICategory } from '../../src/interfaces/ICategory';
import { TokenService } from '../../src/services/auth/tokenService';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { byCategory } = context.query;
  const res = await axios.get<ICategory>(
    `${process.env.DATABASE_URL}/category/${byCategory}/allproducts`,
  );

  return {
    props: {
      res: res.data,
    },
  };
};

function ProductsByCateogory({ res }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(res);
  return (
    <>
      <Head>
        <title>Alura Geek - {res.category}</title>
        <meta name="description" content="Criar Produto Alura Geek" />
      </Head>
      <Header hiddenButton isLogged={TokenService.get() !== undefined} />
      <ListAllProductsByCategory handleCategory={res} />
      <Footer />
    </>
  );
}

export default ProductsByCateogory;
