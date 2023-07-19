"use client"
import { v4 as uuid } from 'uuid';
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { ToDo, TodoContextType } from '../Types'

export const CreateToDoContext = createContext<TodoContextType | null>(null)

const ToDoProvider = ({children}: {children: ReactNode}) => {

    const [todos, setTodos] = useState<ToDo[]>([])

    useEffect(()=>{
        setTodos(()=>{
            const stored = localStorage.getItem('todos')
        if(stored) return JSON.parse(stored)
        else return []
        })   
    },[])

 

    const handleAddToDo = (val:string):void =>{
        setTodos((prev) => {
            const newTodos = [...prev, { id: uuid().slice(0, 8), todo: val, completed: false }];
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return newTodos;
          });
    }

    const toggleCompleted = (id: string) => {
        setTodos((prev) => {
            const updatedTodos = prev.map((val) => {
              if (val.id === id) {
                return { ...val, completed: !val.completed };
              }
              return val;
            });
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
          });
      };

    const addEdit = (data: string, id:string) => {
        setTodos((prev) => {
            const updatedTodos = prev.map((val) => {
              if (val.id === id) {
                return { ...val, todo: data };
              }
              return val;
            });
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
          });
      };

    const handleDelete = (id:string) => {
        setTodos((prev) => {
            const updatedTodos = prev.filter((val) => val.id !== id);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos;
          });
      };


    
  return (
    <CreateToDoContext.Provider value={{todos, handleAddToDo, toggleCompleted, addEdit,handleDelete}}>
        {children}
    </CreateToDoContext.Provider>
  )
}

export default ToDoProvider