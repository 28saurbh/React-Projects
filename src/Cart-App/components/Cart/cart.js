import React from 'react'
import { Card } from 'antd';
import './cart.css'
import { useDispatch } from 'react-redux';
import { incrementCart, decrementCart } from '../../redux/slice/productSlice';
import { incrementTotal, decrementTotal } from '../../redux/slice/TotalSlice';

function Cart({ product }) {

    const dispatch = useDispatch()
    const price = product.price;

    function increment() {
        dispatch(incrementCart(
            { id: product.id, price: price }
        ))
        dispatch(incrementTotal(parseInt(price)));

    }

    function decrement() {
        dispatch(decrementCart(
            {
                id: product.id, price: price
            }
        ))
        dispatch(decrementTotal(parseInt(price)));
    }

    return (
        <>
            <Card type='inner' style={{
                marginTop: 16,
                backgroundColor: '#f0f0f0',
                border: '2px solid rgba(128, 128, 128, 0.529)',
                borderRadius: 'none',
                fontSize: '1.1rem'
            }}>
                <div className="card">
                    <div className="productDetails">
                        <p>{product.name}</p>
                        <button onClick={increment}>+</button>
                        <p>{product.quantity}</p>
                        <button onClick={decrement}>-</button>
                    </div>
                    <div className="price">
                        <p>Rs. {product.total}</p>
                    </div>
                </div>
            </Card>

        </>
    )
}

export default Cart