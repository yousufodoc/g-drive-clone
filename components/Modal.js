import { useState } from 'react'

const Modal = ({ label, type, handleClose, handleCreate }) => {
  const [name, setName] = useState('')
  return (
    <div className='p-2 ml-20 text-gray-600 bg-white border rounded w-60'>
      <label className='ml-2 font-bold '>{label}</label>
      <input
        className='p-1 m-2 border rounded shadow-sm'
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <div className='relative left-20'>
        <button className='m-2' onClick={handleClose}>
          Cancel
        </button>
        <button
          className='m-2 text-blue-400 hover:to-blue-800'
          onClick={() => handleCreate(name, type)}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default Modal
