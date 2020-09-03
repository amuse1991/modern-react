import React, { useMemo, useReducer } from "react";
// import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";

import userReducer from "./reducers/user";

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

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
      <Counter />
    </UserDispatch.Provider>
  );
}

export default App;
