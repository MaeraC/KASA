import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import '../styles/Location.css'
import emptyStar from '../assets/empty-star.png'
import fullStar from '../assets/full-star.png'


// Construction des étoiles dans le DOM 

function Rating() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère la propriété rating correspondant à la Card
    const { rating } = myCard 
    // Définit stars en tant que tableau 
    const stars = []
    // On boucle sur le nombre max d'etoiles
    for (let i = 0; i < 5; i++) { 
        // Si c'est inférieur au nombre rating on les ajoute dans le tableau stars en étoiles remplies
        if (i < rating) {
            stars.push(<img src={fullStar} alt="" key={i} />)
        }
        // Sinon on ajoute le reste des étoiles vides dans le tableau
        else {
            stars.push(<img src={emptyStar} alt="" key={i} />)
        }
    }
    
    // Implémente toutes les étoiles du tableau stars dans la page
    return (
        <div className="rating">
            {stars}
        </div>
    )  
}

export default Rating