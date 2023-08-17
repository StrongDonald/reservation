const initialization = { Title: 0, isAuthenticated: 0};

function reducer(state = initialization, action) {
  switch (action.type) {
    case "adminlogin":
      return {
        isAuthenticated: 1,
      };
    case "adminlogout":
        return {
        isAuthenticated: 0,
    };
    case "admin-login-front":
        return {
        isAuthenticated: 1,
    };
    case "adminrsvList":
        return {
        Title: 1,
        isAuthenticated: 1,
    };
    default:
      return "No";
  }
}

export default reducer;
