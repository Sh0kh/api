import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='container'>
            <ul>
                <h1>
                    hello
                </h1>
                <li>
                    <NavLink to ="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/Home2">Home2</NavLink>
                </li>
            </ul>
        </div>
    </header>
    )
}

export default Header