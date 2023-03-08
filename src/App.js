import React from 'react';
import NavBar from './components/Navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import NotFound from "./pages/NotFound";

function App()  {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer />} />
                <Route path="/productos/:idProduct" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
)}

export default App;