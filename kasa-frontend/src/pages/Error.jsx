import { Link } from 'react-router-dom'
import '../styles/Error.css'

function Error() {
    return (
        <main>
            <h1 className="error">404</h1>
            <p className="errorP">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to='/' className="error-link">Retourner sur la page d'accueil</Link>
        </main>   
    )
}

export default Error