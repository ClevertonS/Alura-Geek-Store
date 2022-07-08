import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React from 'react';

import { Link } from '../src/components/Link';
import { Footer } from '../src/components/patterns/Footer';
import { Header } from '../src/components/patterns/Header';
import Categorys from '../src/components/screens/HomeScreen/Categorys';
import { ICategory } from '../src/interfaces/ICategory';
import { api } from '../src/lib/api';
import { TokenService } from '../src/services/auth/tokenService';

export async function getServerSideProps(ctx: null) {
  const token = TokenService.get(ctx);
  console.log(token);
  const res = await axios.get<ICategory[]>(`${process.env.NEXT_API_URL}/category/limit=6`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
  return {
    props: {
      res: res.data,
    },
  };
}

function HomeScreen({ res }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Alura Geek</title>
        <meta name="description" content="Pagina Inicial Alura Geek" />
      </Head>
      <Header hiddenButton isLogged={TokenService.get() !== undefined} />
      <main className="">
        <section
          className="container-Items position flex h-[192px] flex-col
           justify-end bg-cover py-4 sm:h-[352px] sm:bg-cover sm:py-8"
        >
          <style jsx>
            {`
              section {
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
                  url('/images/banner-image.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              }
            `}
          </style>
          <h2 className="text-[22px] font-bold text-white sm:text-[52px]">Dezembro Promocional</h2>
          <h3 className="my-2 text-sm font-semibold text-white sm:my-4 sm:text-[22px] sm:font-bold">
            Produtos selecionados com 33% de desconto
          </h3>
          <div className="btn-primary mr-auto">
            <Link href="/category/1">Ver Consoles</Link>
          </div>
        </section>
        <section className="container-Items bg-black-5 py-4">
          <Categorys handleCategory={res} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomeScreen;
