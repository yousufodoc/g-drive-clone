import { FolderIcon as Folder } from '@heroicons/react/solid'

const FolderIcon = ({ item, handleFolderClick }) => {
  return (
    <div
      className='flex w-1/6 p-1 m-2 border border-gray-300 rounded hover:bg-gray-100'
      onDoubleClick={() => handleFolderClick(item)}
    >
      <div className='m-2'>
        <Folder className='w-6 h-6 text-gray-600' />
      </div>
      <div className='m-2 font-semibold text-gray-600 truncate'>
        {item.name}
      </div>
    </div>
  )
}

export default FolderIcon
