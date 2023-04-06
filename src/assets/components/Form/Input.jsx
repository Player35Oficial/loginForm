import React from "react";
import { useForm } from "react-hook-form";

export default function Input({
  htmlFor = null,
  label = null,
  icon = null,
  placeholder = null,
  ...props
}) {
  return (
    <label htmlFor={htmlFor}>
      <p>{label}</p>
      <img src={icon} />
      <input placeholder={placeholder} />
    </label>
  );
}
