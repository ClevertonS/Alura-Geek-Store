import React, { useState } from 'react';

export function Form() {
  const [name, setName] = useState('André Lisboa');
  const [message, setMessage] = useState('');

  return (
    <form action="" className="w-full sm:w-2/3 sm:self-start xl:w-1/2">
      <p className="text-base font-bold text-black-100">Fale Conosco</p>
      <fieldset className="input-container mb-4 w-full px-3 py-2">
        <p className="text-xs text-black-50">Nome</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onClick={() => setName('')}
          className="w-full outline-none"
          onBlur={() => {
            if (name === '') {
              return setName('André Lisboa');
            }
            return name;
          }}
        />
      </fieldset>
      <fieldset className="input-container h-[82px] w-full px-3 py-4 ">
        <input
          onChange={(event) => setMessage(event.target.value)}
          value={message}
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
