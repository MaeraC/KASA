import image from '../assets/bg.png'
import '../styles/About.css'
import arrowClose from '../assets/arrow-top.png'
import arrowOpen from '../assets/arrow-bottom.png'
import { useState } from 'react'

function About() {

    // le state de départ est déclaré sur false (fermer)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)

    // Si isOpen est sur false alors tu l'ouvre sinon tu le ferme au clic
    return (
        <main>
            <div className="image">
                <img src={image} alt="Paysage" className="image-img" />
                <span></span>
            </div>

            <section className="about">
                <div className="bloc">
                    <div className="titre" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} >
                        <h3>Fiabilité</h3>
                        <img src={arrowClose} alt="Fermer la description" 
                             className={isOpen ? "arrow-ok" : "arrow-hidden"}
                        />
                         <img src={arrowOpen}  alt="Ouvrir la description" 
                             className={isOpen ? "arrow-hidden" : "arrow-ok"} 
                        />
                    </div>
                    <div className={isOpen ? "desc-open" : "desc-close"} >
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </div>
                </div>
                <div className="bloc">
                    <div className="titre" onClick={() => isOpen2 ? setIsOpen2(false) : setIsOpen2(true)} >
                        <h3>Respect</h3>
                        <img src={arrowClose} alt="Fermer la description" 
                             className={isOpen2 ? "arrow-ok" : "arrow-hidden"}
                        />
                         <img src={arrowOpen}  alt="Ouvrir la description" 
                             className={isOpen2 ? "arrow-hidden" : "arrow-ok"} 
                        />
                    </div>
                    <div className={isOpen2 ? "desc-open" : "desc-close"} >
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </div>
                </div>
                <div className="bloc">
                    <div className="titre" onClick={() => isOpen3 ? setIsOpen3(false) : setIsOpen3(true)} >
                        <h3>Service</h3>
                        <img src={arrowClose} alt="Fermer la description" 
                             className={isOpen3 ? "arrow-ok" : "arrow-hidden"}
                        />
                         <img src={arrowOpen}  alt="Ouvrir la description" 
                             className={isOpen3 ? "arrow-hidden" : "arrow-ok"} 
                        />
                    </div>
                    <div className={isOpen3 ? "desc-open" : "desc-close"} >
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.                
                    </div>
                </div>
                <div className="bloc">
                    <div className="titre" onClick={() => isOpen4 ? setIsOpen4(false) : setIsOpen4(true)} >
                        <h3>Sécurité</h3>
                        <img src={arrowClose} alt="Fermer la description" 
                             className={isOpen4 ? "arrow-ok" : "arrow-hidden"}
                        />
                        <img src={arrowOpen}  alt="Ouvrir la description" 
                             className={isOpen4 ? "arrow-hidden" : "arrow-ok"} 
                        />
                    </div>
                    <div className={isOpen4 ? "desc-open" : "desc-close"} >
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.                
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About