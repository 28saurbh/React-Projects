import React from 'react'
import './style.css'
import Nav from '../navbar/navbar'
import Productpage from '../products/productPage'
import CartList from '../cartPage/cartList'
import { Route, Routes } from "react-router-dom";


function Index() {
    return (
        <div>
            <Nav/>
            

            <Routes>
                <Route path='/' element={<Productpage/>}></Route>
                <Route path='/cart' element={<CartList/>}></Route>
            </Routes>
        </div>
    )
}

export default Index;