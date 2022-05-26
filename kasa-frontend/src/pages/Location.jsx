import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import '../styles/Location.css'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Description from '../components/Description'
import Equipements from '../components/Equipements'
import Carroussel from '../components/Carroussel'

function Location() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère les propriétés title, location, host correspondant à la Card
    const { title, location, host } = myCard 

    // On implémente les propriétés dans la page
    return (
        <main>
            <section className="Carroussel">
                <Carroussel />
            </section>
            
            <section className="presentation">
                <div className="presentation-top">
                    <h1>{title}</h1>
                    <div className="profile">
                        <p className="name">{host.name}</p>
                        <img src={host.picture} alt={host.name} />
                    </div>
                </div>
                <p className="localisation">{location}</p>
                <div className="presentation-bottom">
                    <Tags />
                    <Rating />
                </div>
            </section>

            <section className="description-blocs">
                <Description />
                <Equipements />
            </section>
        </main>
    )
}

export default Location