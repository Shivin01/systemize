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
  className = 'w-full px-3',
  helpText = '',
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
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={fieldName}
          >
            {label || parseHeader(fieldName)}
            {required && <span className="text-orange-800">*</span>}
            {render && render()}
          </label>
          {type === 'textarea' ? (
            <textarea
              {...field}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={e => {
                field.onChange(e)
                if (onChangeHelper) {
                  onChangeHelper(e.target.value)
                }
              }}
              autoComplete={type === 'password' ? 'new-password' : null}
            />
          ) : (
            <input
              {...field}
              type={type}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={e => {
                field.onChange(e)
                if (onChangeHelper) {
                  onChangeHelper(e.target.value)
                }
              }}
              autoComplete={type === 'password' ? 'new-password' : null}
            />
          )}
          {helpText ? (
            <p className="text-gray-600 text-xs italic">{helpText}</p>
          ) : null}
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
  helpText: PropTypes.string,
}

export default CustomField
