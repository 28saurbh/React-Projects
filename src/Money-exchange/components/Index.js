import React, { useState, useRef, useEffect } from 'react'
import './index.css'


function Index() {

    const InputQuantity = useRef(null);
    const FirstSelect = useRef();
    const secondSelect = useRef();

    const [output, setOutput] = useState();
    const [apiData, setapiData] = useState([]);
    const [currKey, setCurrKey] = useState([]);

    async function CallApi() {
        try {
            const response = await fetch('https://open.er-api.com/v6/latest/USD');
            const data = await response.json();
            setapiData(data.rates);
            setCurrKey(Object.keys(data.rates));
        } catch (event) {
            console.log(event);
        }
    }


    useEffect(() => {
        CallApi();
    }, []);


    function handleClick() {
        let from = FirstSelect.current.value;
        let to = secondSelect.current.value;
        let quantity = InputQuantity.current.value;

        let arr = Object.entries(apiData);

        let fromValue = arr.filter((item) => {
            return item[0] === from;
        })

        let toValue = arr.filter((item) => {
            return item[0] === to;
        })

        // console.log(fromValue[0][1], toValue[0][1]);
        // console.log((toValue[0][1] * quantity) / fromValue[0][1]);

        const ans = (toValue[0][1] * quantity) / fromValue[0][1];
        setOutput(ans.toFixed(4));

    }

    return (
        <div className='container'>
            <div className="quantity">
                <input type="text" ref={InputQuantity} />
            </div>
            <div className="selectionContainer">
                <select ref={FirstSelect}>
                    {currKey.map((val, index) => <option value={val} key={index} >{val}</option>)}
                </select>
                <select ref={secondSelect}>
                    {currKey.map((val, index) => <option key={index} value={val}>{val}</option>)}
                </select>
            </div>
            <button onClick={handleClick}>Convert</button>
            <div className="output">
                <h4>{output}</h4>
            </div>
        </div>
    )
}

export default Index


