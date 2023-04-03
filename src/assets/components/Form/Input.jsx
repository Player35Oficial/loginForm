import React from "react";

export default function Input({
  htmlFor = null,
  label = null,
  icon = null,
  type = null,
  id = htmlFor,
  placeholder = null,
  onFocus = null,
  ...props
}) {
  return (
    <label htmlFor={htmlFor}>
      <p>{label}</p>
      <img src={icon} />
      <input
        type={type}
        name=""
        id={id}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </label>
  );
}
