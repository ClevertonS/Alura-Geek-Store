import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';

import { Footer } from '../src/components/patterns/Footer';
import { Header } from '../src/components/patterns/Header';
import authService from '../src/services/auth';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginPostUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`;
  return (
    <>
      <Head>
        <title>Alura Geek - Login</title>
        <meta name="description" content="Pagina Inicial Alura Geek" />
      </Head>
      <Header hiddenButton={false} isLogged={false} />
      <main>
        <section className="flex h-[473px] flex-row items-center justify-center bg-black-5">
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              authService.login(loginPostUrl, { username: login, password });
            }}
            className="flex w-full flex-col items-center self-center lg:max-w-[425px]"
          >
            <h2 className=" mb-6 text-lg font-bold text-black-100">Iniciar Sessão</h2>
            <fieldset className="input-container mb-4 h-16 w-full px-3 py-2 md:max-w-[559px]">
              <p className="text-sm text-black-50">Escreve seu email</p>
              <input
                type="email"
                onChange={(value) => setLogin(value.target.value)}
                className="w-full outline-none md:max-w-[559px]"
              />
            </fieldset>
            <fieldset className="input-container mb-4 h-16 w-full px-3 py-2 md:max-w-[559px]">
              <p className="text-sm text-black-50">Escreve sua senha</p>
              <input
                type="password"
                onChange={(value) => setPassword(value.target.value)}
                className="w-full outline-none md:max-w-[559px]"
              />
            </fieldset>
            <button type="submit" className="btn-primary w-full  bg-blue-100">
              Entrar
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Login;
