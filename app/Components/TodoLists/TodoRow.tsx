"use client"
import { CreateToDoContext } from '@/app/Context/ToDoProvider'
import { ToDo } from '@/app/Types'
import React, { useContext, useRef, useState } from 'react'



const TodoRow = ({data}: {data:ToDo}) => {
    const [edit, setEdit] = useState(false)
    const edited = useRef<HTMLInputElement>(null)
    const {toggleCompleted,addEdit, handleDelete} = useContext(CreateToDoContext) || {toggleCompleted: (id)=>{}, addEdit: ()=>{}, handleDelete: ()=>{}}

    const handleEdit =(e:React.FormEvent) => {
        e.preventDefault()
        
        if(edited.current){
        addEdit(edited.current.value, data.id)
        setEdit(false)
    }
    }


  return (
    <li key={data.id} className='flex justify-between w-full items-center gap-4'>
           {!edit && <><div className='flex flex-col justify-center md:flex-row'>
          <input type='checkbox' name='check' id={data.id} checked={data.completed} onChange={()=> toggleCompleted(data.id)}></input>
          <label htmlFor={data.id} className='ms-2 text-xs'>Completed</label>
          </div>
          <p className={data.completed?'text-indigo-600 flex items-center gap-1 text-sm md:text-[1rem]': "text-sm md:text-[1rem]"}>
            
           {data.completed && <svg
            viewBox="0 0 1024 1024"
            fill="green"
            height="1em"
            width="1em"
            display="inline-block"
            >
            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
            </svg>}

            {data.todo}
            
            </p>
            </>}
          {data.completed ? <button className='px-2 py-1 text-center text-xs md:text-sm bg-red-600 text-white' onClick={() => handleDelete(data.id)}>Delete</button>:edit?
          <form className='flex gap-2 items-center justify-center mx-auto' onSubmit={handleEdit}>
          <input type='text' placeholder='edit' className='border border-gray-500 px-2 py-1 rounded-md w-4/5 outline-none' required defaultValue={data.todo} ref={edited}></input>
          <button type='submit' className='px-2 py-1 text-xs md:text-sm bg-rose-500 hover:bg-rose-600 rounded-md text-white active:translate-y-1 transition-transform duration-300'>submit</button>
          <a className='px-2 py-1 text-sm bg-slate-200 hover:bg-gray-300 cursor-pointer rounded-md active:translate-y-1 transition-transform duration-300' onClick={()=> setEdit(false)}>cancel</a>
        </form>
          :
          <div className='text-xs md:text-sm flex flex-col justify-center md:flex-row'>
          <button className='px-2 py-1 text-center bg-slate-200 hover:bg-gray-300' onClick={() => setEdit(true)}>Edit</button>
          <button className='px-2 py-1 text-center bg-rose-500 hover:bg-rose-600 text-white' onClick={() => handleDelete(data.id)}>Remove</button>
          </div>}
        </li>
  )
}

export default TodoRow