function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user)
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      return state;
  }
}

export default reducer;
