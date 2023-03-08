import React from "react";
import './cartwidget.css';
import { HiOutlineShoppingCart } from "react-icons/hi";

function CartWidget() {
    
    return (
        <div className='cart-widget'>
            <div className="cart">
                <HiOutlineShoppingCart/>
            </div>
            <div className="cart-num">
                5
            </div>
        </div>
    );
}

export default CartWidget;