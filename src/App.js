import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import Navbar from "./components/User/Navbar";
import Layer from "./components/User/Layer";
import Footer from "./components/User/Footer";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Registerfinish from "./components/User/Registerfinish";
import Passreminder from "./components/User/Passreminder";
import Passwordinform from "./components/User/Passwordinform";
import Useradd from "./components/User/Useradd";
import Userconf from "./components/User/Userconf";
import Useraddfinish from "./components/User/Useraddfinish";
import Newpass from "./components/User/Newpass";
import Newpassfinish from "./components/User/Newpassfinish";

import UserHome from "./components/User/Userpage/UserHome";
import Rule from "./components/User/Userpage/Rule";
import Userinfor from "./components/User/Userpage/Userinfor";
import Reservationstatus from "./components/User/Userpage/Reservationstatus";
import Usermessage from "./components/User/Userpage/Usermessage";
import Sendemailconf from "./components/User/Userpage/Sendemail_conf";
import Sendemailfinish from "./components/User/Userpage/Sendemail_finish";

import ReservationSet from "./components/User/Userpage/ReservationSet";
import Reservationtest from "./components/User/Userpage/Reservationtest";
import ReservationSetfinish from "./components/User/Userpage/ReservationSetfinish";
import ReservationHistory from "./components/User/Userpage/ReservationHistory";
import RsvDetail from "./components/User/Userpage/RsvDetail";
import RsvCancel from "./components/User/Userpage/RsvCancel";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Layer />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/user/register" element={<Register />} />
            <Route exact path="/user/register/finish" element={<Registerfinish />} />
            <Route exact path="/user/passRecover" element={<Passreminder />} />
            <Route exact path="/user/passInform" element={<Passwordinform />} />
            <Route exact path="/user/add" element={<Useradd />} />
            <Route exact path="/user/add-conf" element={<Userconf />} />
            <Route exact path="/user/add-finish" element={<Useraddfinish />} />
            <Route exact path="/user/newpass" element={<Newpass />} />
            <Route exact path="/user/newpass/finish" element={<Newpassfinish />} />

            <Route exact path="/user/login" element={<UserHome />} />
            <Route exact path="/user/infor" element={<Userinfor />} />
            <Route exact path="/user/rule" element={<Rule />} />
            <Route exact path="/user/message" element={<Usermessage />} />
            <Route exact path="/user/sendemail-conf" element={<Sendemailconf />} />
            <Route exact path="/user/emailsend-finish" element={<Sendemailfinish />} />
            <Route exact path="/user/rsvStatus" element={<Reservationstatus />} />
            <Route exact path="/user/reservationSet" element={<ReservationSet />} />
            <Route exact path="/user/reservationset-conf" element={<Reservationtest />} />
            <Route exact path="/user/reservation-finish" element={<ReservationSetfinish />} />
            <Route exact path="/user/reservationHistory" element={<ReservationHistory />} />
            <Route exact path="/user/rsvdetail" element={<RsvDetail />} />
            <Route exact path="/user/reservation-cancel" element={<RsvCancel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
