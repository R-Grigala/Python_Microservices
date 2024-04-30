import React from 'react';
import './App.css';
import Products from './admin/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import ProductsCreate from './admin/ProductsCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/products/create' element={<ProductsCreate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
