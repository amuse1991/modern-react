function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM":
      return { ...state, [action.name]: action.value };
    case "RESET_FORM":
      return action.initialForm ? { ...action.initialForm } : {};
    default:
      return state;
  }
}

export default reducer;
