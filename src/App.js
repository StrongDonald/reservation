import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import Navbar from "./components/User/Navbar";
import Layer from "./components/User/Layer";
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

import AdminLayer from "./components/Admin/Layer";
import AdminNavbar from "./components/Admin/Navbar";
import AdminLogin from "./components/Admin/Login";
import AdminToppage from "./components/Admin/AdminToppage";
import AdminResetpass from "./components/Admin/Resetpass";
import AdminResetpassSend from "./components/Admin/AdminResetpassSend";
import AdminResetpassSendconf from "./components/Admin/AdminResetpassSendconf";
import AdminrsvList from "./components/Admin/AdminrsvList";
import Adminrsvframset from "./components/Admin/Adminrsvframset";
import AdminrsvAdd from "./components/Admin/AdminrsvAdd";
import Adminrsvcopy from "./components/Admin/Adminrsvcopy";
import Adminrestset from "./components/Admin/Adminrestset";
import Adminrestsetpage from "./components/Admin/Adminrestsetpage";
import Adminrsvitemset from "./components/Admin/Adminrsvitemset";
import Admincustomerset from "./components/Admin/Admincustomerset";
import Adminautomailsend from "./components/Admin/Adminautomailsend";
import Adminautomailsendedit from "./components/Admin/Adminautomailsendedit";
import Adminmainsetting from "./components/Admin/Adminmainsetting";
import Admintagsetting from "./components/Admin/Admintagsetting";
import Admidetailset from "./components/Admin/Admidetailset";
import Admincolorsetting from "./components/Admin/Admincolorsetting";
import AdminrsvView from "./components/Admin/AdminrsvView";
import Admincustomerlist from "./components/Admin/Admincustomerlist";
import Adminadminregister from "./components/Admin/Adminadminregister";
import Adminnotice from "./components/Admin/Adminnotice";
import Adminnoticeedit from "./components/Admin/Adminnoticeedit";
import Adminfilemanage from "./components/Admin/Adminfilemanage";
import Adminoperatelog from "./components/Admin/Adminoperatelog";

