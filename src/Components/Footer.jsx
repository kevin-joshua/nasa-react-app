import React from 'react'

function Footer(props) {
  const {showModal,handleToggleModal,data} =props;
  return (
    <footer >
      <div className='absolute inset-0 z-[-1] bg-gradient-to-top  flex flex-col '></div>
    <div className='gap-4 fixed bottom-0 left-0 w-full p-4'> 
      <h2 className='text-3xl font-bold'>{data?.title}</h2>
      <h1 className='text-2xl py-1 font-light'>APOD PROJECT</h1>
    </div>
    <div className='fixed bottom-6 right-6'>
        <button onClick={handleToggleModal} className='bg-transparent border-0 color-white p-4 text-2xl hover:opacity-75 cursor-pointer'>
          <i className="fa-solid fa-circle-info "></i>
        </button>
      </div>
    </footer>
  )
}

export default Footer


