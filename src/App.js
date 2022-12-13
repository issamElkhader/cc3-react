import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from './redux/UserSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ListUser from './components/ListUser';
import DetailUser from './components/DetailUser';
import { Route, Routes } from 'react-router-dom';
import ListTodo from './components/ListTodo';

function App() {
  const {data , isLoading , error , activeId} = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  } , [dispatch])

  let content 
  if(isLoading === true) {
    content = <h1>is loading ...</h1>
  } else if(isLoading === false && error !=="" ){
    content = <h1>something get wrong !!!</h1>
  }else {
    content = <ListUser usersData={data.users} />
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={content}/>
        <Route path="/userDetails" element={<DetailUser/>} />
        <Route path='./userTasks:id' element= {<ListTodo/>}/>
      </Routes>
    </div>
  )
}

export default App
