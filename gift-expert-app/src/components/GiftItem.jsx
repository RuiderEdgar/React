import PropTypes from 'prop-types'
export const GiftItem = ({title, url}) =>  (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
)

//Tarea:
// 1. Añadir proptypes
// 2. evaluar el snapshot

GiftItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


