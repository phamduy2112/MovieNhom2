import React from 'react'
import S from './Input.module.css';
export function Input(props) {
    const {name,...props1}=props
  return (
    <div className={`${S.groupForm}`}>
        <label htmlFor="">{name}</label>
    <input {...props1}/>
    </div>
  )
}


