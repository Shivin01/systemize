import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
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
  children,
}) {
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader setShowModal={setShowModal} heading={heading} />
      {children}
    </ReactModal>
  )
}

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool,
}

export default Modal
