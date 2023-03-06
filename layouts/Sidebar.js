import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

function Sidebar (props) {
  const { routes, indexTab } = props

  return (
    <div className='w-1/5 hidden md:block bg-white py-[15px] pl-[20px]'>
      {/* Icon Container */}
      <Link href='/'>
        <div className='flex flex-row items-center cursor-pointer'>
          <Image src='/icons/Logo.svg' alt='logo icon' width={38} height={38} />
          <label className='text-xl font-semibold ml-2 cursor-pointer'>Yariga</label>
        </div>
      </Link>
      <div className='mt-[41px]'>
        {routes.map((item, index) => {
          return (
            <Link
              href={item.route}
              key={`route - ${index}`}
            >
              <div
                className={`w-full ${indexTab === index ? 'bg-[#475BE8] shadow-xl' : 'bg-white'} px-[23px] py-[16px] cursor-pointer flex flex-row rounded-lg items-center`}
              >
                {indexTab === index ? item.iconActive : item.iconInActive}
                <label className={`text-md ${indexTab === index ? 'text-white' : 'text-[#808191]'} font-medium ml-2 cursor-pointer`}>{item.name}</label>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
