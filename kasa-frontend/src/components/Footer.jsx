import '../styles/Footer.css'
import logo from '../assets/logo-footer.png'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo" className="logo-footer" ></img>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer