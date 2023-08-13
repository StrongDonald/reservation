const initialization = { Title: "ログイン", isAuthenticated: 0 };

function reducer(state = initialization, action) {
  switch (action.type) {
    case "login":
      return {
        Title: "",
        isAuthenticated: 1,
      };
    case "logout":
      return {
        Title: ">ログイン",
        isAuthenticated: 0,
      };
    case "front":
      return {
        Title: ">ログイン",
        isAuthenticated: 0,
      };
    case "login-front":
      return {
        isAuthenticated: 1,
        Title: "",
      };
    case "user-sendemail":
    return {
      isAuthenticated: 1,
      Title: ">お問い合わせ",
    };
    case "login-register":
      return {
        isAuthenticated: 1,
        Title: ">会員編集",
      };
      case "login-passChange":
      return {
        isAuthenticated: 1,
        Title: ">パスワード変更",
      };
    case "user-infor":
    return {
      isAuthenticated: 1,
      Title: ">会員詳細",
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
    case "rsvStatus":
      return {
        Title: ">予約状況",
        isAuthenticated: 1,
      };
    case "userRule":
    return {
      Title: ">利用規約",
      isAuthenticated: 1,
    };
    case "userFront":
    return {
      Title: "",
      isAuthenticated: 1,
    };
    default:
      return "No";
  }
}

export default reducer;
