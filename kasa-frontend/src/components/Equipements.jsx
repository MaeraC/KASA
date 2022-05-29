import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import '../styles/Location.css'
import arrowClose from '../assets/arrow-top.png'
import arrowOpen from '../assets/arrow-bottom.png'
import { useState } from 'react'

function Equipements() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère la propriété equipments correspondant à la Card
    const { equipments } = myCard 
    // le state de départ est déclaré sur false (fermer)
    const [isOpen, setIsOpen] = useState(false)
    
    // Si isOpen est sur false alors tu l'ouvre sinon tu le ferme au clic

    // Implémente la liste des équipements dans la page
    return(
        <div className={isOpen ? "description" : "desc"} >
            <div className="titre" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true) }>
                <h3>Equipements</h3>
                <img src={arrowClose} alt="Fermer la description" 
                     className={isOpen ? "arrow-ok" : "arrow-hidden"}
                />
                <img src={arrowOpen}  alt="Ouvrir la description"                      
                     className={isOpen ? "arrow-hidden" : "arrow-ok"}
                />
            </div>
            <ul className={isOpen ? "desc-open" : "desc-close"} >
                {equipments.map((item, index) => (
                    <li key={`${item}-${index}`} className="equipments" >{ item }</li>
                ))}
            </ul>
        </div>
    )
}

export default Equipements