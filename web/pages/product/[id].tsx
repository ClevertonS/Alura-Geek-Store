import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { Footer } from '../../src/components/patterns/Footer';
import { Header } from '../../src/components/patterns/Header';
import ProductById from '../../src/components/screens/Product/ProductById';
import { IProduct } from '../../src/interfaces/IProduct';
import { TokenService } from '../../src/services/auth/tokenService';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get<IProduct>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${id}`);

  return {
    props: {
      res: res.data,
    },
  };
};

function VerProduto({ res }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Alura Geek - {res.title}</title>
        <meta name="description" content="Pagina Inicial Alura Geek" />
      </Head>
      <Header hiddenButton isLogged={TokenService.get() !== undefined} />
      <main className="">
        <ProductById handleProduct={res} />
      </main>
      <Footer />
    </>
  );
}

export default VerProduto;
