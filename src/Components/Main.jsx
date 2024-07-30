import React from 'react'

function Main(props) {
  const {data} =props;
  return (
    <div className='flex flex-col'>
      <img src={data.url} alt={data?.title || 'bg-img'} className='lg:max-h-screen md:min-h-screen w-screen object-cover'></img>
    </div>
  )
}

export default Main
