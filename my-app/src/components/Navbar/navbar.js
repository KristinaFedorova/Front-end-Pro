import React, {Component} from 'react';
import {MenuPoints} from './menuPoints';
import './navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className='navbarItems'>
                <ul>
                    {MenuPoints.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.className} href={item.url}>
                                    {item.title}
                                </a>
                            </li>

                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar
