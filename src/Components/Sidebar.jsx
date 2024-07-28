import React from 'react'

function Sidebar(props) {
  const {handleToggleModal,data}= props;
  return (
    <div className='fixed inset-0 flex flex-col z-10' >
      <div onClick={handleToggleModal} className='absolute inset-0 bg-[#030615] opacity-30'></div>
        <div className='z-20 relative flex h-full w-80 ml-auto max-w-200 bg-[#030615] flex-col gap-4 p-4 overflow-y-scroll md:relative md:min-w-32 ' >
      <h2 className='text-3xl font-bold'>{data?.title}</h2>
      <div className='flex-1 flex-col gap-2'>
        <p className='text-[1.1 rem] font-light py-2'>{data?.date}</p>

        <p>{data?.explanation}</p>
      </div>
      <button onClick={handleToggleModal} className='bg-transparent text-white border-0 mr-auto duration-200 hover:opacity-70 p-1' >
      <i className="fa-solid fa-arrow-right"></i>
      </button>
      </div>   
      </div>
      
  )
}

export default Sidebar