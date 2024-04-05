import React from "react";
import S from "./Input.module.css";

export function Input(props: any) {
    const { label, touched, errors,type, ...inputProps } = props;
    return (
        <div className={`${S.groupForm}`}>
            <label htmlFor="">{label}</label>
            <input {...inputProps} type={type}/>
            {touched && errors && (
                <p className="!text-[1em] text-red-500 !m-0 !mt-1 italic">{errors}</p>
            )}
        </div>
    );
}
