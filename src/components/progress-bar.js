import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './progress-bar.css'

const ProgressBar = (props) => {
  return (
    <div className="progress-bar-thq-progress-bar-elm">
      <div className="progress-bar-thq-background-elm1">
        <img
          alt={props.backgroundAlt}
          src={props.backgroundSrc}
          className="progress-bar-thq-background-elm2"
        />
      </div>
      <div className="progress-bar-thq-container-elm1">
        <div className="progress-bar-thq-container-elm2">
          <span className="progress-bar-thq-text-elm1">
            {props.text ?? (
              <Fragment>
                <span className="progress-bar-text1">1:24</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="progress-bar-thq-container-elm3">
          <span className="progress-bar-thq-text-elm2">
            {props.text1 ?? (
              <Fragment>
                <span className="progress-bar-text2">3:45</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="progress-bar-thq-progress-handle-visualindicator-elm">
        <img
          alt={props.progressHandleVisualindicatorshadowAlt}
          src={props.progressHandleVisualindicatorshadowSrc}
          className="progress-bar-thq-progress-handle-visualindicatorshadow-elm"
        />
      </div>
    </div>
  )
}

ProgressBar.defaultProps = {
  backgroundAlt: 'Background1946',
  text: undefined,
  text1: undefined,
  backgroundSrc: '/background1946-ojpm-200h.png',
  progressHandleVisualindicatorshadowSrc:
    '/progresshandlevisualindicatorshadow1945-owxb-200h.png',
  progressHandleVisualindicatorshadowAlt:
    'ProgressHandleVisualindicatorshadow1945',
}

ProgressBar.propTypes = {
  backgroundAlt: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  backgroundSrc: PropTypes.string,
  progressHandleVisualindicatorshadowSrc: PropTypes.string,
  progressHandleVisualindicatorshadowAlt: PropTypes.string,
}

export default ProgressBar
