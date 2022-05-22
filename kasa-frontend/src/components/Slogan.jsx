import slogan from '../assets/slogan.png'
import '../styles/Slogan.css'

function Slogan() {
    return (
        <div className="slogan">
            <img src={slogan} alt="Paysage" className="slogan-img" />
            <span></span>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Slogan