import React from 'react'

/**
 *
 * @typedef { "text" | "password" | "email" | "number" } TypeFormat
 *
 * @param {Object} props
 * @param {String} [props.label]
 * @param {String} [props.placeholder]
 * @param {TypeFormat} [props.type]
 * @param {Function!} [props.onHandler]
 * @param {String} [props.value]
 * @returns
 */
const TextInput = props => {
  const { label, placeholder, type, onHandler, value } = props
  return (
    <div className='flex flex-col'>
      <label className='font-medium text-base text-[#11142D]'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={event => onHandler(event.target.value)}
        className='py-[11px] px-[12px] border border-[#E4E4E4] rounded-md outline-none mt-3'
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextInput
