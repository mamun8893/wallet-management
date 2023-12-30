import React from "react";
import styles from "./form-input.module.css";

const FormInput = ({ type, placeholder, handler, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handler(e.target.value)}
      className={styles.formInput}
    />
  );
};

export default FormInput;
