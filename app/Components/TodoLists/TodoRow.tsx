import { CreateToDoContext } from '@/app/Context/ToDoProvider'
import { ToDo } from '@/app/Types'
import React, { useContext, useState } from 'react'



const TodoRow = ({data}: {data:ToDo}) => {
    const [edit, setEdit] = useState(false)
    const {toggleCompleted,addEdit} = useContext(CreateToDoContext) || {toggleCompleted: (id)=>{}, addEdit: ()=>{}}

    const handleEdit =(e:React.FormEvent) => {
        e.preventDefault()
        addEdit(e.target?.edit?.value, data.id)
        setEdit(false)
    }

  return (
    <li key={data.id} className='flex justify-between w-full items-center gap-4'>
           {!edit && <><div>
          <input type='checkbox' name='check' id={data.id} checked={data.completed} onChange={()=> toggleCompleted(data.id)}></input>
          <label htmlFor={data.id} className='ms-2'>Completed</label>
          </div>
          <p>{data.todo}</p></>}
          {data.completed ? <button className='px-2 py-1 text-center bg-red-600 text-white'>Delete</button>:edit?
          <form className='flex gap-2 items-center' onSubmit={handleEdit}>
          <input type='text' placeholder='edit' name='edit' className='border border-gray-500 px-2 py-1 rounded-md w-4/5 outline-none' required></input>
          <button type='submit' className='px-2 py-1 text-sm bg-rose-500 hover:bg-rose-600 rounded-md text-white active:translate-y-1 transition-transform duration-300'>submit</button>
          <a className='px-2 py-1 text-sm bg-indigo-500 hover:bg-indigo-600 rounded-md text-white active:translate-y-1 transition-transform duration-300' onClick={()=> setEdit(false)}>cancel</a>
        </form>
          :
          <button className='px-2 py-1 text-center bg-indigo-600 text-white' onClick={() => setEdit(true)}>Edit</button>}
        </li>
  )
}

export default TodoRow