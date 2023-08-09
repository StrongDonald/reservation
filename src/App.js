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
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
