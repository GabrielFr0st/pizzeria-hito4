import React, { useState } from 'react';
import { pizzaCart } from './pizzas';

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const increaseQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);
    };

    const decreaseQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
        } else {
            newCart.splice(index, 1);
        }
        setCart(newCart);
    };

    return (
        <div className="cart-container">
            {cart.map((pizza, index) => (
                <div key={index} className="cart-item">
                    <img src={pizza.image} alt={pizza.name} />
                    <h3>{pizza.name}</h3>
                    <p>Precio: ${pizza.price}</p>
                    <p>Cantidad: {pizza.quantity}</p>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                </div>
            ))}
            <p>Total: ${cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0)}</p>
            <button>Pagar</button>
        </div>
    );
};

export default Cart;
