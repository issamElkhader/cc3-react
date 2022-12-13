import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function User({image , firstName ,lastName , showUserDetails, showUserTasks}) {
  const {activeId} = useSelector(state => state.todo)
  console.log(activeId)
  
  return (
    <div>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{firstName + " " + lastName}</Card.Title>
                <div className='d-flex justify-content-space align-item-center gap-3'>
                  <Button variant="primary" onClick={showUserDetails}>
                    <Link to ="./userDetails" className='text-white text-decoration-none'>User details</Link>
                  </Button>
                  <Button variant="primary" onClick={showUserTasks}>
                    <Link to={`./userTasks:${activeId}`} className='text-white text-decoration-none'>Tasks List</Link>
                  </Button>
                </div>
            </Card.Body>
    </Card>
    </div>
  )
}

export default User