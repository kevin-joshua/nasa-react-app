import React from 'react'

function Main(props) {
  const {data} =props;
  return (
    <div className="flex w-screen max-h-screen ">
      <img src={data.url} alt={data?.title || 'bg-img'} className="h-full w-full object-fit "></img>
    </div>
  )
}

export default Main
