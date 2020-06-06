import React from 'react'
import PropTypes from 'prop-types'

function FormError({children}) {
  return <p className="text-red-500 text-xs italic">{children}</p>
}

FormError.propTypes = {
  children: PropTypes.string.isRequired,
}

export default FormError
