import React, { useRef, useMemo, useReducer } from "react";
// import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";

import userReducer from "./reducers/user";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter(user => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]
};

function App() {
  const [form, onChange, reset] = useInputs({
    username: "",
    email: ""
  });
  const { username, email } = form;
  const [state, dispatch] = useReducer(userReducer, initialState);

  const { users } = state;

  const nextId = useRef(4);

  const handleCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email
      }
    });

    reset();
    nextId.current += 1;
  };

  const handleRemove = id => {
    dispatch({
      type: "REMOVE_USER",
      id
    });
  };

  const handleToggle = id => {
    dispatch({
      type: "TOGGLE_USER",
      id
    });
  };

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={handleCreate}
      />
      <UserList users={users} onRemove={handleRemove} onToggle={handleToggle} />
      <div>활성 사용자 수 : {count}</div>
      <Counter />
    </>
  );
}

export default App;
