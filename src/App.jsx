import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Products from './Components/Products/Products.jsx';
import Home from './Components/Home/Home.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<NotFound />} /> {/**Not found page */}
      </Routes>
    </div>
  );
}

export default App;
