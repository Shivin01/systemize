/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from '@emotion/core'
import {useEffect, useState} from 'react'

import editSvg from '../images/Vector.svg'
import personSvg from '../images/person.svg'
import axiosInstance from "../utils/axiosInsance";
import CustomPieChart from "./piechart";

function Profile() {
  const [, setShowModal] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [pieChartData, setPieChartData] = useState([])
  const [barChartData, setBarChartData] = useState({})

  useEffect(() => {
    axiosInstance.get('/users/user_profile/')
      .then(function (response) {
        if (response.data && response.data.length) {
          setUserDetails(response.data[0])
        }
      })
      .catch(function (error) {
        console.log(error);
      })

    axiosInstance.get('http://localhost:8000/users/pie_chart_data/')
      .then(function (response) {
        console.log(response.data)
        setPieChartData(response.data)
      })
      .catch(function (error) {console.log(error)})

    axiosInstance.get('http://localhost:8000/users/bar_chart_data/')
      .then(function (response) {
        console.log(response.data)
        setBarChartData(response.data)
      })
      .catch(function (error) {console.log(error)})

  }, []);

  console.log(barChartData)

  const {
    first_name,
    last_name,
    username,
    email,
    current_organization,
    guest_organizations,
    phone,
    timezone
  } = userDetails

  return (
    <section className="h-screen pt-40">
      <div className="container m-auto">
        <div className="flex w-full">
          <div className="flex flex-col mr-16">
            <div className="w-64 h-64 mb-6">
              <img
                className="m-auto rounded-full"
                src={userDetails.profile_image}
                alt="user image"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between flex-wrap">
              <div>
                <h1 className="block text-4xl font-medium pt-0 pl-0 text-gray-700">
                  {first_name ? `${first_name} ${last_name}` : 'No Name'}
                </h1>
                <span
                  className="block text-xs font-normal"
                  css={css`
                    color: #15aad9;
                  `}
                >
                  {username ? `@${username}` : '...'}
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
                <tbody>
                {phone ? (
                  <tr>
                    <td>Phone:</td>
                    <td className="text-blue-400 pl-3">{phone}</td>
                  </tr>
                ) : null}
                <tr>
                  <td>Email:</td>
                  <td className="pl-3">{email}</td>
                </tr>
                <tr>
                  <td>Timezone:</td>
                  <td className="pl-3">{timezone ? timezone : 'None'}</td>
                </tr>
                </tbody>
              </table>

              <h3 className="mt-4 uppercase text-xs text-gray-600">
                Work
              </h3>
              <table className="table mt-2 text-sm">
                <tbody>
                <tr>
                  <td>Organization:</td>
                  <td
                    className="text-blue-400 pl-3">{current_organization ? current_organization : 'None'}</td>
                </tr>
                {guest_organizations && guest_organizations.length ? (
                  <tr>
                    <td>Guest Organizations:</td>
                    <td className="pl-3">{guest_organizations.reduce((acc, org) => `${acc}, ${org}`, '')}</td>
                  </tr>
                ) : null}
                </tbody>
              </table>
              <CustomPieChart
              pieChartData={pieChartData}
              ColumnChartNew={barChartData.new}
              ColumnChartInprogress={barChartData.in_progress}
              ColumnChartCompleted={barChartData.completed}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
