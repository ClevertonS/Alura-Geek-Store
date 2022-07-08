import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Footer } from '../src/components/patterns/Footer';
import { Header } from '../src/components/patterns/Header';
import ListAllProducts from '../src/components/screens/listAllProducts';
import { IProduct } from '../src/interfaces/IProduct';
import { TokenService } from '../src/services/auth/tokenService';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get<IProduct>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`);

  return {
    props: {
      res: res.data,
    },
  };
};

function Admin({ res }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header hiddenButton={false} isLogged={TokenService.get() !== undefined} />
      <ListAllProducts handleCategory={res} />
      <Footer />
    </>
  );
}

export default Admin;
