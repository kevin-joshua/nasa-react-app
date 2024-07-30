import React from 'react'

function Main(props) {
  const {data} =props;
  return (
    <div className='relative flex flex-col min-h-screen'>
      <img src={data.url} alt={data?.title || 'bg-img'} className='absolute top-0 left-0 min-h-screen w-screen object-cover'></img>
    </div>
  )
}

export default Main
