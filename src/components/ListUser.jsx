import React from "react";
import User from "./User";
import "./ListUsers.css";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../redux/UserSlice";
import { todoSliceActions } from "../redux/TodoSlice";
function ListUser({ usersData }) {
  // show user details function
  const dispatch = useDispatch()
  const showUserDetails =(id) => {
    dispatch(userSliceActions.onChangeTheActiveId(id))
    console.log("its work")
  }
  //show user tasks function
  const showUserTasks = (id) => {
    dispatch(todoSliceActions.onChangeTheActiveId(id))
  }
  return (
    <div>
      <h3 className="ms-3 ">Users List :</h3>
      <div className="listUsers">
        {usersData !== undefined &&
          usersData.map((item) => (
            <User
              key={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              showUserDetails = {() => showUserDetails(item.id)}
              showUserTasks = {() => showUserTasks(item.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default ListUser;
