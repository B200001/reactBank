import '../../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";


const Home = () => {
    return <>
        <div className='home_page'>
            <h1 className='home_h1'>Welcome To South East Bank.</h1>
            <div className='home_container'>
                <div className='home_items'>
                    <p className='home_p'>Banking At Your Tips.</p>
                </div>
                <div className='home_items'>
                    <h2 className='home_h2'>Open a checking account now</h2>
                    <button className='home_button'><Link to='/Create' className='home_button_link'>Open Account</Link></button>

                </div>
            </div>

        </div>

    </>
}
export default Home;