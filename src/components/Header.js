import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? '#FF6370' : '#4195f2'}
          text={showAdd ? 'Close' : 'Add'}
          txtcolor={showAdd ? '#FFF' : '#FFF'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'TaskyApp',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header