import React from 'react'
import { useParams } from 'react-router-dom'

function ListTodo() {
    const {id} = useParams() 
    return (
    <div>{id}</div>
  )
}

export default ListTodo