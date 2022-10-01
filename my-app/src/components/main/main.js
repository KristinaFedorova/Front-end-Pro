import React from "react";
import './main.css'
import picture from './pexels-photo-1450340.jpeg'

function MainPage() {
    return (
        <div className='mainPage'>
            <h1 className='title'>Tourism </h1>
            <div className='buttons'>
                <button className='button'><a>print</a></button>
                <button className='button'><a>share</a></button>
                <button className='button'><a>feedback</a></button>
                <button className='button'><a>info</a></button>
            </div>
            <div className='text'> By John K. Walton • Last Updated: Aug 24, 2022 • Edit History</div>
                <picture className='pic'/>

        </div>
    )
}

export default MainPage