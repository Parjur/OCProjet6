import logo from '../../assets/logo.png'
import '../../styles/components/header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div id='header'>
            <img src={logo} alt='logo' />
            <nav>
                <ul>
                    <NavLink className='link' to="/">Accueil</NavLink>
                    <NavLink className='link' to="/about">À propos</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header