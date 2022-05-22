import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import '../styles/Location.css'

function Location() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère chaque propriété correspondant à la Card
    const { pictures, title, location, tags, host, rating, description, equipments } = myCard 

    return (
        <main>
            <header>

            </header>
            <section className="presentation">
                <div className="presentation-top">
                    <h1>{title}</h1>
                    <div className="profile">
                        <p>{host.name}</p>
                        <img src={host.picture} alt={host.name} />
                    </div>
                </div>
                <p className="localisation">{location}</p>
                <div className="presentation-bottom">
                    <div className="tags">
                        ???
                    </div>
                    <div className="rating">{rating}</div>
                </div>
                
            </section>
        </main>
        
    )

           
}

export default Location