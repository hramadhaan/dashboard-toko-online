import React from 'react'

/**
 *
 * @param {Object} props
 * @param {Function} [props.onSubmit]
 * @param {String} [props.label]
 * @returns
 */
const Button = props => {
  const { label, onSubmit } = props
  const onHandler = (event) => {
    event.preventDefault()
    onSubmit()
  }
  return (
    <button onSubmit={(event) => onHandler(event)} className='cursor-pointer bg-[#475BE8] py-[10px] rounded-md'>
      <span className='text-white font-medium'>{label}</span>
    </button>
  )
}

export default Button
