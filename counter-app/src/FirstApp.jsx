import PropTypes from 'prop-types';

const newMessage = {
   message: 'Hola',
   name: 'Edgar'
}

const getResult = () => {
    return 4 + 4
}

//ejercicio
const getMessage = () => {
    return `${newMessage.message} ${newMessage.name}`
}
export const FirstApp = ({title, subTitle, name}) => {

  return (
    <>
        <h1 data-testid="test-title"> {title} </h1>
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
        {/* <h1>{getMessage()}</h1>
        <h2>{getResult()}</h2> */}
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* <p>Soy un subtitulo</p> */}
        {/* <p>{subTitle}</p> */}
        {/* <p>{name}</p> */}
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Edgar'
}