import React from 'react';

import { Category } from './components/category';
import { Creditos } from './components/creditos';
import { Emphasis } from './components/emphasis';
import { Footer } from './components/footer';
import { Header } from './components/header';

function App() {
  return (
    <>
      <Header />
      <Emphasis />
      <Category />
      <Footer />
      <Creditos />
    </>
  );
}

export default App;
