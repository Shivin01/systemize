import React from 'react'

function Test() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4 bg-blue-900">
        <div className="flex-shrink-0 ml-10 cursor-pointer">
          <i className="fas fa-drafting-compass fa-2x text-orange-500" />
          <span className="ml-1 text-3xl text-blue-200 font-semibold">
            WebCraft
          </span>
        </div>
        <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer" />
        <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
          <li className="mr-6 p-1 border-b-2 border-orange-500">
            <a className="text-blue-200 cursor-default" href="#">
              Home
            </a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">
              Services
            </a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">
              Projects
            </a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">
              Team
            </a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">
              About
            </a>
          </li>
          <li className="mr-6 p-1">
            <a className="text-white hover:text-blue-300" href="#">
              Contacts
            </a>
          </li>
        </ul>
      </div>

      <div className="section bg-blue-100">
        <div className="section-title">OUR SERVICES</div>
        <div className="section-subtitle">
          We offer the best web development solutions.
        </div>
        <div className="flex justify-center flex-wrap p-10">
          <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div className="flex items-center w-48 h-20 bg-orange-500">
              <i className="fas fa-bezier-curve fa-3x mx-auto text-white" />
            </div>
            <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
              UI Design
            </p>
            <p className="p-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              est massa.
            </p>
            <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-orange-300 text-center cursor-pointer">
              <i className="fas fa-chevron-right mt-2 text-orange-500" />
            </div>
          </div>
          <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div className="flex items-center w-48 h-20 bg-green-500">
              <i className="fas fa-laptop-code fa-3x mx-auto text-white" />
            </div>
            <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
              Web Dev
            </p>
            <p className="p-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              est massa.
            </p>
            <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-green-300 text-center cursor-pointer">
              <i className="fas fa-chevron-right mt-2 text-green-500" />
            </div>
          </div>
          <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div className="flex items-center w-48 h-20 bg-yellow-500">
              <i className="fas fa-mobile-alt fa-3x mx-auto text-white" />
            </div>
            <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
              Mobile Apps
            </p>
            <p className="p-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              est massa.
            </p>
            <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-yellow-300 text-center cursor-pointer">
              <i className="fas fa-chevron-right mt-2 text-yellow-500" />
            </div>
          </div>
          <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
            <div className="flex items-center w-48 h-20 bg-teal-500">
              <i className="fas fa-search-dollar fa-3x mx-auto text-white" />
            </div>
            <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">
              SEO
            </p>
            <p className="p-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              est massa.
            </p>
            <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-teal-300 text-center cursor-pointer">
              <i className="fas fa-chevron-right mt-2 text-teal-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-blue-200">
        <div className="section-title">OUR PROJECTS</div>
        <div className="section-subtitle">
          Explore our rich and diverse portfolio.
        </div>

        <nav className="flex justify-center flex-wrap mt-4 mb-8 text-white">
          <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
            All
          </div>
          <div className="h-8 mr-2 px-3 py-1 bg-blue-800 text-center -skewx-20">
            UI Design
          </div>
          <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
            Web Dev
          </div>
          <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
            Mobile Apps
          </div>
          <div className="h-8 mr-2 px-3 py-1 bg-blue-400 hover:bg-blue-600 text-center cursor-pointer -skewx-20">
            SEO
          </div>
        </nav>

        <div className="flex justify-center flex-wrap">
          <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg">
            <img
              className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
              alt=""
              src="design1.jpg"
            />
          </div>
          <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg">
            <img
              className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
              alt=""
              src="design2.jpg"
            />
          </div>
          <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg">
            <img
              className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
              alt=""
              src="design3.jpg"
            />
          </div>
          <div className="w-48 h-48 m-2 hover:-mt-1 border-4 border-orange-600 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:shadow-lg">
            <img
              className="w-full h-full object-cover rounded-tl-2xl rounded-br-2xl"
              alt=""
              src="design4.jpg"
            />
          </div>
        </div>
      </div>

      <div className="section bg-blue-100">
        <div className="section-title">OUR TEAM</div>
        <div className="section-subtitle">Meet our skilled professionals.</div>

        <div className="flex justify-center flex-wrap">
          <div className="card">
            <img className="card-image" src="jessica.jpg" alt="" />
            <p className="card-title">Jessica Thompson</p>
            <p className="card-subtitle">UI Artisan</p>
            <div className="card-icons">
              <i className="fab fa-facebook-square fa-2x card-icon" />
              <i className="fab fa-twitter-square fa-2x card-icon" />
              <i className="fab fa-google-plus-square fa-2x card-icon" />
            </div>
          </div>
          <div className="card">
            <img className="card-image" src="alex.jpg" alt="" />
            <p className="card-title">Alexander Bell</p>
            <p className="card-subtitle">Code Ninja</p>
            <div className="card-icons">
              <i className="fab fa-facebook-square fa-2x card-icon" />
              <i className="fab fa-twitter-square fa-2x card-icon" />
              <i className="fab fa-google-plus-square fa-2x card-icon" />
            </div>
          </div>
          <div className="card">
            <img className="card-image" src="monica.jpg" alt="" />
            <p className="card-title">Monica Mitchell</p>
            <p className="card-subtitle">Mobile Maestro</p>
            <div className="card-icons">
              <i className="fab fa-facebook-square fa-2x card-icon" />
              <i className="fab fa-twitter-square fa-2x card-icon" />
              <i className="fab fa-google-plus-square fa-2x card-icon" />
            </div>
          </div>
          <div className="card">
            <img className="card-image" src="david.jpg" alt="" />
            <p className="card-title">David Wilson</p>
            <p className="card-subtitle">SEO Sorcerer</p>
            <div className="card-icons">
              <i className="fab fa-facebook-square fa-2x card-icon" />
              <i className="fab fa-twitter-square fa-2x card-icon" />
              <i className="fab fa-google-plus-square fa-2x card-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-900">
        <div className="flex flex-wrap text-center text-white">
          <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
            <div className="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
            <p className="p-3 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
              est massa. Donec eget elementum sapien, tincidunt tempor nunc.
              Cras sodales id ipsum at convallis.
            </p>
            <p className="p-3 text-gray-400">
              Morbi tristique massa nec massa auctor, at scelerisque felis
              consectetur. Morbi tempus et odio sit amet feugiat. Maecenas
              dignissim a turpis in molestie. Fusce tincidunt vestibulum
              iaculis.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
            <div className="my-6 text-xl font-semibold">CONTACT US</div>
            <p className="mt-8 text-gray-400">
              A108 Adam Street <br />
              New York, NY 535022 <br />
              United States <br />
              <strong>Phone:</strong> +1 5589 55488 55 <br />
              <strong>Email:</strong> info@webcraft.com
            </p>
            <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
              <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
                <i className="fab fa-facebook-f fa-lg text-blue-500 -rotate-45" />
              </div>
              <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
                <i className="fab fa-twitter fa-lg text-blue-500 -rotate-45" />
              </div>
              <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
                <i className="fab fa-google-plus-g fa-lg text-blue-500 -rotate-45" />
              </div>
              <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
                <i className="fab fa-linkedin-in fa-lg text-blue-500 -rotate-45" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-5">
            <div className="mt-6 text-xl font-semibold">SAY HELLO!</div>
            <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
              <div className="flex items-center mb-4">
                <input
                  className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  className="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
                  placeholder="Message"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold"
                  type="button"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
