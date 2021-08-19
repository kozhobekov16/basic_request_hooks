import React from 'react'
import {NavLink} from 'react-router-dom'
const Bar = () => {
    const menu = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/article',
            name: 'Article'
        }
    ]
    const menus = menu.map((elem, i) => <li><NavLink key={i.key} to={elem.path}>{elem.name}</NavLink></li>)
    const styled = {
        padding: '0px 20px 0px 20px'
    }
    return (
        <nav style={styled} className="indigo">
            <div className="nav-wrapper ">
                <NavLink to="/" className="brand-logo">MAIN</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {menus}
                </ul>
            </div>
        </nav>
    )
}
export default Bar