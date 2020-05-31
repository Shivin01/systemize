/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {jsx, css} from '@emotion/core'
import Logo from '../images/Logo.svg'
import BackgroundShape from '../images/Shape.svg'
import Image from '../images/image.svg'

function Login() {
  return (
    <div className="flex items-center justify-center h-screen text-gray-700">
      <div className="sm:w-9/12 md:w-8/12 font-bold rounded-lg border shadow-xl">
        <div className="flex">
          <div className="w-1/2 h-auto rounded-tl-lg rounded-bl-lg p-8">
            <div className="flex justify-between items-center">
              <a className="no-underline" href="">
                <img src={Logo} alt="logo" />
              </a>
              <nav>
                <ul className="list-none">
                  <li className="inline-block py-0 px-5">
                    <a
                      className="font-bold"
                      href="#"
                      css={css`
                        transition: all 0.3s ease 0s;
                        &:hover {
                          color: #0088a9;
                        }
                      `}
                    >
                      Signin
                    </a>
                  </li>
                  <li className="inline-block py-0 px-5">
                    <a
                      className="font-bold"
                      href="#"
                      css={css`
                        transition: all 0.3s ease 0s;
                        &:hover {
                          color: #0088a9;
                        }
                      `}
                    >
                      Signup
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mt-16 w-full">
              <span className="uppercase text-2xl">Signin</span>
              <form className="pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="text-white font-bold py-2 px-8 rounded-lg focus:outline-none focus:shadow-outline"
                    type="button"
                    css={css`
                      background: linear-gradient(
                        264.33deg,
                        #7ee0ef 0%,
                        #15aad9 100%
                      );
                      box-shadow: 0px 15px 20px rgba(32, 175, 221, 0.34);
                    `}
                  >
                    Sign In
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
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

export default Login