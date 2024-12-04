import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MainPage from './assets/pages/MainPage';
import ProductList from './assets/pages/ProductList';
import ProductDetail from './assets/pages/ProductDetail';
import SellerPage from './assets/pages/SellerPage';
import SellerDetail from './assets/pages/SellerDetail';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        {/* Rota para a página principal */}
        <Route path="/" element={<MainPage />} />

        {/* Rotas para produtos */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Rotas para vendedores */}
        <Route path="/sellers" element={<SellerPage />} />
        <Route path="/seller/:id" element={<SellerDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
