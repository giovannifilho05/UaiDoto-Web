import React from "react";

export default function Input({ label, className, ...props }) {
  return (
    <div className={ `form-group ${ className }` }>
      <label htmlFor={ props.id }>{ label }</label>
      <input className="form-control" { ...props }  />
    </div>
  )
}
