import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './ItemCount.css'

function ItemCount({ initial, stock, addCart }) {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };
    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    return (
        <div>
            <div className='divCount'>
                <Button variant='secondary' className='buttonCount' onClick={decrease}>-</Button>
                <span className='count'>{count}</span>
                <Button variant='secondary' className='buttonCount' onClick={increase}>+</Button>
            </div>
            <div className='addCart'>
                <Button variant='primary' size="lg" onClick={() => addCart(count)}>Agrega al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount