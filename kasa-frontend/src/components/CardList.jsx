import '../styles/CardList.css'
import Card from '../components/Card'
import { locations } from '../datas/locations'

function CardList() {

    return (
        <section className="card-list">
            {locations.map((loc, index) => (
                <Card 
                    key={`${loc.id}-${index}`}
                    id={loc.id}
                    title={loc.title}
                    cover={loc.cover}
                />
            ))}
        </section>
    )
}

export default CardList