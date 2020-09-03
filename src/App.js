import React, { useRef, useState, useMemo } from "react";
// import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter(user => user.active).length;
}

function App() {
  const [users, setUsers] = useState([
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
  ]);

  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;
  const nextId = useRef(4);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, newUser]);
    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };

  const handleRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      <UserList users={users} onRemove={handleRemove} onToggle={handleToggle} />
      <div>활성 사용자 수 : {count}</div>
      <Counter />
    </>
  );
}

export default App;
