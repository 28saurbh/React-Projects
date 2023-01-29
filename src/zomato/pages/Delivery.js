import React from 'react'
import Delivery_top_foods from '../components/Delivery/Delivery_top_foods'
import Delivery_items from "../components/Delivery/Delivery_items";
import Button from '../components/Button';


function Delivery() {
    return (
        <>
            <div className="container">
                <div className="btn-area">
                    <Button />
                </div>
            </div>
            <Delivery_top_foods />
            <div className="container">
                <Delivery_items />
            </div>
        </>
    )
}

export default Delivery