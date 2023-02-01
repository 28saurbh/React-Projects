import React from 'react'
import Nav from './navbar/nav'
import './index.css'
import Additem from './addItemCart/addItem'
import CartList from './Cart/cartList'

function Index() {
    return (
        <div className='container'>
            <Nav />
            <main>

                <Additem />
                <CartList />
            </main>
        </div>
    )
}

export default Index