import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Albumcoverartworkwithvibrantcolors from '../components/albumcoverartworkwithvibrantcolors'
import ProgressBar from '../components/progress-bar'
import MainControls from '../components/main-controls'
import SecondaryControls from '../components/secondary-controls'
import './frame3.css'

const Frame3 = (props) => {
  return (
    <div className="frame3-container1">
      <Helmet>
        <title>Frame3 - exported project</title>
        <meta property="og:title" content="Frame3 - exported project" />
        <link
          rel="canonical"
          href="https://untitled-0vcqpr.teleporthq.app/frame3"
        />
      </Helmet>
      <div className="frame3-thq-frame3-elm">
        <div className="frame3-thq-now-playing-elm">
          <div className="frame3-thq-main-container-elm">
            <div className="frame3-thq-top-navigation-elm">
              <button className="frame3-thq-button-elm1">
                <img
                  alt="Container1944"
                  src="/container1944-0tv7.svg"
                  className="frame3-thq-container-elm1"
                />
              </button>
              <div className="frame3-thq-heading2-elm">
                <span className="frame3-thq-text-elm1">Now Playing</span>
              </div>
              <button className="frame3-thq-button-elm2">
                <img
                  alt="Container1944"
                  src="/container1944-uw5.svg"
                  className="frame3-thq-container-elm2"
                />
              </button>
            </div>
            <div className="frame3-thq-album-artwork-elm">
              <div className="frame3-thq-overlay-shadow-elm">
                <div className="frame3-thq-background-elm">
                  <Albumcoverartworkwithvibrantcolors></Albumcoverartworkwithvibrantcolors>
                </div>
              </div>
            </div>
            <div className="frame3-thq-track-info-elm">
              <div className="frame3-thq-heading1-elm">
                <span className="frame3-thq-text-elm2">Neon Horizons</span>
              </div>
              <div className="frame3-thq-container-elm3">
                <span className="frame3-thq-text-elm3">
                  Starlight Syndicate
                </span>
              </div>
            </div>
            <ProgressBar
              text={
                <Fragment>
                  <span className="frame3-text1">1:24</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="frame3-text2">3:45</span>
                </Fragment>
              }
            ></ProgressBar>
            <MainControls></MainControls>
            <SecondaryControls></SecondaryControls>
          </div>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="frame3-link">
        <div aria-label="Sign up to TeleportHQ" className="frame3-container2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="frame3-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="frame3-text3">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Frame3
