const initialization = { Title: "ログイン" };

function reducer(state = initialization, action) {
  switch (action.type) {
    case "login":
      return {
        Title: "",
      };
    case "front":
      return {
        Title: ">ログイン",
      };
    case "register":
      return {
        Title: ">メールアドレス登録",
      };
      case "passinform":
      return {
        Title: ">パスワードリマインダー完了",
      };
      case "registerFinish":
      return {
        Title: ">メールアドレス登録完了",
      };
      case "newpassFinish":
      return {
        Title: ">パスワード再設定 完了",
      };
      case "useraddFinish":
      return {
        Title: ">会員登録",
      };
    case "passRecover":
      return {
        Title: ">パスワードリマインダー",
      };
    default:
      return "No";
  }
}

export default reducer;
