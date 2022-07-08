import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { Footer } from '../src/components/patterns/Footer';
import { Header } from '../src/components/patterns/Header';
import { CreateProductSection } from '../src/components/screens/Create/index ';
import { ICategory } from '../src/interfaces/ICategory';
import { TokenService } from '../src/services/auth/tokenService';

export async function getServerSideProps(ctx: null) {
  const token = TokenService.get(ctx);
  let isAuthorized = false;
  await axios
    .get<ICategory[]>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      isAuthorized = true;
    })
    .catch(() => {
      alert('não autorizado');
      isAuthorized = false;
    });
  if (isAuthorized === false) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {
      res: isAuthorized,
    },
  };
}

function Create() {
  return (
    <>
      <Head>
        <title>Alura Geek - Criar Produto</title>
        <meta name="description" content="Criar Produto Alura Geek" />
      </Head>
      <Header hiddenButton isLogged={false} />
      <CreateProductSection />
      <Footer />
    </>
  );
}

export default Create;
