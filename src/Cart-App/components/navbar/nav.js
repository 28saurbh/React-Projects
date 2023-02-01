import React from 'react'
import { useSelector } from 'react-redux'
import './nav.css'

function Nav() {

    const quantity = useSelector(state => state.TotalSlice.totalQuantity);
    const price = useSelector(state => state.TotalSlice.totalPrice);

    return (
        <nav>
            <p>Total quantity : {quantity}</p>
            <p>Total amount : {price}</p>
        </nav>
    )
}

export default Nav