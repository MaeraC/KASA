import { locations } from '../datas/locations'
import { useParams } from 'react-router-dom'
import '../styles/Location.css'

// Construction des tags dans le DOM 

function Tags() {
    // Récupère l'id correspondant à l'url
    const { idCard } = useParams()
    // Récupère les données de la Card correspondant à l'id
    const myCard = locations.find((data) => data.id === idCard)
    // Récupère la propriété tags correspondant à la Card
    const { tags } = myCard 

    // Implémente les tags dans la page
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li className="tag" key={`${tag}-${index}`}>{ tag }</li>
            ))}
        </ul>
    )
}

export default Tags