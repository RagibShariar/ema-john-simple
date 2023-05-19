import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    

    for (const product of cart){
        total= total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = (total * 0.1).toFixed(2);
    let grandTotal = total+shipping+ parseFloat(tax);

    return (
        <div className="cart-details">
            <h2>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
            </div>
            <div className='btn'>
                <button className='clear-cart'>Clear Cart
                    <FontAwesomeIcon icon={faTrashCan} className='trash-can' />
                </button>
                <button className='review-order'>Review Order
                    <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                </button>
            </div>
        </div>
    );
};

export default Cart;