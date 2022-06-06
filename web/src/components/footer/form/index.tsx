import React from 'react';

export function Form() {
  return (
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
  );
}
