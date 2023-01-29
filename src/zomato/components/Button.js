import React from 'react'
import Filter_icon from '../icon/filter.png'
import up_down_icon from '../icon/up-down.png'


function Button() {

    const btndetails = [
        {
            name: "Filters",
            icon: Filter_icon
        },
        {
            name: "Distance",
            icon: up_down_icon
        },
        {
            name: "Rating: 4.0+",
            icon: ""
        },
        {
            name: "Pubs & Bars",
            icon: ""
        },
    ]

    function render(props, index){
        return (
            <div className='btn' key={index}>
                <button> {props.icon ? <img src={props.icon} />:""  }{props.name}</button>
            </div>
        )
    }
    return (
        <>
            {btndetails.map(render)}
        </>
    )
}

export default Button