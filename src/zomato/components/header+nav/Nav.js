import React from 'react'
import logo from '../../icon/logo.avif'
import location from '../../icon/location.png'
import search from '../../icon/search.png'

function Nav() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="search-area">
                <img src={location} alt="" />
                <select>
                    <option value="">first</option>
                    <option value="">second</option>
                    <option value="">thrid</option>
                </select>
                <span className="line">|</span>
                <img src={search} alt="" />
                <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
            </div>
            <div className="login-logout">
                <span className="Login"> Log in</span>
                <span className="signup"> Sign up</span>
            </div>
            
        </nav>
    )
}

export default Nav