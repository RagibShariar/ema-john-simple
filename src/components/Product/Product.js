import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props.product);
    const { handleAddToCart } = props;
    const { name, img, price, seller, ratings } = props.product;

    return (
        <div className='product-card'>
            <div className="product-info">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p className='product-price'>Price: ${price}</p>

                <p className='seller'><small>Manufacturer: {seller}</small></p>
                <p className='ratings'><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;