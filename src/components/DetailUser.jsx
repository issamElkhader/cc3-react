import React from 'react'
import { useSelector } from 'react-redux'

function DetailUser() {
  const {activeId , data} = useSelector(state => state.users)
  
  let content 
  if(data.users !== undefined) {
    const existingItem = data.users.find((item) => item.id === activeId)
    console.log(existingItem)
    if(existingItem !== undefined) {
        content = <table className='table table-stripped'>
        <thead>
            <tr>
                <th>image</th>
                <th>first name</th>
                <th>last name</th>
                <th>age</th>
                <th>gender</th>
                <th>email</th>
                <th>phone</th>
                <th>weight</th>
                <th>hauteur</th>
                <th>birthDate</th>
                <th>bloodGroup </th>
                <th>la couleur de l'œil </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                    <td>
                        <img src={existingItem.image} alt="not found" />
                    </td>
                    <td>{existingItem.firstName}</td>
                    <td>{existingItem.lastName}</td>
                    <td>{existingItem.age}</td>
                    <td>{existingItem.gender}</td>
                    <td>{existingItem.email}</td>
                    <td>{existingItem.phone}</td>
                    <td>{existingItem.weight}</td>
                    <td>{existingItem.height}</td>
                    <td>{existingItem.birthDate}</td>
                    <td>{existingItem.bloodGroup}</td>
                    <td>{existingItem.eyeColor}</td>
                </tr>
        </tbody>
    </table>
    }else {
        content = <h2>No data available for this user</h2>
    }
  }
  return (
    <div>
        {content}
    </div>
  )
}

export default DetailUser