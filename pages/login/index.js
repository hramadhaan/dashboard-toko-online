import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import CenterLayout from '@/layouts/CenterLayout'
import React, { useCallback, useState } from 'react'

function Login (props) {
// Local State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Event
  const onHandleSubmit = useCallback((event) => {
    event.preventDefault()
    alert(password) // eslint-disable-line
  }, [email, password])

  const onHandlerInput = (type = 'email', value = '') => {
    if (type === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <main className='flex flex-row md:h-screen h-full'>
      <div className='w-full bg-white'>
        <div className='flex flex-col items-center md:justify-center justify-start pt-8 md:pt-0 h-full w-full px-4 md:px-0'>
          <form onSubmit={(event) => { onHandleSubmit(event) }} className='md:w-8/12 w-full h-fit flex flex-col'>
            <p className='font-bold text-2xl'>Welcome Back</p>
            <p className='font-light text-lg'>Welcome Back! Please enter your details</p>
            <br />
            <TextInput label='Email' placeholder='Enter your email' value={email} onHandler={(value) => { onHandlerInput('email', value) }} />
            <br />
            <TextInput label='Password' placeholder='Enter your password' type='password' value={password} onHandler={(value) => { onHandlerInput('password', value) }} />
            <br />
            <Button onSubmit={onHandleSubmit} label='Sign In' />
          </form>
        </div>
      </div>
      <img src='/images/login_image.png' className='w-full h-full hidden md:block' />
    </main>
  )
}

export default Login
