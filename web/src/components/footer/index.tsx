import React from 'react';

import logo from '../../assets/Logo.svg';

export function Footer() {
  return (
    <footer className="container-Items flex flex-col items-center bg-blue-10 sm:flex-row sm:justify-between">
      <div className="sm:flex sm:flex-col xl:flex-row xl:justify-between xl:w-1/2">
        <div>
          <img src={logo} alt="Logo Alura Geek" className="w-[176px]" />
        </div>
        <ul className="flex flex-col items-center sm:items-start xl:mr-28">
          <li className="font-medium text-black-100 text-base my-4 sm:mb-6">
            <a href="teste">Quem somos nós</a>
          </li>
          <li className="font-medium text-black-100 text-base mb-4 sm:mb-6">
            <a href="teste">Política de privacidade</a>
          </li>
          <li className="font-medium text-black-100 text-base mb-4 sm:mb-6">
            <a href="teste">Programa fidelidade</a>
          </li>
          <li className="font-medium text-black-100 text-base mb-4 sm:mb-6">
            <a href="teste">Nossas lojas</a>
          </li>
          <li className="font-medium text-black-100 text-base mb-4 sm:mb-6">
            <a href="teste">Quero ser franqueado</a>
          </li>
          <li className="font-medium text-black-100 text-base mb-4">
            <a href="teste">Anuncie aqui</a>
          </li>
        </ul>
      </div>
      <form action="" className="w-full sm:w-2/3 sm:self-start xl:w-1/2">
        <p className="font-bold text-black-100 text-base">Fale Conosco</p>
        <fieldset className="bg-white rounded-[4px] w-full h-14 px-3 py-2 mb-4 shadow-sm font-sans">
          <p className="text-black-50 text-xs">Nome</p>
          <input id="name" type="text" value="André Lisboa" className="w-full outline-none" />
        </fieldset>
        <fieldset className="bg-white rounded-[4px] w-full h-[82px] px-3 py-4 shadow-sm">
          <input
            type="textArea"
            placeholder="Escreva sua mensagem"
            className="w-full pb-[30px] outline-none"
          />
        </fieldset>
        <button type="submit" className="btn-primary mt-2">
          Enviar Mensagem
        </button>
      </form>
    </footer>
  );
}
