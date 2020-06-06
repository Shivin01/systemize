import React from 'react'
import PropTypes from 'prop-types'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'

function Modal({
  setShowModal,
  heading = null,
  saveBtnText = 'Save',
  children,
  isSaveBtnDisabled = false,
}) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <ModalHeader setShowModal={setShowModal} heading={heading} />

            <div className="relative p-6 flex-auto">{children}</div>

            <ModalFooter
              setShowModal={setShowModal}
              saveBtnText={saveBtnText}
              isDisabled={isSaveBtnDisabled}
            />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  )
}

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  saveBtnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isSaveBtnDisabled: PropTypes.bool,
}

export default Modal
