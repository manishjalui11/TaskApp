import PropTypes from 'prop-types'

const Button = ({ color, txtcolor, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: txtcolor }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  txtcolor: 'white'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button