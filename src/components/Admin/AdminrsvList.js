import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import AdminrsvCalendar from "./AdminrsvCalendar";
import "./index.css";

function AdminrsvList() {
  const dispatch = useDispatch();

  return (
    <div className="AdminrsvList">
      <AdminrsvCalendar />
    </div>
  );
}

export default AdminrsvList;
