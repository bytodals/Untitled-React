import React from 'react'

import PropTypes from 'prop-types'

import './secondary-controls.css'

const SecondaryControls = (props) => {
  return (
    <div className="secondary-controls-thq-secondary-controls-elm">
      <button className="secondary-controls-thq-button-elm1">
        <img
          alt={props.containerAlt}
          src={props.containerSrc}
          className="secondary-controls-thq-container-elm1"
        />
      </button>
      <button className="secondary-controls-thq-button-elm2">
        <img
          alt={props.excludeAlt}
          src={props.excludeSrc}
          className="secondary-controls-thq-exclude-elm"
        />
      </button>
      <button className="secondary-controls-thq-button-elm3">
        <img
          alt={props.containerAlt1}
          src={props.containerSrc1}
          className="secondary-controls-thq-container-elm2"
        />
      </button>
    </div>
  )
}

SecondaryControls.defaultProps = {
  containerSrc: '/container1948-rci5.svg',
  containerAlt1: 'Container1948',
  excludeSrc: '/exclude1954-wt2f.svg',
  containerSrc1: '/container1948-93xk.svg',
  excludeAlt: 'Exclude1954',
  containerAlt: 'Container1948',
}

SecondaryControls.propTypes = {
  containerSrc: PropTypes.string,
  containerAlt1: PropTypes.string,
  excludeSrc: PropTypes.string,
  containerSrc1: PropTypes.string,
  excludeAlt: PropTypes.string,
  containerAlt: PropTypes.string,
}

export default SecondaryControls
