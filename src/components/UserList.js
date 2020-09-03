import React, { useContext } from "react";
import { UserDispatch } from "../App";

function User({ user }) {
  const dispatch = useContext(UserDispatch);

  const styleEm = {
    cursor: "pointer",
    color: user.active ? "green" : "black"
  };

  return (
    <div>
      <b
        style={styleEm}
        onClick={() => dispatch({ type: "TOGGLE_USER", id: user.id })}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        삭제
      </button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
