import React from 'react';
import NavBar from './components/1-Navbar/navbar';
import ItemListContainer from './components/2-ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/3-ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from "./context/CartContext";
import CartContainer from './components/4-CartContainer/CartContainer';
import Start from './components/5-Start/Start';

//import NotFound from "./pages/NotFound";
//import { exportData } from './Service/DataBase';
//<button onClick={exportData}>exportData</button>
function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/productos/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/productos/:idProduct" element={<ItemDetailContainer />} />
                    <Route path="/Cart" element={<CartContainer />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;