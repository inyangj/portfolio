import React from 'react'

const Button = ({children, onClick, className}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1a1c46] ${className} shadow-buttonShadow border border-white hover:border-[#007CED] text-white px-4 py-2 rounded-3xl`}
    >
      {children}
    </button>
  );
}

export default Button