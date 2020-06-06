/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from '@emotion/core'
import {useState, Fragment} from 'react'
import PropTypes from 'prop-types'

import Logo from '../images/Logo.svg'
import CreateTask from './CreateTask'

function NavBar({active, setActive}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
      <div className="w-screen h-auto shadow-xl fixed top-0 left-0 bg-white">
        <div className="container m-auto">
          <nav className="flex items-center justify-between flex-wrap py-4">
            <a
              className="no-underline pr-8"
              href="#fdsf"
              css={css`
                border-right: 2px solid rgba(0, 0, 0, 0.5);
              `}
            >
              <img src={Logo} alt="logo" />
            </a>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-8">
              <div className="lg:flex-grow">
                <a
                  href="#responsive-header"
                  className="inline-block mt-4 lg:mt-0 mr-4"
                  style={
                    active
                      ? {borderBottom: '3px solid #000000', paddingBottom: 3}
                      : {}
                  }
                  onClick={() => setActive(true)}
                >
                  Your Tasks
                </a>
              </div>
              <div className="mr-4">
                <button
                  className="text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => setShowModal(true)}
                  css={css`
                    background: linear-gradient(
                      264.33deg,
                      #7ee0ef 0%,
                      #15aad9 100%
                    );
                    box-shadow: 0px 15px 20px rgba(32, 175, 221, 0.34);
                  `}
                >
                  Create
                </button>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-900 border-gray-600 border-4 ml-4 shadow-sm" />
            </div>
          </nav>
        </div>
      </div>
      {showModal ? <CreateTask setShowModal={setShowModal} /> : null}
    </Fragment>
  )
}

NavBar.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default NavBar
