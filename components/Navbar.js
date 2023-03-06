import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'

function Navbar (props) {
  const { routes, indexTab } = props
  const [valueSearch, setValueSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-row items-center md:justify-between justify-between z-10 bg-white md:mx-0 mx-3'>
      {/* Input container */}
      <div className='flex flex-row items-center md:w-fit w-full'>
        <button onClick={() => setIsOpen(true)} className='md:hidden flex p-2 border rounded-sm'>
          <FiMenu />
        </button>
        <div className='flex flex-row md:w-[405px] w-3/4 py-[10px] px-[15px] bg-[#F4F4F4] rounded-md mx-2 md:mx-0'>
          <input
            value={valueSearch}
            onChange={(value) => setValueSearch(value.currentTarget.value)}
            type='text'
            className='bg-transparent text-sm w-full text-[#808191] outline-none'
            placeholder='Search Property, Customer, etc'
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
              alert(valueSearch) // eslint-disable-line
              }
            }}
          />
        </div>
      </div>
      {/* Profile & Notification */}
      <div className='flex-row items-center flex'>
        <Image src='/icons/notification.svg' width={24} height={24} className='cursor-pointer' alt='notification icon' />

        <Menu as='div' className='flex flex-row items-center cursor-pointer'>
          <Menu.Button className='flex'>
            <img src='https://randomuser.me/api/portraits/men/67.jpg' className='h-[40px] w-[40px] rounded-full md:ml-5 ml-2' />
            <div className='md:flex md:flex-col md:items-start md:ml-5 hidden'>
              <p className='text-sm text-[#11142D] font-semibold'>Hanif Ramadhan</p>
              <p className='text-sm text-[#808191] font-light'>Company Manager</p>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-[15px] top-[74px] w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                      active ? 'text-[#475BE8]' : 'text-[#808191]'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Edit Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'text-[#475BE8]' : 'text-[#808191]'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Settings
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'text-[#475BE8]' : 'text-[#808191]'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {/* Mobile Menu */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 md:hidden block' onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 -translate-x-96'
                enterTo='opacity-100 translate-x-0'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-x-0'
                leaveTo='opacity-0 -translate-x-96'
              >
                <Dialog.Panel className='absolute left-0 top-0 w-3/4 h-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='div'
                    className='flex flex-row items-center cursor-pointer'
                  >
                    <Image src='/icons/Logo.svg' alt='logo icon' width={34.54} height={38.72} />
                    <label className='text-xl font-semibold ml-2 cursor-pointer'>Yariga</label>
                  </Dialog.Title>
                  <div className='mt-4'>
                    {routes.map((item, index) => {
                      return (
                        <Link
                          href={item.route}
                          key={`route - ${index}`}
                          onClick={() => {
                            setIsOpen(false)
                          }}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Navbar
