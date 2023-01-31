import React from 'react'
import './cart.css'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../../redux/slice/CartSlice'
import { addToCart, removeToCart } from '../../redux/slice/CartSlice';

function Cart({ cart }) {

    const dispatch = useDispatch()
    const data = useSelector(state => state.productReducer.products);
    const currCart = data.find((item) => item.id === cart.id);

    const obj = {
        id: cart.id,
        price: currCart.price,
    }

    return (
        <>
            <div className="card">
                <div className="leftBox">

                    <div className="image">
                        <img src={currCart.images[0]} alt="" />
                    </div>
                    <div className="productDetails">

                        <p className="productName">{currCart.title}</p>
                        <p className="productDes"> {currCart.description}</p>
                        <p className="productPrice">
                            ${currCart.price}
                        </p>
                    </div>
                </div>
                <div className="rightBox">

                    <div className="cartBtn">
                        <button className='btn' onClick={() => dispatch(addToCart(obj))}>+</button>
                        <div className="box">
                            <span>{cart.quantity}</span>
                        </div>
                        <button className='btn' onClick={() => dispatch(removeToCart(obj))}>-</button>
                    </div>


                    <div className="remove" onClick={() => dispatch(removeCart(obj))}>
                        <RxCross2 />
                    </div>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Cart