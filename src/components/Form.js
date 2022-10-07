import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Form = () => {
  
  const location = useLocation()
    const [name, setName] = useState(location.state === null ? '': location.state.name)
    const [age, setAge] = useState(location.state === null ? '':location.state.age)
    // console.log('location : ' , location.state)
    
    const handleSubmit = async () => {
        
        const resp = await axios.post('http://localhost:3000/posts', {name:name, age:age})

        if(resp){
            alert('data added')
        }else{
            alert('something went wrong')
        }
    }

  return (
    <div className='w-full flex justify-center my-4'>
   <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full flex justify-">
  <div >
    <div className="form-group mb-6">
      <label className="form-label inline-block mb-2 text-gray-700">Name</label>
      <input type="text" onChange={event => setName(event.target.value)} value={name} className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
        aria-describedby="emailHelp" placeholder="Enter Name"/>
     
    </div>
    <div className="form-group mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Age</label>
      <input type="number" onChange={event => setAge(event.target.value)} value={age} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Enter Age"/>
    </div>
   
    <button  className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" onClick={handleSubmit}>Add</button>
  </div>
</div>
</div>
  )
}

export default Form