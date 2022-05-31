import '../styles/Card.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Construction des cards
function Card({ id, title, cover }) {
    return(
        <Link to={`/location/${id}`}>
            <figure>
                <img src={cover} alt="Location" />
                <figcaption>{title}</figcaption>
            </figure> 
        </Link>
    )
}

Card.propTypes = {
    id : PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Card

