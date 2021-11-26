import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/detalhes">Opções</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu