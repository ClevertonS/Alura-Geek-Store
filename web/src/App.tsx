import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Creditos } from './components/creditos';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Category } from './pages/category';
import { Emphasis } from './pages/category/emphasis';
import { Login } from './pages/login';
import { CreateProduct } from './pages/productCreator';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <Emphasis />
                <Category />
              </>
            }
          />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
      <Creditos />
    </Router>
  );
}

export default App;
