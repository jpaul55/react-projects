import PropTypes from 'prop-types';

function Header({text, bgColor}) {

    const headerStyle = {
        backgroundColor: bgColor,
        color:'#ffffff'
    }

  return (
    <header style={headerStyle}>
        <div>
            <h1>{text}</h1>
        </div>
    </header>
  )
}


Header.defaultProps = {
    text: "Default User Interface",
    bgColor: '#ebebeb'
}

Header.propTypes = {
    text: PropTypes.string
}
  

export default Header
