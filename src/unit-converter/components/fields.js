import React from 'react'
import './App.css';

function Fields() {
    let feetVal = document.getElementById('Feet');
    let meterVal = document.getElementById('Meters');
    let inchVal = document.getElementById('Inches');
    let cmVal = document.getElementById('cm');
    let yardVal = document.getElementById('Yards');
    let kiloVal = document.getElementById('Kilometers');
    let mileVal = document.getElementById('miles');
    

    function Feet(event){
        
        let val = event.target.value;
        let ans = [val*0.304, val*12, val*30.48, val/3, val/3281, val/5280];
        // set([val+0, val*0.304, val*12, val*30.48, val/3, val/3281, val/5280]);
        meterVal.value = ans[0].toFixed(4);
        inchVal.value = ans[1].toFixed(4);
        cmVal.value = ans[2].toFixed(4);
        yardVal.value = ans[3].toFixed(4);
        kiloVal.value = ans[4].toFixed(4);
        mileVal.value = ans[5].toFixed(4);
    }
    function Meters(event){
        let val = event.target.value;
        feetVal.value = val*3.281;
        inchVal.value = val*39.37;
        cmVal.value = val*100;
        yardVal.value = val*1.094;
        kiloVal.value = val/1000;
        mileVal.value = val/1609;
    }
    function Inches(event){
        let val = event.target.value;
        let ans = [val/12, val/39.37, val*2.54, val/36, val/39370, val/63360]
        feetVal.value = ans[0].toFixed(2);
        meterVal.value = ans[1].toFixed(2);
        cmVal.value = ans[2].toFixed(2);
        yardVal.value = ans[3].toFixed(4);
        kiloVal.value = ans[4].toFixed(8);
        mileVal.value = ans[5].toFixed(8);
    }

    return (
        <div className='fields'>
            <div>
                <label htmlFor="Feet">Feet</label>
                <input type="number" id='Feet' onChange={Feet}/>
            </div>
            <div>
                <label htmlFor="meters">Meter</label>
                <input type="number" id='Meters' onChange={Meters}  />
            </div>
            <div>
                <label htmlFor="Inches">Inches</label>
                <input type="text" id='Inches' onChange={Inches}/>
            </div>
            <div>
                <label htmlFor="cm">cm</label>
                <input type="text" name="" id="cm" />
            </div>
            <div>
                <label htmlFor="Yards">Yards</label>
                <input type="text" id='Yards' />
            </div>
            <div>
                <label htmlFor="Kilometers">Kilometers</label>
                <input type="text" id='Kilometers' />
            </div>
            <div>
                <label htmlFor="miles">Miles</label>
                <input type="text" id='miles' />
            </div>
        </div>
    )
}

export default Fields