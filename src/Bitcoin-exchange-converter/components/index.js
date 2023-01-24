import React, {useEffect, useState, useRef} from 'react'
import './index.css'


function Index() {

    const [currVal, setcurrVal] = useState(["...","..."]);
    const [coinValues, setcoinValues] = useState([]);


    async function CallApi(){
        const response = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
        const data = await response.json();
        setcoinValues(Object.values(data.rates))
    }
    
    useEffect(() => {
        CallApi();
    }, []);


    const renderCard = (props, index) => {
        return <option key={index}>{props.name}</option>
    }
    
    function clickedOption(e){
        let x = e.target.value;
        let ans = coinValues.filter((value) => {
            return value.name === x;
        })
        setcurrVal([ans[0].value, ans[0].unit, ans[0].name]);
    }


    return (
        <div className='container'>
            <div className="bitcoin">
                <h3>1 <span className='right'>BTC</span> </h3>
            </div>
            <div className="other-currency">
                <h3 id='convert'>{currVal[0]} <span className='right'>{currVal[1]}</span> </h3>
                
                <select name="coins" id="coins" onChange={clickedOption}>
                    {coinValues.map(renderCard)}
                </select>
            </div>
        </div>
    )
}

export default Index