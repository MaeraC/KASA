import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import '../styles/Location.css'
import arrowPrevious from '../assets/arrowPrevious.png'
import arrowNext from '../assets/arrowNext.png'
import { useState } from 'react'

function Carroussel() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère la propriété pictures correspondant à la Card
    // pour implémenter les images dans le carroussel
    const { pictures } = myCard 
    // On définit l'etat state
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    // Passe à l'image suivante
    const nextPicture = () => {
        setCurrent(current === length -1 ? 0 : current +1)
    }
    // Passe à l'image précédente
    const previousPicture = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    // Pour chaque objet pictures on implémente les images dans une balise img 
    // Puis on ajoute un event onClick sur les icônes
    return ( 
        <div className="carroussel"> 
            {pictures.map((picture, index) => index === current && (
                <div className="picture" key={"carroussel" + index}>
                    <img src={picture} 
                         key={picture} 
                         alt='Location'
                    />
                </div>
            ))} 
            {length > 1 && (
                <div className="buttons">
                    <button className="arrowPrevious" onClick={previousPicture}>
                        <img src={arrowPrevious} 
                             alt="Précédent" />
                    </button>
                    <button className="arrowNext" onClick={nextPicture}>
                        <img src={arrowNext} 
                             alt="Suivant" />
                    </button>
                </div>
            )}
        </div> 
    )
}   

export default Carroussel