import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { PokemonesPage } from './pages/PokemonesPage'
import { PokemonPage } from './pages/PokemonPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <br />
        <Routes>
          <Route path='/' element={<PokemonesPage />} />
          <Route path='/pokemones' element={<PokemonesPage />}>
          </Route>
          <Route path='/pokemon/:nombre' element={<PokemonPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
