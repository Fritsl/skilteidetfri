import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { StepByStep } from './pages/StepByStep';
import { Cases } from './pages/Cases';
import { Contact } from './pages/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sadan-fungerer-det" element={<StepByStep />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;