import React from 'react'

import PropTypes from 'prop-types'

import './overlay-blur.css'

const OverlayBlur = (props) => {
  return (
    <div className={`overlay-blur-container ${props.rootClassName} `}>
      <img
        alt={props.overlayBlurAlt}
        src={props.overlayBlurSrc}
        className="overlay-blur-thq-overlay-blur-elm"
      />
    </div>
  )
}

OverlayBlur.defaultProps = {
  rootClassName: '',
  overlayBlurSrc: '/overlayblur1943-02j9-300w.png',
  overlayBlurAlt: 'OverlayBlur1943',
}

OverlayBlur.propTypes = {
  rootClassName: PropTypes.string,
  overlayBlurSrc: PropTypes.string,
  overlayBlurAlt: PropTypes.string,
}

export default OverlayBlur
