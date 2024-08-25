import React, { useId } from 'react'

function Select({
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
        options?.map((option)=>{
            <option key={option} value={option}>
                {option}
            </option>
        })
    }
      </select>
    </div>
  )
}

export default React.forwardRef(Select)