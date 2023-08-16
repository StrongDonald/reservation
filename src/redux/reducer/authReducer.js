const initialization = { Title: "ログイン", isAuthenticated: 0,reservationDate:"", reservationContent:"", reservationFee:"", reservationTime:""};

function reducer(state = initialization, action) {
  switch (action.type) {
    case "login":
      return {
        Title: ">予約状況",
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
    case "reservationhistory":
    return {
      isAuthenticated: 1,
      Title: ">予約履歴",
    };
    case "rsvdetail":
    return {
      isAuthenticated: 1,
      Title: ">予約詳細",
    };
    case "rsvSet1":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: "朝と夕方（男性）",
      reservationTime: "05:00 ～ 19:00",
      reservationFee: "1日 12000円",
      reservationDate: action.date,
    };
    case "rsvSet2":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: "朝と夕方（女性）",
      reservationTime: "05:00 ～ 19:00",
      reservationFee: "1日 9000円",
      reservationDate: action.date,
    };
    case "rsvSet3":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: "朝のみ（男性）",
      reservationTime: "05:00 ～ 12:00",
      reservationFee: "1日 6000円",
      reservationDate: action.date,
    };
    case "rsvSet4":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: "朝のみ（女性）",
      reservationTime: "05:00 ～ 12:00",
      reservationFee: "1日 4500円",
      reservationDate: action.date,
    };
    case "rsvSet5":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: "朝夕方のみ（男性）",
      reservationTime: "12:00 ～ 19:00",
      reservationFee: "1日 6000円",
      reservationDate: action.date,
    };
    case "rsvSet6":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: "夕方のみ（女性）",
      reservationTime: "12:00 ～ 19:00",
      reservationFee: "1日 4500円",
      reservationDate: action.date,
    };
    case "rsvSetconf":
    return {
      isAuthenticated: 1,
      Title: ">予約登録",
      reservationContent: action.content,
      reservationTime: action.time,
      reservationFee: action.fee,
      reservationDate: action.date,
      finishdate: action.finishdate,
      finishtime: action.finishtime,
      message: action.message,
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
    case "rsvCancel":
    return {
      Title: ">予約キャンセル完了",
      isAuthenticated: 1,
    };
    case "rsvStatus":
      return {
        Title: ">予約状況",
        isAuthenticated: 1,
        reservationContent: action.content,
        reservationTime: action.time,
        reservationFee: action.fee,
        reservationDate: action.date,
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
