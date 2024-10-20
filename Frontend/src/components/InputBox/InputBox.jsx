import React, { useEffect, useRef } from 'react'
import "./inputbox.css"
const InputBox = ({labelName ,ref, id , notImp , name ,type , className , placeholder , onKeyPress , disabled , value , onChange , isError , erroMessage   }) => {
   
  return (
    <div className='visibleInput'>
          <label className={"visible"} htmlFor={id}>
        {labelName}
        {!notImp && <span className={"impRed"}> *</span>}
     
      </label>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name= {name}
        id={id}
        ref={ref}
      
      />
      {isError && <span className="FormError">{erroMessage}</span>}
    </div>
  )
}

export default InputBox