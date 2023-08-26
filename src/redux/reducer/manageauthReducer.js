const initialization = { Title: 0, isAuthenticated: 0};

function reducer(state = initialization, action) {
  switch (action.type) {
    case "managelogin":
      return {
        isAuthenticated: 1,
      };
    case "managelogout":
        return {
        isAuthenticated: 0,
    };
    case "manage-login-front":
        return {
        isAuthenticated: 1,
    };
    default:
      return "No";
  }
}

export default reducer;
