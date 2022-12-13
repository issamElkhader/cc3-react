import React from "react";
import User from "./User";
import "./ListUsers.css";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../redux/UserSlice";
function ListUser({ usersData }) {
  // show user details function
  const dispatch = useDispatch();
  const showUserDetails = (id) => {
    dispatch(userSliceActions.onChangeTheActiveId(id));
  };
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
              showUserDetails={() => showUserDetails(item.id)}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default ListUser;
