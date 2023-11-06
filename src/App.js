import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {apiURL, filterData} from "./data";
import {toast} from "react-toastify"


const App = () => {

  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);//-> to show buffering circle
  const[category, setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true)
    try{
      let res = await fetch(apiURL);
      let output = await res.json();
      // saving data to courses
      setCourses(output.data)
    }
    catch(error){
      toast.error("API fetch nhi hua")
    }
    setLoading(false)
  }

  useEffect(()=> {
    fetchData();
  },[])


  return (
    <div className='min-h-screen flex flex-col bg-black bg-opacity-50'>

      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

    </div>
  )
}

export default App
