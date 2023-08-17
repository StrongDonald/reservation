import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import adminauthReducer from "./adminauthReducer";

export default combineReducers({
  auth: authReducer,
  adminauth: adminauthReducer,
  errors: errorReducer
});
