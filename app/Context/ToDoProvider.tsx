"use client"
import { v4 as uuid } from 'uuid';
import React, { ReactNode, createContext, useState } from 'react'
import { ToDo, TodoContextType } from '../Types'

export const CreateToDoContext = createContext< TodoContextType | null>(null)

const ToDoProvider = ({children}: {children: ReactNode}) => {

    const [todos, setTodos] = useState<ToDo[]>([])

    const handleAddToDo = (val:string):void =>{
        setTodos((prev) => [...prev, {id: uuid().slice(0, 8), todo: val, completed: false}])
    }

    const toggleCompleted = (id: string) => {
        setTodos(prev => {
          return prev.map((val) => {
            if (val.id === id) {
              return { ...val, completed: !val.completed };
            }
            return val; 
          });
        });
      };

    const addEdit = (data: string, id:string) => {
        setTodos(prev => {
          return prev.map((val) => {
            if (val.id === id) {
              return { ...val, todo: data };
            }
            return val; 
          });
        });
      };


    
  return (
    <CreateToDoContext.Provider value={{todos, handleAddToDo, toggleCompleted, addEdit}}>
        {children}
    </CreateToDoContext.Provider>
  )
}

export default ToDoProvider