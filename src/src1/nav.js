import React from 'react'
import { navMenu } from './data'
import { Link } from 'react-router-dom'
import './style/nav.scss'
import {FaSchool} from 'react-icons/fa'

const Nav = () => {
    return (
        <div className="nav-containet">
            <div className="icon"><i><Link to="/"><FaSchool className="nav-icon"/></Link></i></div>
            <nav className="nav">
                <ul className="nav-items">
                    {navMenu.map((item) => {
                       return <li key={item.id}><Link to={item.link} className="link">{item.title}</Link></li>
                    })}
                </ul>
            </nav>
            <div className="login"><Link to="#" className="link">Login</Link></div>
        </div>
    )
}

export default Nav
