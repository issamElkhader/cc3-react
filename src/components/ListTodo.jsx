import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListTodo() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.todo);
  let content;
  if (data.todos !== undefined) {
    const existingItem = data.todos.find((item) => item.userId === Number(id));
    if (existingItem !== undefined) {
      content = (
        <table className="table table-stripped m-4 ">
          <thead>
            <tr>
              <th>Task</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            <tr key={existingItem.id}>
              <td>{existingItem.todo}</td>
              <td>
                {existingItem.completed === true ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-success fs-5 cursor-pointer"
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    icon={faClose}
                    className="text-danger fs-5 cursor-pointer"
                  ></FontAwesomeIcon>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      content = <h2 className="ms-3">there isn't any tasks for this user</h2>;
    }
  } else {
    content = <h2 className="ms-3">there isn't any tasks for this user</h2>;
  }
  return <div className="tasksList">{content}</div>;
}

export default ListTodo;
