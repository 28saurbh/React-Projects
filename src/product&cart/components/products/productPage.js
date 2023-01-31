import React, { useEffect } from 'react'
import Products from './products'
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux/slice/ProductSlice';
import './product.css'

function ProductPage() {

    const dispatch = useDispatch()
    const pd = useSelector(state => state.productReducer.products);

    async function fetchData() {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        let data = await response.json();
        dispatch(setProduct(data));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='productPage'>
            {pd.map((item) => (
                <Products key={item.id} product={item} />
            ))}
        </div>
    )
}

export default ProductPage