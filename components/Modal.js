import React from 'react'

const Modal = ({ isVisible = false, onHandler = (value) => { } }) => {
  if (!isVisible) {
    return null
  }
  return (
    <div className='fixed inset-0 bg-blue-100 bg-opacity-70 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-2 rounded-sm w-full mx-10'>
        <p>Hello World</p>
        <button onClick={() => onHandler(false)}>X</button>
      </div>
    </div>
  )
}

export default Modal
