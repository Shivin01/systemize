/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from '@emotion/core'
import {useState} from 'react'

import ProfileImage from '../images/Ellipse.png'
import editSvg from '../images/Vector.svg'
import locationSvg from '../images/location.svg'
import personSvg from '../images/person.svg'

function Profile() {
  const [, setShowModal] = useState(false)

  return (
    <section className="h-screen pt-40">
      <div className="container m-auto">
        <div className="flex w-full">
          <div className="flex flex-col mr-16">
            <div className="w-64 h-64 mb-6">
              <img
                className="m-auto rounded-full"
                src={ProfileImage}
                alt="sdfs"
              />
            </div>
            <div className="">Work</div>
          </div>
          <div className="w-full">
            <div className="flex justify-between flex-wrap">
              <div>
                <h1 className="block text-4xl font-medium pt-0 pl-0 text-gray-700">
                  John Doe
                  <span className="inline-block font-normal text-xs text-gray-500 pl-6">
                    <img
                      className="inline-block w-4 h-4 pb-1"
                      src={locationSvg}
                      alt="location"
                    />
                    Location
                  </span>
                </h1>
                <span
                  className="block text-xs font-normal"
                  css={css`
                    color: #15aad9;
                  `}
                >
                  Designation
                </span>
              </div>
              <div className="pt-2" onClick={() => setShowModal(true)}>
                <img
                  className="cursor-pointer w-6 h-6"
                  src={editSvg}
                  alt="Edit"
                />
              </div>
            </div>
            <ul className="flex border-b mt-24">
              <li className="-mb-px mr-1">
                <a
                  className="bg-white inline-block border-blue-400 rounded-t py-2 px-4 font-semibold"
                  css={css`
                    border-bottom-width: 3px;
                  `}
                  href="#fdsfd"
                >
                  <img
                    className="inline pb-1 pr-1"
                    src={personSvg}
                    alt="person"
                  />
                  About
                </a>
              </li>
            </ul>

            <div className="mt-4 font-semibold text-gray-700">
              <h3 className="uppercase text-xs text-gray-600">
                Contact Information
              </h3>
              <table className="table mt-2 text-sm">
                <tr>
                  <td>Phone:</td>
                  <td className="text-blue-400 pl-3">+9123232323</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td className="pl-3">john.doe@custom.com</td>
                </tr>
                <tr>
                  <td>Timezone:</td>
                  <td className="pl-3">Asia/Kolkata</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
