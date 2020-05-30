import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Button({size, bgColor, textColor, type = 'button', children}) {
  return (
    <button
      type={type}
      className={classnames(
        `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`,
        {
          'text-xs': size === 'sm',
          'text-xl': size === 'lg',
        },
      )}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.number.isRequired,
}

export default Button
