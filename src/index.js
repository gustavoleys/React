import React from 'react';
import ReactDOM from 'react-dom/client';
import ListMarca from './components/ItemListContainer';
import NavBar from './components/navbar';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
const listmarca = ReactDOM.createRoot(document.getElementById('listamarcas'));
listmarca.render(
  <React.StrictMode>
    <ListMarca />
  </React.StrictMode>
);

reportWebVitals();
