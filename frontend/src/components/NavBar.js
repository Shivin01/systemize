/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from '@emotion/core'
import {useState, Fragment} from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'

import Logo from '../images/Logo.svg'
import CreateTask from './CreateTask'
import useLocalStorage from '../hooks/useLocalStorage'
import {useAllUsers} from '../contexts/all-users'

function NavBar() {
  const [showModal, setShowModal] = useState(false)
  const [, setValue] = useLocalStorage('token')
  const {users, isFetching} = useAllUsers()
  const history = useHistory()

  return (
    <Fragment>
      <div className="w-screen h-auto shadow-xl fixed top-0 left-0 bg-white">
        <div className="container m-auto">
          <nav className="flex items-center justify-between flex-wrap py-4">
            <Link
              className="no-underline pr-8"
              to="/"
              css={css`
                border-right: 2px solid rgba(0, 0, 0, 0.5);
              `}
            >
              <img src={Logo} alt="logo" />
            </Link>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-8">
              <div className="lg:flex-grow">
                <NavLink
                  exact
                  to="/"
                  activeStyle={{
                    borderBottom: '3px solid #000000',
                    paddingBottom: 3,
                  }}
                >
                  Your Tasks
                </NavLink>
                <NavLink
                  className="ml-4"
                  exact
                  to="/all-tasks"
                  activeStyle={{
                    borderBottom: '3px solid #000000',
                    paddingBottom: 3,
                  }}
                >
                  All Tasks
                </NavLink>
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
              <div className="dropdown inline-block relative">
                <div className="w-12 h-12 rounded-full bg-green-900 border-gray-600 border-4 ml-4 shadow-sm cursor-pointer" />
                <div className="dropdown-menu hidden w-48 h-auto absolute r-0 bg-white rounded shadow-lg hover:shadow-2xl z-10">
                  <Link
                    to="/profile"
                    className="block font-normal text-base text-gray-900 px-2 py-3 hover:bg-gray-300 cursor-pointer"
                  >
                    Profile
                  </Link>
                  <span
                    className="block font-normal text-base text-gray-900 px-2 py-3 border-gray-500 border-t-2 hover:bg-gray-300 cursor-pointer"
                    onClick={() => {
                      setValue('')
                      history.push('/login')
                    }}
                  >
                    Sign Out
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {showModal ? (
        <CreateTask
          setShowModal={setShowModal}
          showModal={showModal}
          isFetchingUser={isFetching}
          users={users}
        />
      ) : null}
    </Fragment>
  )
}

export default NavBar
