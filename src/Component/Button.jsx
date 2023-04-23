import React from 'react'

const Button = (props) => {
  return (
    <button className={`bg-${props.color} rounded-lg font-[Poppins] py-2 px-6 rounded duration-500 text-black border-2 border-black-500 `}>
      {props.children}
    </button>
  )
}

export default Button