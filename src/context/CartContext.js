import React, { createContext, useState } from 'react';

const cartContext = createContext({ cart: [], });
const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  //-----Cargar Productos--------
  function addItem(products, count) {
    const newCart = JSON.parse(JSON.stringify(cart));
    if (isInCart(products.id)) {
      let index = cart.findIndex(e => e.id === products.id)
      newCart[index].count = newCart[index].count + count
    } else {
      newCart.push({ ...products, count });
    }
    setCart(newCart);
  }
  //----------------------------------------
  //-----Estado Productos--------
  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }
  //----------------------------------------
  //-----Contar Productos--------
  function CountCart() {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index].count;
      total = total + element
    }
    return total
  }
  //----------------------------------------
  //-----Remover un Producto--------
  function removeItem(id) {
    const newCart = JSON.parse(JSON.stringify(cart));
    const remove = newCart.filter((item) => item.id !== id);
    return setCart(remove);
  }
  //----------------------------------------
  //-----Remover todos los productos--------
  function removeAll() {
    const newCart = []
    return setCart(newCart)
  }
  //----------------------------------------
  //-----Sumar Precios Productos--------
  function PriceInCart() {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index].cost * cart[index].count;
      total = total + element
    }
    return total
  }

  return (
    <Provider value={{ cart, addItem, CountCart, isInCart, removeItem, removeAll, PriceInCart }}>
      {children}
    </Provider>
  )
};

export default cartContext;
