import { nanoid } from '@reduxjs/toolkit'
import { Button, InputNumber } from 'antd'
import Input from 'antd/es/input/Input'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/slice/productSlice'
import { incrementTotal } from '../../redux/slice/TotalSlice'
import './additem.css'

function Additem() {

    const dispatch = useDispatch();
    const inputName = useRef(null);
    const inputPrice = useRef(null);
    

    function CreateNote() {
        console.log(inputPrice)
        const price = parseInt(inputPrice.current.value);

        dispatch(addProduct({
            id: nanoid(),
            name: inputName.current.input.value,
            price: price,
            quantity: 1,
            total: price,
        }))

        dispatch(incrementTotal(price))
    }

    return (
        <div className='addItem'>
            <div className='inputContainer'>
                <Input
                    placeholder="Enter item name"
                    size='middle' className='inputAdditem'  ref={inputName}>
                </Input>
                <InputNumber
                    placeholder="Enter price"
                    size='middle' className='inputAdditem'  ref={inputPrice}>
                </InputNumber>
            </div>
            <Button type="primary" onClick={CreateNote}>Add Item</Button>
        </div>
    )
}

export default Additem