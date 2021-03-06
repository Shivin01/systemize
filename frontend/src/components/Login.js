/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx, css} from '@emotion/core'
import {withRouter, NavLink} from 'react-router-dom'

import Logo from '../images/Logo.svg'
import BackgroundShape from '../images/Shape.svg'
import Image from '../images/image.svg'
import LoginForm from './loginForm'

function Login(props) {
  return (
    <div className="flex items-center justify-center h-screen text-gray-700">
      <div className="sm:w-9/12 md:w-8/12 font-bold rounded-lg border shadow-xl">
        <div className="flex">
          <div className="w-1/2 h-auto rounded-tl-lg rounded-bl-lg p-8">
            <div className="flex justify-between items-center">
              <img src={Logo} alt="logo" />
              <nav>
                <ul className="list-none">
                  <li className="inline-block py-0 px-5">
                    <NavLink
                      to='/login'
                      className="font-bold"
                      activeStyle={{
                        color: "#0088a9"
                      }}
                      css={css`
                        transition: all 0.3s ease 0s;
                        &:hover {
                          color: #0088a9;
                        }
                      `}
                    >
                      Signin
                    </NavLink>
                  </li>
                  <li className="inline-block py-0 px-5">
                    <NavLink
                      to='/signup'
                      className="font-bold"
                      activeStyle={{
                        color: "#0088a9"
                      }}
                      css={css`
                        transition: all 0.3s ease 0s;
                        &:hover {
                          color: #0088a9;
                        }
                      `}
                    >
                      Signup
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-16 w-full">
              <span className="uppercase text-2xl">Signin</span>
              <LoginForm history={props.history} />
            </div>
          </div>
          <div
            className="w-1/2 h-auto rounded-tr-lg rounded-br-lg .bg-center relative"
            css={{
              background: 'linear-gradient(180deg, #7EE0EF 0%, #15AAD9 100%)',
            }}
          >
            <img
              className=""
              src={BackgroundShape}
              alt="shape"
              css={css`
                width: 300px;
                height: 300px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -150px;
                margin-top: -150px;
                z-index: 9;
              `}
            />
            <img
              className=""
              src={Image}
              alt="shape"
              css={css`
                width: 300px;
                height: 300px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -150px;
                margin-top: -150px;
                z-index: 10;
              `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Login)
