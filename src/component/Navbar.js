import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div>

                <div className='navbar'>
                    <span className='header-itm1'>
                        Logo
                    </span>
                    <span>
                        {/* <Link className='header-itm' to={'/Home'}>Home</Link>
                        <Link className='header-itm' to={'/Tasks'}>Tasks</Link>
                        <Link className='header-itm' to={'/User'}>User</Link> */}
                        <NavLink className='header-itm' to={'/Home'}>Home</NavLink>
                        <NavLink className='header-itm' to={'/Tasks'}>Tasks</NavLink>
                        <NavLink className='header-itm' to={'/User'}>User</NavLink>
                    </span>
                </div>
            </div>
        )
    }
}