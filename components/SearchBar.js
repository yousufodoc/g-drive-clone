import {
  SearchIcon,
  AdjustmentsIcon,
  UserCircleIcon
} from '@heroicons/react/solid'

import {
  QuestionMarkCircleIcon,
  CogIcon,
  MenuIcon
} from '@heroicons/react/outline'

import logo from '../assets/logo.jpeg'

import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className='flex h-16 text-gray-600 border-b border-gray-300'>
      <div className='flex p-1 ml-3'>
        <Image
          src={logo}
          width={85}
        />
        <div className='my-auto ml-2 text-lg'> Drive</div>
      </div>
      <div className='flex w-1/2 my-2 ml-32 bg-gray-100 border border-gray-100 rounded'>
        <SearchIcon height={25} className='my-auto ml-2' />
        <input
          className='w-full mx-2 bg-gray-100 outline-none'
          placeholder='Search in Drive'
        />
        <AdjustmentsIcon height={30} className='pr-2 m-auto' />
      </div>
      <div className='flex w-2/4 my-auto'>
        <QuestionMarkCircleIcon height={25} className='relative left-1/2' />
        <CogIcon height={25} className='relative ml-8 left-1/2' />
        <MenuIcon height={25} className='relative ml-24 left-1/2' />
        <UserCircleIcon height={25} className='relative ml-5 left-1/2' />
        <div className='relative my-auto ml-2 text-lg left-1/2 '> User</div>
      </div>
    </div>
  )
}

export default SearchBar
