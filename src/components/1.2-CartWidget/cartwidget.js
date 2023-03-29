import React, { useContext } from "react";
import './cartwidget.css';
import { HiOutlineShoppingCart } from "react-icons/hi";
import cartContext from "../../context/CartContext";

function CartWidget() {
    const { CountCart } = useContext(cartContext)
    const cartCount = CountCart();
    return (
        <div className='cart-widget'>
            {cartCount !== 0 ? (
                <div className="cart-num">
                    {cartCount}
                </div>) :
                (<></>)
            }
            <HiOutlineShoppingCart />
        </div>
    );
}

export default CartWidget;