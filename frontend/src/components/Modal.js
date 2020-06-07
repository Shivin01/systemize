import React from 'react'
import cs from 'classnames'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'

ReactModal.setAppElement('#root')

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    width: '50%',
    transform: 'translate(-50%, -50%)',
  },
}

function Modal({
  setShowModal,
  showModal = false,
  heading = null,
  saveBtnText = 'Save',
  children,
  isSaveBtnDisabled = false,
}) {
  return console.log('isSaveBtnDisabled', isSaveBtnDisabled) || (
    <ReactModal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader setShowModal={setShowModal} heading={heading} />
      <div className="p-6 overflow-auto">{children}</div>
      <ModalFooter
        setShowModal={setShowModal}
        isDisabled={isSaveBtnDisabled}
        saveBtnText={saveBtnText}
      />
    </ReactModal>
  )
}

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  saveBtnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  isSaveBtnDisabled: PropTypes.bool,
  showModal: PropTypes.bool,
}

export default Modal
