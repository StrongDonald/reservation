import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import adminauthReducer from "./adminauthReducer";
import manageauthReducer from "./manageauthReducer";

export default combineReducers({
  auth: authReducer,
  adminauth: adminauthReducer,
  manageauth: manageauthReducer,
  errors: errorReducer
});
