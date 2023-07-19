"use client"
import { CreateToDoContext } from '@/app/Context/ToDoProvider'
import { useContext, useState } from 'react'
import TodoRow from './TodoRow'




const TodoLists = () => {
 
const {todos, handleAddToDo}=  useContext(CreateToDoContext) || { todos: [], handleAddToDo: () => {} }
const [todo, setTodo] = useState<string>('')


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value)
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    handleAddToDo(todo)
    setTodo('')
  }
 console.log(todos)
  return (
    <section>
      <form className='flex gap-6 items-center' onSubmit={handleSubmit}>
        <input type='text' placeholder='write down your task....' className='border border-gray-500 px-2 py-3 rounded-md w-full focus:scale-x-110 transition-transform duration-200 outline-none' onChange={handleChange} value={todo} required></input>
        <button type='submit' className='px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-md text-white active:translate-y-1 transition-transform duration-300'>Add</button>
      </form>

      <ul className='w-ful flex flex-col items-start justify-between gap-3 px-4 py-6'>

      {todos.length> 0 && todos.map((el) =><TodoRow data={el} key={el.id}></TodoRow>)}

      </ul>

    </section>
  )
}

export default TodoLists