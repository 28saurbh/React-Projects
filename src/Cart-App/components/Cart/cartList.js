import React from 'react'
import Cart from './cart'
import { Card } from 'antd';
import { useSelector } from 'react-redux';

function CartList() {

    const items = useSelector(state => state.productReducer.products)
    
    return (
        <div className='cardList'>
            <Card title="Your items" style={{
                border: 'none',
            }}>
                {items.map((item) => {
                    return <Cart product={item} key={item.id} />
                })}
            </Card>
        </div>
    )
}

export default CartList