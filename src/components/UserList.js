import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  const styleEm = {
    cursor: "pointer",
    color: user.active ? "green" : "black"
  };

  return (
    <div>
      <b style={styleEm} onClick={() => onToggle(user.id)}>
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
