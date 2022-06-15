import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import { Form } from './form';
import { Links } from './links';

export function Footer() {
  return (
    <footer className="container-Items flex flex-col items-center bg-blue-10 sm:flex-row sm:justify-between">
      <div className="sm:flex sm:flex-col xl:w-1/2 xl:flex-row xl:justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Alura Geek" className="w-[176px]" />
          </Link>
        </div>
        <Links />
      </div>
      <Form />
    </footer>
  );
}
