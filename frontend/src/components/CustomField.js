import React from 'react'
import PropTypes from 'prop-types'
import {ErrorMessage, Field} from 'formik'
import FormError from './FormError'
import {parseHeader} from '../utils'

function CustomField({
  label = null,
  fieldName,
  type = 'text',
  onChangeHelper = null,
  required = false,
  render = null,
  className = 'mb-4',
  ...rest
}) {
  return (
    <Field
      name={fieldName}
      validate={value => {
        if (type === 'number') {
          return value < 0
            ? `${label || parseHeader(fieldName)} cannot be negative value`
            : undefined
        }
        return undefined
      }}
      {...rest}
    >
      {({field}) => (
        <div className={className}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={fieldName}
          >
            {label || parseHeader(fieldName)}
            {required && <span className="text-orange-800">*</span>}
            {render && render()}
          </label>
          <input
            {...field}
            type={type}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={e => {
              field.onChange(e)
              if (onChangeHelper) {
                onChangeHelper(e.target.value)
              }
            }}
            autoComplete={type === 'password' ? 'new-password' : null}
          />
          <ErrorMessage name={fieldName} component={FormError} />
        </div>
      )}
    </Field>
  )
}

CustomField.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  onChangeHelper: PropTypes.func,
  required: PropTypes.bool,
  render: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
}

export default CustomField
