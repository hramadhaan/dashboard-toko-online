import React from 'react'

const CenterLayout = (props) => {
  return (
    <div className='fixed inset-0'>
      <div className='h-full w-full flex items-center justify-center'>
        {props.children}
      </div>
    </div>
  )
}

export default CenterLayout
