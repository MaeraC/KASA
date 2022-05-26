import '../styles/index.css'
import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import arrowClose from '../assets/arrow-top.png'
import arrowOpen from '../assets/arrow-bottom.png'
import { useState } from 'react'

function Description() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère la propriété description correspondant à la Card
    const { description } = myCard 
    // le state de départ est déclaré sur false (fermer)
    const [isOpen, setIsOpen] = useState(false)
    
    // Si isOpen est sur false alors tu l'ouvre sinon tu le ferme au clic
    return (  
        <div className="description">
            <div className="titre" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} >
                <h3>Description</h3>
                <img src={arrowClose} alt="Fermer la description" 
                     className={isOpen ? "arrow-ok" : "arrow-hidden"}
                />
                <img src={arrowOpen}  alt="Ouvrir la description" 
                     className={isOpen ? "arrow-hidden" : "arrow-ok"} 
                />
            </div>
            <div className={isOpen ? "desc-open" : "desc-close"} >
                {description}
            </div>
        </div>
    ) 

    
}

export default Description