import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <header className="d-flex justify-content-between align-items-center p-4 bg-white shadow">
        <h1 className="fw-bold h4">ProdManage</h1>
        <nav className="d-flex gap-3">
          <Link to="/" className="text-primary text-decoration-none">Home</Link>
          <Link to="/products" className="text-primary text-decoration-none">Products</Link>
          <Link to="/contact" className="text-primary text-decoration-none">Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}