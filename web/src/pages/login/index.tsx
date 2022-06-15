import React from 'react';

export function Login() {
  return (
    <section className="flex h-[473px] flex-row items-center justify-center bg-black-5">
      <form action="" className="flex w-full flex-col items-center self-center lg:max-w-[425px]">
        <h2 className=" mb-6 text-lg font-bold text-black-100">Iniciar Sessão</h2>
        <fieldset className="input-container mb-4 h-16 w-full px-3 py-2 md:max-w-[559px]">
          <p className="text-sm text-black-50">Escreve seu email</p>
          <input type="email" className="w-full outline-none md:max-w-[559px]" />
        </fieldset>
        <fieldset className="input-container mb-4 h-16 w-full px-3 py-2 md:max-w-[559px]">
          <p className="text-sm text-black-50">Escreve sua senha</p>
          <input type="password" className="w-full outline-none md:max-w-[559px]" />
        </fieldset>
        <button type="submit" className="btn-primary w-full">
          Entrar
        </button>
      </form>
    </section>
  );
}
