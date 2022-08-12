import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FolderIcon from '../components/FolderIcon'
import DropDown from '../components/DropDown'
import SearchBar from '../components/SearchBar'
import TextFileIcon from '../components/TextFileIcon'
import Modal from '../components/Modal'
import { actions } from '../store'

export default function Home() {
  const dispatch = useDispatch()

  const folders = useSelector((state) => state.folders)

  const [showDropDown, setShowDropDown] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [newInfo, setNewInfo] = useState({ type: '', name: '' })
  const [selectedFolder, setSelectedFolder] = useState({
    id: 0,
    name: 'My Drive'
  })

  const handleButtonClick = () => {
    setShowDropDown(!showDropDown)
  }

  const handleDropDownClick = (type) => {
    if (type === 'folder') {
      setNewInfo({ type, name: 'New Folder' })
    } else if (type === 'textFile') {
      setNewInfo({ type, name: 'New Text File' })
    }

    setShowModal(true)
    setShowDropDown(false)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleCreateFn = (name, type) => {
    const saveObj = {
      id: Date.now(),
      isFolder: type === 'folder',
      isFile: type === 'textFile',
      name: type === 'textFile' ? `${name}.txt` : name,
      parentFolder: selectedFolder.id
    }

    dispatch(actions.addNewFolder(saveObj))
    setShowModal(false)
  }

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder)
  }

  useEffect(() => {
    console.log({ folders })
  }, [folders])
  return (
    <div>
      <SearchBar />
      <div className='flex'>
        <div className='w-80'>
          <button
            className='w-1/2 p-2 m-2 border shadow-md rounded-3xl hover:bg-gray-200'
            onClick={handleButtonClick}
          >
            New
          </button>
        </div>
        <div className='flex flex-wrap w-full'>
          <div className='w-full py-5 my-auto font-semibold text-gray-600 border-b'>
            {selectedFolder.name}
          </div>
          {folders &&
            folders.map((item) =>
              item.parentFolder === selectedFolder.id
                ? (item.isFolder
                  ? (
                    <FolderIcon
                      item={item}
                      handleFolderClick={handleFolderClick}
                    />
                  ) : (
                    <TextFileIcon name={item.name} />
                  )
                ) : (
                  ''
                )
            )}
        </div>
      </div>
      {showDropDown && (
        <DropDown
          handleDropDownClick={handleDropDownClick}
          items={[
            { id: 1, name: 'New Folder', type: 'folder' },
            { id: 2, name: 'New Text File', type: 'textFile' }
          ]}
        />
      )}
      {showModal && (
        <div className='relative left-1/3 top-20'>
          <Modal
            type={newInfo.type}
            label={newInfo.name}
            handleCreate={handleCreateFn}
            handleClose={handleModalClose}
          />
        </div>
      )}
    </div>
  )
}
