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
export const FirstApp = ({title, subTitle}) => {




  return (
    <>
        <h1>{getMessage()}</h1>
        <h2>{getResult()}</h2>
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        <p>Soy un subtitulo</p>
        <p>{title}</p>
        <p>{subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo'
}