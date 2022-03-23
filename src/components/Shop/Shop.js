import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    let [products, setProducts] = useState([])
    let [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, []);

    useEffect(() => {
        let storedCart = getStoredCart()
        let savedCart = []
        for (let id in storedCart) {
            let addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                let quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    let handleClick = (product) => {
        // console.log(product);
        // cart.push(product)
        let newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-cont'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div className="product-add">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;