import ManageNavbar from "./components/Manage/Navbar";
import ManageLayer from "./components/Manage/Layer";
import ManageLogin from "./components/Manage/Login";
import ManageLoginscreen from "./components/Manage/Loginscreen";
import ManageIDcreate from "./components/Manage/IDcreate";
import ManageuserinforView from "./components/Manage/UserinforView";
import ManagersvstatusView from "./components/Manage/RsvstatusView";
import Manageadvmanage from "./components/Manage/Advmanage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={[(<Navbar />), (<Layer />), (<Login />)]} />
            <Route exact path="/user/register" element={[(<Navbar />), (<Layer />), (<Register />)]} />
            <Route exact path="/user/register/finish" element={[(<Navbar />), (<Layer />), (<Registerfinish />)]} />
            <Route exact path="/user/passRecover" element={[(<Navbar />), (<Layer />), (<Passreminder />)]} />
            <Route exact path="/user/passInform" element={[(<Navbar />), (<Layer />), (<Passwordinform />)]} />
            <Route exact path="/user/add" element={[(<Navbar />), (<Layer />), (<Useradd />)]} />
            <Route exact path="/user/add-conf" element={[(<Navbar />), (<Layer />), (<Userconf />)]} />
            <Route exact path="/user/add-finish" element={[(<Navbar />), (<Layer />), (<Useraddfinish />)]} />
            <Route exact path="/user/newpass" element={[(<Navbar />), (<Layer />), (<Newpass />)]} />
            <Route exact path="/user/newpass/finish" element={[(<Navbar />), (<Layer />), (<Newpassfinish />)]} />

            <Route exact path="/user/login" element={[(<Navbar />), (<Layer />), (<Reservationstatus />)]} />
            <Route exact path="/user/infor" element={[(<Navbar />), (<Layer />), (<Userinfor />)]} />
            <Route exact path="/user/rule" element={[(<Navbar />), (<Layer />), (<Rule />)]} />
            <Route exact path="/user/message" element={[(<Navbar />), (<Layer />), (<Usermessage />)]} />
            <Route exact path="/user/sendemail-conf" element={[(<Navbar />), (<Layer />), (<Sendemailconf />)]} />
            <Route exact path="/user/emailsend-finish" element={[(<Navbar />), (<Layer />), (<Sendemailfinish />)]} />
            <Route exact path="/user/rsvStatus" element={[(<Navbar />), (<Layer />), (<Reservationstatus />)]} />
            <Route exact path="/user/reservationSet" element={[(<Navbar />), (<Layer />), (<ReservationSet />)]} />
            <Route exact path="/user/reservationset-conf" element={[(<Navbar />), (<Layer />), (<Reservationtest />)]} />
            <Route exact path="/user/reservation-finish" element={[(<Navbar />), (<Layer />), (<ReservationSetfinish />)]} />
            <Route exact path="/user/reservationHistory" element={[(<Navbar />), (<Layer />), (<ReservationHistory />)]} />
            <Route exact path="/user/rsvdetail" element={[(<Navbar />), (<Layer />), (<RsvDetail />)]} />
            <Route exact path="/user/reservation-cancel" element={[(<Navbar />), (<Layer />), (<RsvCancel />)]} />

            <Route exact path="/admin" element={[(<AdminNavbar />), (<AdminLayer />), (<AdminLogin />)]} />
            <Route exact path="/admin/login" element={[(<AdminNavbar />), (<AdminLayer />), (<AdminToppage />)]} />
            <Route exact path="/admin/passRecover" element={[(<AdminNavbar />), (<AdminResetpass />)]} />
            <Route exact path="/admin/ResetpassSend" element={[(<AdminNavbar />), (<AdminResetpassSend />)]} />
            <Route exact path="/admin/ResetpassSend-conf" element={[(<AdminNavbar />), (<AdminResetpassSendconf />)]} />
            <Route exact path="/admin/rsvList" element={[(<AdminNavbar />), (<AdminLayer />), (<AdminrsvList />)]} />
            <Route exact path="/admin/reservationframeset" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminrsvframset />)]} />
            <Route exact path="/admin/adminrsvframesetAdd" element={[(<AdminNavbar />), (<AdminLayer />), (<AdminrsvAdd />)]} />
            <Route exact path="/admin/adminrsvcopy" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminrsvcopy />)]} />
            <Route exact path="/admin/adminrsvedit" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminrsvcopy />)]} />
            <Route exact path="/admin/restset" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminrestset />)]} />
            <Route exact path="/admin/restsetpage" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminrestsetpage />)]} />
            <Route exact path="/admin/rsvitemset" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminrsvitemset />)]} />
            <Route exact path="/admin/customerset" element={[(<AdminNavbar />), (<AdminLayer />), (<Admincustomerset />)]} />
            <Route exact path="/admin/automailsend" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminautomailsend />)]} />
            <Route exact path="/admin/automailsendedit" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminautomailsendedit />)]} />
            <Route exact path="/admin/mainsetting" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminmainsetting />)]} />
            <Route exact path="/admin/tagsetting" element={[(<AdminNavbar />), (<AdminLayer />), (<Admintagsetting />)]} />
            <Route exact path="/admin/detailset" element={[(<AdminNavbar />), (<AdminLayer />), (<Admidetailset />)]} />
            <Route exact path="/admin/colorsetting" element={[(<AdminNavbar />), (<AdminLayer />), (<Admincolorsetting />)]} />

            
            <Route exact path="/admin/rsvView" element={[(<AdminNavbar />), (<AdminLayer />), (<AdminrsvView />)]} />
            <Route exact path="/admin/customerlist" element={[(<AdminNavbar />), (<AdminLayer />), (<Admincustomerlist />)]} />
            <Route exact path="/admin/adminregister" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminadminregister />)]} />
            <Route exact path="/admin/notice" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminnotice />)]} />
            <Route exact path="/admin/noticeedit" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminnoticeedit />)]} />
            <Route exact path="/admin/filemanage" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminfilemanage />)]} />
            <Route exact path="/admin/operatelog" element={[(<AdminNavbar />), (<AdminLayer />), (<Adminoperatelog />)]} />

            <Route exact path="/manage" element={[(<ManageNavbar />), (<ManageLayer />), (<ManageLogin />)]} />
            <Route exact path="/manage/login" element={[(<ManageNavbar />), (<ManageLayer />), (<ManageLoginscreen />)]} />
            <Route exact path="/manage/IDcreate" element={[(<ManageNavbar />), (<ManageLayer />), (<ManageIDcreate />)]} />
            <Route exact path="/manage/userinforView" element={[(<ManageNavbar />), (<ManageLayer />), (<ManageuserinforView />)]} />
            <Route exact path="/manage/rsvstatusView" element={[(<ManageNavbar />), (<ManageLayer />), (<ManagersvstatusView />)]} />
            <Route exact path="/manage/advmanage" element={[(<ManageNavbar />), (<ManageLayer />), (<Manageadvmanage />)]} />

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
