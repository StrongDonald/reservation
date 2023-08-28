const initialization = { Title: "", isAuthenticated: 0};

function reducer(state = initialization, action) {
  switch (action.type) {
    case "managelogin":
      return {
        Title: "", 
        isAuthenticated: 1,
      };
    case "managelogout":
        return {
        isAuthenticated: 0,
    };
    case "managefront":
        return {
        isAuthenticated: 1,
    };
    case "manage-login-front":
        return {
        isAuthenticated: 1,
    };
    case "IDcreate":
        return {
        Title: ">組織ID管理",
        isAuthenticated: 1,
    };
    case "userinforView":
        return {
        Title: ">会員情報閲覧",
        isAuthenticated: 1,
    };
    default:
      return "No";
  }
}

export default reducer;
