import Image from 'next/image';
import React from 'react';

import logo from '../../../../public/logo.svg';
import { Link } from '../../Link';
import { Form } from './form';
import { Links } from './links';

export function Footer() {
  return (
    <footer className="container-Items flex flex-col items-center bg-blue-10 py-4 sm:flex-row sm:justify-between sm:py-8 xl:py-16">
      <div className="sm:flex sm:flex-col xl:w-1/2 xl:flex-row xl:justify-between">
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo Alura Geek" className="w-[176px]" />
          </Link>
        </div>
        <Links />
      </div>
      <Form />
    </footer>
  );
}
