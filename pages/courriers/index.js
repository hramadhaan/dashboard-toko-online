// import Modal from '@/components/Modal'
import MainLayout from '@/layouts/MainLayout'
import Head from 'next/head'

export default function Review () {
  return (
    <>
      <Head>
        <title>Review</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <MainLayout>
          <div className='w-full h-full bg-[#F4F4F4] mt-[28px]'>
            <p>Review</p>
          </div>
        </MainLayout>
      </main>
    </>
  )
}