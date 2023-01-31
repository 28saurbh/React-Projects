import React from 'react'
import './nav.css'
import { BsCart4 } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {

    const cart = useSelector(state => state.cartReducer.cartValue);
    let cnt = 0;
    cart.forEach(element => {
        cnt += element.quantity;
    });

    return (
        <nav>
            { <Link to={'/'}><h2>Product Page</h2></Link> }
            {<Link to={'/cart'}>
                <div className="cartIcon">
                    <BsCart4 size={20} />
                    <h4>{cnt} Cart Item</h4>
                </div>
            </Link>}

        </nav>
    )
}

export default Navbar