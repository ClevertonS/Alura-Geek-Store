import React from 'react';

import logo from '../../assets/Logo.svg';
import { Form } from './form';
import { Links } from './links';

export function Footer() {
  return (
    <footer className="container-Items flex flex-col items-center bg-blue-10 sm:flex-row sm:justify-between">
      <div className="sm:flex sm:flex-col xl:flex-row xl:justify-between xl:w-1/2">
        <div>
          <img src={logo} alt="Logo Alura Geek" className="w-[176px]" />
        </div>
        <Links />
      </div>
      <Form />
    </footer>
  );
}
