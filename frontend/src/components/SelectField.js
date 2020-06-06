import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {PRIMARY} from '../constants/colors'

function SelectField({
  isError = false,
  emptyDataMessage = 'No more options available!',
  ...rest
}) {
  const errorColor = isError ? {neutral20: PRIMARY} : {}

  return (
    <Select
      className="react-select-container"
      classNamePrefix="react-select"
      theme={theme => ({
        ...theme,
        borderRadius: 2,
        colors: {
          ...theme.colors,
          ...errorColor,
        },
      })}
      noOptionsMessage={() => <span>{emptyDataMessage}</span>}
      {...rest}
    />
  )
}

SelectField.propTypes = {
  isError: PropTypes.bool,
  emptyDataMessage: PropTypes.string,
}

export default SelectField
