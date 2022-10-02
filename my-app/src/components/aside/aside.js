import React from "react";
import './aside.css'
import {AsideData} from "./data";

function SideBar() {
    return (
        <div className='sideBar'>
            <ul className='sideBarList'>
                {AsideData.map((val, key) => {
                    return (
                        <li key={key} className='aside' onClick={() => {
                            window.location.pathname = val.link
                        }}>
                            <div> {val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar
