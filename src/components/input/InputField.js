import React from "react";
import style from "../../styles/inputfield/InputField.module.css";
// import style from "@/styles/Inputfield/InputField.module.css";

export default function InputField() {
  return (
    <div className={style.centered}>
      <div className={style.group}>
        <input className={style.input} type="text" id="name" required />
        <label className={style.label} for="name">
          Name
        </label>
        <div className={style.bar}></div>
      </div>
    </div>
  );
}
