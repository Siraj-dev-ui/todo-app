import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditForm from './EditForm'
const List = ({data}) => {
   const [arr, setArr] = useState([])
   const [isEditable, setIsEditable] = useState(false)
   const nagivate = useNavigate()
   const getUesrs = async () => {
    await axios.get('http://localhost:3000/posts').then((res) => setArr(res.data))
    
  }
   useEffect(()=> {
    
    getUesrs()
   },[])

   const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`).then((res) => {
      getUesrs()
    }).error((error) => {
      alert('something went wront')
    })
   }

   const HandleEdit = (item) => {
    

    nagivate('/user', { state: item })
   }
  return (
    <>
    <div className="flex flex-col text-center">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="border-b">
            <tr className=''>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Name
              </th>
              
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Age
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
{
            arr.map((item,i) => 
                
<tr className="border-b" key={i}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {item.age}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <button onClick={() => HandleEdit(item)} type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out mr-5">Edit</button>
              <button onClick={() => handleDelete(item.id)} type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
              </td>
              
            </tr>
            )
  
        }
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default List