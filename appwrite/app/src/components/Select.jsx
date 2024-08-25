import React, { useId } from 'react'

export default function Select({
    options, // array of options 
    className = "",
    label,
    ...props
},ref) {
    const id = useId()
  return (
      <div>
      {label && <label htmlFor={id} className={``}></label>}
      <select 
      {...props}
      id={id}
      ref={ref}
      className={` ${className}`}
      >
    {
        options?.
    }
      </select>
    </div>
  )
}
