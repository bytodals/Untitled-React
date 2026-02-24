import React from 'react'

import PropTypes from 'prop-types'

import './main-controls.css'

const MainControls = (props) => {
  return (
    <div className="main-controls-thq-main-controls-elm">
      <img
        alt={props.containerAlt}
        src={props.containerSrc}
        className="main-controls-thq-container-elm"
      />
      <img
        alt={props.buttonAlt}
        src={props.buttonSrc}
        className="main-controls-thq-button-elm1"
      />
      <img
        alt={props.buttonAlt1}
        src={props.buttonSrc1}
        className="main-controls-thq-button-elm2"
      />
    </div>
  )
}

MainControls.defaultProps = {
  containerAlt: 'Container1953',
  buttonSrc1: '/button1947-yy5.svg',
  buttonAlt1: 'Button1947',
  containerSrc: '/container1953-874.svg',
  buttonAlt: 'Button1947',
  buttonSrc: '/button1947-o3y.svg',
}

MainControls.propTypes = {
  containerAlt: PropTypes.string,
  buttonSrc1: PropTypes.string,
  buttonAlt1: PropTypes.string,
  containerSrc: PropTypes.string,
  buttonAlt: PropTypes.string,
  buttonSrc: PropTypes.string,
}

export default MainControls
