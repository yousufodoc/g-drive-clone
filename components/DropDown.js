const DropDown = ({ handleDropDownClick, items }) => {
  return (
    <div className='absolute w-48 m-6 text-gray-600 bg-white border rounded top-16 left-2'>
      {items.map((item, index) =>{ 
        let style = 'p-1 m-1 text-center cursor-pointer hover:bg-gray-100'
        items.length - 1 === index ? '' : style += ' border-b'
        return <div
          key={item.id}
          className={style}
          onClick={() => handleDropDownClick(item.type)}
        >
          {item.name}
        </div>
      })}
    </div>
  )
}

export default DropDown
