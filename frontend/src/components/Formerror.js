import React from 'react';

function FormError(props) {
  console.log(props);
  return(
    <p className="text-red-500 text-xs italic">
      {props.children}
    </p>
)
}

export default FormError;