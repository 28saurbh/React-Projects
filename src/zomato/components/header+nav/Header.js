import React, {  useState } from 'react';
import Nav from './Nav';
import Tab from './Tab';


function Header() {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        <header>
            <Nav />
            <section className="path">
                <span>Home</span>
                <span>/</span>
                <span>india</span>
                <span>/</span>
                <span >Delhi NCR Restaurants</span>
            </section>

        
            <div className="tab-main">
                <Tab  activeTab={activeTab} setActiveTab={setActiveTab}/>
            </div>

        </header>
    )
}

export default Header