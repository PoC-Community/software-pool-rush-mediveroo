import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Order from './pages/Order';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;