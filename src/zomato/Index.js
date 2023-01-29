import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './components/header+nav/Header'
import Delivery from './pages/Delivery'
import Nightlife from './pages/Nightlife'
import Diningout from './pages/Diningout'
import Button from './components/Button'
import './style.css'

function index() {
    return (
        <>
            <div className="container">
                <Header />
            </div>

            <hr />
            

            <Routes>
                <Route path='/' element={<Delivery />} />
                <Route path='/Dining-out' element={<Diningout />} />
                <Route path='/Nightlife' element={<Nightlife />} />
            </Routes>
        </>

    )
}

export default index