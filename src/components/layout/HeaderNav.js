import React from 'react'
import {NavLink} from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>K</span>
            <h3>Kevin Escobar Dev</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/Curriculum" className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
