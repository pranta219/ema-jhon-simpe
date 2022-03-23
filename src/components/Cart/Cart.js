import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let { cart } = props

    let total = 0
    let shipping = 0

    for (let product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }

    let tax = parseFloat((total * 0.1).toFixed(2))
    let grandTotal = total + shipping + tax
    return (
        <div className='Cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;