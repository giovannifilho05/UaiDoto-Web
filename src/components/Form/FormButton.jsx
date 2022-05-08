import React from "react";

export default function FormButton({ btnClass, divClass, children, ...props }) {
  return (
    <div className={`form-group ${divClass}`}>
      <button className={`btn ${btnClass}`} {...props}>
        { children }
      </button>
    </div>
  );
}
