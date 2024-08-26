import React from 'react'

function Button({
    children,
    type = 'button',
    className = "",
    bgColor = "bg-blue-600",
    textColor = "text-white",
// all other propes are captured as props
    ...props
}) {
  return (
    <div className={` px-4 py-2 rounded-full ${bgColor} ${textColor}
    ${className}`} {...props}>
        {children}
    </div>
  )
}


export default Button
