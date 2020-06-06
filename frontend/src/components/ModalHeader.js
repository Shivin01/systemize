import React from 'react'
import PropTypes from 'prop-types'

function ModalHeader({setShowModal, heading = null}) {
  return (
    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
      <h3 className="text-3xl font-semibold">{heading}</h3>
      <button
        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => setShowModal(false)}
      >
        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
          ×
        </span>
      </button>
    </div>
  )
}

ModalHeader.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default ModalHeader
