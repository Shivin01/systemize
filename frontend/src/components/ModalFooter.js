import React from 'react'
import PropTypes from 'prop-types'

function ModalFooter({setShowModal, saveBtnText = 'Save', isDisabled = false}) {
  return (
    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
      <button
        className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{transition: 'all .15s ease'}}
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>
      <button className="button" type="submit" >{saveBtnText}</button>
    </div>
  )
}

ModalFooter.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  saveBtnText: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default ModalFooter
