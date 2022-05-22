import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo" className="logo" />
                <div className="links">
                    <Link to='/' className="nav-link space">Accueil</Link>
                    <Link to='/about' className="nav-link">À propos</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header