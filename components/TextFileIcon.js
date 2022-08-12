import { DocumentIcon } from '@heroicons/react/solid'

const TextFileIcon = ({ name }) => {
  return (
    <div className='flex w-1/6 p-1 m-2 border border-gray-300 rounded'>
      <div className='m-2'>
        <DocumentIcon className='w-6 h-6 text-blue-500' />
      </div>
      <div className='m-2 font-semibold text-gray-600 truncate'>{name}</div>
    </div>
  )
}

export default TextFileIcon
