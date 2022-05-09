import React from "react";
import InputMask from 'react-input-mask';

export default function Input({ label, className, ...props },) {
  return (
    <div className={ `form-group ${ className }` } >
      <label htmlFor={ props.id }>{ label }</label>
      <InputMask className="form-control" { ...props }  />
    </div>
  )
}
