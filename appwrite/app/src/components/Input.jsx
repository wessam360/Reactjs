import React, { forwardRef, useId } from 'react'


const Input = forwardRef(function ({
label,
type = "text",
className = "",
...props
},ref) {
    const id = useId()
    return(
        <div className='w-full'>
            {
                label && <label className='block  mb-1'
                htmlFor={id} >{label}</label>
            }
            <input type={type}
            className={`  ${className}`}
            ref={ref}
            id={id}
             />

        </div>
    )
})
