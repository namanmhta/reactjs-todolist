import React from 'react'
import TodoCards from './TodoCards'

export default function TodoLists(props) {
  const {todos}= props

  return (
    <ul className='main'> 
      {todos.map((todo, todoIndex)=>{
        return(
          <TodoCards {...props} key={todoIndex}
          index = {todoIndex}>
            <p>{todo}</p>
          </TodoCards>
      )
      })}
    </ul>
  )
}
