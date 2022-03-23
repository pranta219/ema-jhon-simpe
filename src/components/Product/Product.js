import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleClick }) => {
    // let { product, handleClick } = props
    let { name, img, seller, price, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt="#" />
            <div className='info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handleClick(product)} className='btn-cart'>
                <p className='add-cart'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;