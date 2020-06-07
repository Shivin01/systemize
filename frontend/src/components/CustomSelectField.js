import React from 'react'
import PropTypes from 'prop-types'
import {ErrorMessage, Field} from 'formik'

import FormError from './FormError'
import {parseHeader, getSelectedValue} from '../utils'
import SelectField from './SelectField'

function CustomSelectField({
  label = null,
  fieldName,
  onChangeHelper = null,
  required = false,
  render = null,
  className = 'w-full px-3',
  options = [],
  selectProps = {},
  isClearable = false,
  helpText = '',
  ...rest
}) {
  return (
    <Field name={fieldName} {...rest}>
      {({
        field,
        form: {setFieldValue, setFieldTouched},
        meta: {error, touched},
      }) => (
        <div className={className}>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={fieldName}
          >
            {label || parseHeader(fieldName)}
            {required && <span className="text-orange-800">*</span>}
            {render && render()}
          </label>
          <SelectField
            options={options}
            onChange={option => {
              setFieldValue(field.name, option ? option.value : null)
              if (onChangeHelper) {
                onChangeHelper(option)
              }
              setFieldTouched(field.name, true, true)
            }}
            onBlur={() => setFieldTouched(field.name, true)}
            value={getSelectedValue(options, field.value)}
            isClearable={isClearable}
            isError={error && touched}
            {...selectProps}
          />
          {helpText ? (
            <p className="text-gray-600 text-xs italic">{helpText}</p>
          ) : null}
          <ErrorMessage name={fieldName} component={FormError} />
        </div>
      )}
    </Field>
  )
}

CustomSelectField.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  onChangeHelper: PropTypes.func,
  required: PropTypes.bool,
  render: PropTypes.func,
  showPlaceholder: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array,
  selectProps: PropTypes.object,
  isClearable: PropTypes.bool,
  helpText: PropTypes.string,
}

export default CustomSelectField
