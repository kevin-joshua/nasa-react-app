import React, { useEffect, useState } from 'react'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

function App() {
  const [data,setData] = useState(null)
  const [loading,setLoading] =useState(false)
  const [showModal, setModal] = useState(false);

  function handleToggleModal() {
    setModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = 'l0MKxNNdO6rURKc3yveWJGRzBUdclCNB9F9ZAAna'
        console.log(NASA_KEY)
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = (new Date( )).toDateString();
      const localKey =`NASA-${today}`
      if (localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('fetched from cache')
        return
      }
      localStorage.clear()
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched from API')

        console.log('DATA\n', apiData);
      } 
        catch (err) {
          console.log(err.message);
        }
      
    }
   fetchAPIData();
  }, []);

  return (
    <>
      {data ?(<Main data={data} />):
      <div className='flex items-center justify-center w-screen'>
        <i className="fa-solid fa-gear opacity-20 text-5xl animate-spin"></i>
      </div>
      }
      {showModal && <Sidebar data={data} handleToggleModal={handleToggleModal} />}
     {data && (
      <Footer  data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  );
}

export default App;
