import React from "react";

export default function Select({ className, children, label, ...props }) {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={props.id}>{label}</label>
      <select className="form-select" {...props}>
        <option value="">{ label }</option>
        { children }
      </select>
    </div>
  );
}