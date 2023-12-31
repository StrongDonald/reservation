import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RefreshIcon from "@mui/icons-material/Refresh";
import Tooltip from "@mui/material/Tooltip";
import Calendar from "react-calendar";
import Modal from "@mui/material/Modal";

function Day_calc(str) {
  let arr = str.split(" ");
  let days = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
  let cur_date = arr[2];
  if (days[arr[0]] - (cur_date % 7) > 0) return days[arr[0]] - (cur_date % 7);
  else if (days[arr[0]] - (cur_date % 7) < 0)
    return days[arr[0]] - (cur_date % 7) + 7;
  else return 0;
}

function Date_cntCalc(str) {
  let arr = str.split(" ");
  let cur_month = arr[1];
  let cur_year = arr[3];
  let num = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  if (cur_month === "Feb") {
    if (cur_year % 400 === 0 || (cur_year % 4 === 0 && cur_year % 100 !== 0))
      return 29;
    return 28;
  }
  if (num[cur_month] <= 7) {
    if (num[cur_month] % 2) return 31;
    return 30;
  } else {
    if (num[cur_month] % 2) return 30;
    return 31;
  }
}

function AdminrsvCalendar() {
  const dispatch = useDispatch();
  const [display, setdisplay] = useState(0);
  const [displaycls, setdisplaycls] = useState("undisplay");
  const [date, setDate] = useState(new Date());
  const [datenum, setdatenum] = useState([]);
  const [date_cnt, setdate_cnt] = useState();
  const [Day_status, setDay_status] = useState();
  const [prv_month, setprv_month] = useState(new Date());
  const [cur_year_month, setcur_year_month] = useState();
  const [flag, setflag] = useState([]);
  const [rsv_status, setrsv_status] = useState([1, 1, 1, 1, 1, 1, 1]);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const stData = useSelector(state => state);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "500px",
    bgcolor: "background.paper",
  };

  const selected_month = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  useEffect(() => {
    console.log("This code will execute when the component is mounted");

    let cur_date = date;
    let num = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };
    let temp = cur_date.toDateString().split(" ");
    let cur_month = num[temp[1]];
    temp = prv_month.toDateString().split(" ");
    let prev = num[temp[1]];

    setDay_status(Day_calc(cur_date.toDateString()));
    setdate_cnt(Date_cntCalc(cur_date.toDateString()));
    setcur_year_month(
      temp[3] + "/" + (num[temp[1]] < 10 ? "0" + num[temp[1]] : num[temp[1]])
    );

    /////////////////////////////////////////////////////

    let arr = [];
    for (let i = 0; i < 42; i++) {
      if (i < Day_status) arr[i] = 0;
      else if (i >= Day_status && i < date_cnt + Day_status) arr[i] = 1;
      else arr[i] = 0;
    }
    console.log(arr);
    setflag(arr);

    ////////////////////////////////////////////////////

    arr = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    for (let i = 0; i < 35; i++) {
      if (i < date_cnt) {
        arr[i + Day_status] = i + 1 + "";
        if (i + 1 < 10) arr[i + Day_status] = "0" + arr[i + Day_status];
      }
    }
    setdatenum(arr);
    if (prev === cur_month) {
      if (display) {
        setdisplaycls("undisplay");
        setdisplay(display ^ 1);
      }
    } else {
      setprv_month(date);
    }
    console.log(date_cnt);
  }, [date_cnt, Day_status, date]);

  function displayfunc() {
    if (display) {
      setdisplaycls("undisplay");
    } else {
      setdisplaycls("display");
    }
    setdisplay(display ^ 1);
  }

  function prev_func() {
    let num = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };
    let month_string = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let cur_date = date;
    let temp = cur_date.toDateString().split(" ");
    let new_month = month_string[num[temp[1]] === 1 ? 11 : num[temp[1]] - 2];

    let timeStamp = Date.parse(
      temp[2] +
        " " +
        new_month +
        " " +
        (num[temp[1]] - 2 < 0 ? Number(temp[3]) - 1 : temp[3])
    );
    let new_date = new Date(timeStamp);
    setDate(new_date);
  }

  function next_func() {
    let num = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };
    let month_string = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let cur_date = date;
    let temp = cur_date.toDateString().split(" ");
    let new_month = month_string[num[temp[1]] === 12 ? 0 : num[temp[1]]];

    let timeStamp = Date.parse(
      temp[2] +
        " " +
        new_month +
        " " +
        (num[temp[1]] === 12 ? Number(temp[3]) + 1 : temp[3])
    );
    let new_date = new Date(timeStamp);
    setDate(new_date);
  }

  const space = <div className="space_box"></div>;

  function selected_func(e) {
    let arr = [];
    for (let i = 0; i < 7; i++) arr[i] = 0;

    if (e.target.value === "1") {
      for (let i = 0; i < 7; i++) arr[i] = 1;
    } else {
      console.log(arr);
      arr[e.target.value - 2] = 1;
    }

    setrsv_status(arr);
  }

  return (
    <div className="AdminrsvCalendar_content_form">
      <div className="AdminrsvCalendar_content_form_nav">
        <div className="AdminrsvCalendar_content_form_nav_calendar">
          <div
            className="AdminrsvCalendar_content_form_nav_calendar_leftArrow"
            onClick={prev_func}
          >
            <Box
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <KeyboardArrowLeftIcon sx={{ color: "#727272", fontSize: 60 }} />
            </Box>
          </div>
          <Tooltip
            title={<h1 style={{ fontSize: "15px" }}>日付を変える</h1>}
            placement="bottom"
            className="tooltip"
          >
            <button
              className="AdminrsvCalendar_content_form_nav_calendar_body"
              onClick={displayfunc}
            >
              <span>
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <CalendarMonthIcon sx={{ color: "#0045FF", fontSize: 25 }} />
                </Box>
              </span>
              <span className="re_span">{cur_year_month}</span>
            </button>
          </Tooltip>
          <div
            className="AdminrsvCalendar_content_form_nav_calendar_rightArrow"
            onClick={next_func}
          >
            <Box
              sx={{
                "& > :not(style)": {
                  m: 0,
                },
              }}
            >
              <KeyboardArrowRightIcon sx={{ color: "#727272", fontSize: 60 }} />
            </Box>
          </div>
        </div>
        <div
          className="AdminrsvCalendar_content_form_nav_filter"
          onChange={(e) => selected_func(e)}
        >
          <Box
            className="AdminrsvCalendar_content_form_nav_filter_box"
            sx={{
              "& > :not(style)": {
                m: 0,
              },
            }}
          >
            <RefreshIcon sx={{ color: "white", fontSize: 20 }} />
          </Box>
          <p>台帳更新</p>
        </div>
      </div>

      <div className={displaycls}>
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className="AdminrsvCalendar_content_form_calendar">
        <div className="AdminrsvCalendar_content_form_calendar_colors">
          <div className="rsv_color1"></div>
          <p>空きなし</p>
          <div className="rsv_color2"></div>
          <p>予約済み</p>
          <div className="rsv_color3"></div>
          <p>朝と夕方（男性）</p>
          <div className="rsv_color4"></div>
          <p>朝と夕方（女性）</p>
          <div className="rsv_color5"></div>
          <p>朝のみ（男性）</p>
          <div className="rsv_color6"></div>
          <p>朝のみ（女性）</p>
          <div className="rsv_color7"></div>
          <p>夕方のみ（男性）</p>
          <div className="rsv_color8"></div>
          <p>夕方のみ（女性）</p>
        </div>

        <table className="AdminrsvCalendar_content_form_calendar_table">
          <thead>
            <tr>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th>土</th>
              <th>日</th>
            </tr>
          </thead>

          <tbody>
          {Day_status < 7 ? (
            <tr>
              <td>
                <div className="calendar_date">{datenum[0]}</div>
                {flag[0] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[0],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[0],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[0],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[0],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[0],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1] +
                                  "/" +
                                  datenum[0]
                              ],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[1]}</div>
                {flag[1] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[1],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[1],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[1],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[1],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[1],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[1],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[2]}</div>
                {flag[2] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[2],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[2],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[2],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[2],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[2],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[2],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[3]}</div>
                {flag[3] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[3],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[3],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[3],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[3],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[3],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[3],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[4]}</div>
                {flag[4] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[4],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[4],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[4],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[4],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[4],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[4],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[5]}</div>
                {flag[5] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() =>
                        dispatch(
                          {
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[5],
                          },
                          setOpen(true)
                        )
                      }
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[5],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[5],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[5],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[5],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[5],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[6]}</div>
                {flag[6] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[6],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[6],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[6],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[6],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[6],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[6],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
            </tr>) : ""}
            <tr>
              <td>
                <div className="calendar_date">{datenum[7]}</div>
                {flag[7] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[7],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[7],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[7],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[7],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[7],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[7],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[8]}</div>
                {flag[8] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[8],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[8],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[8],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[8],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[8],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[8],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[9]}</div>
                {flag[9] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[9],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[9],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[9],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[9],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[9],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[9],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[10]}</div>
                {flag[10] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[10],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[10],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[10],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[10],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[10],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[10],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[11]}</div>
                {flag[11] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[11],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[11],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[11],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[11],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[11],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[11],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[12]}</div>
                {flag[12] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[12],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[12],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[12],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[12],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[12],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[12],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[13]}</div>
                {flag[13] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[13],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[13],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[13],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[13],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[13],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[13],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
            </tr>

            <tr>
              <td>
                <div className="calendar_date">{datenum[14]}</div>
                {flag[14] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[14],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[14],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[14],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[14],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[14],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[14],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[15]}</div>
                {flag[15] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[15],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[15],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[15],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[15],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[15],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[
                              date.toDateString().split(" ")[1] +
                                "/" +
                                datenum[15]
                            ],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[16]}</div>
                {flag[16] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[16],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[16],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[16],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[16],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[16],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[16],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[17]}</div>
                {flag[17] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[17],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[17],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[17],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[17],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[17],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[17],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[18]}</div>
                {flag[18] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[18],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[18],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[18],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[18],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[18],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[18],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[19]}</div>
                {flag[19] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[19],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[19],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[19],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[19],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[19],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[
                              date.toDateString().split(" ")[1] +
                                "/" +
                                datenum[19]
                            ],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[20]}</div>
                {flag[20] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
            </tr>

            <tr>
              <td>
                <div className="calendar_date">{datenum[21]}</div>
                {flag[21] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[21],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[21],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[21],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[21],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[21],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[21],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[22]}</div>
                {flag[22] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[0],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[22],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[22],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[22],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[22],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[22],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[23]}</div>
                {flag[23] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[23],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[23],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[23],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[23],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[23],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[23],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[24]}</div>
                {flag[24] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[24],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[24],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[24],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[24],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[24],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[24],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[25]}</div>
                {flag[25] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[25],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[25],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[25],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[25],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[25],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[25],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[26]}</div>
                {flag[26] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[26],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[26],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[26],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[26],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[26],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[26],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
              <td>
                <div className="calendar_date">{datenum[27]}</div>
                {flag[27] ? (
                  <div className="rsv_box">
                    <div
                      className={rsv_status[0] ? "rsv_1 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet1",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[27],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（男性）</p>
                      <p>◉</p>
                    </div>

                    <div
                      className={rsv_status[1] ? "rsv_2 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet2",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[27],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝と夕方（女性）</p>
                      <p>○</p>
                    </div>

                    <div
                      className={rsv_status[2] ? "rsv_3 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet3",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[27],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（男性）</p>
                      <p>△</p>
                    </div>

                    <div
                      className={rsv_status[3] ? "rsv_4 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet4",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[27],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>朝のみ（女性）</p>
                      <p>×</p>
                    </div>

                    <div
                      className={rsv_status[4] ? "rsv_5 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet5",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[27],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（男性）</p>
                      <p>@</p>
                    </div>

                    <div
                      className={rsv_status[5] ? "rsv_6 display" : "undisplay"}
                      onClick={() => (
                        dispatch({
                          type: "rsvSet6",
                          date:
                            date.toDateString().split(" ")[3] +
                            "/" +
                            selected_month[date.toDateString().split(" ")[1]] +
                            "/" +
                            datenum[27],
                        }),
                        setOpen(true)
                      )}
                    >
                      <p>夕方のみ（女性）</p>
                      <p>&</p>
                    </div>
                  </div>
                ) : (
                  space
                )}
              </td>
            </tr>

            {date_cnt + Day_status > 28 ? (
              <tr>
                <td>
                  <div className="calendar_date">{datenum[28]}</div>
                  {flag[28] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[28],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[28],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[28],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[28],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[28],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[28],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[29]}</div>
                  {flag[29] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[29],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[29],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[29],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[29],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[29],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[29],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[30]}</div>
                  {flag[30] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[30],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[30],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[30],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[30],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[30],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[30],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[31]}</div>
                  {flag[31] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[31],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[31],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[31],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[31],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[31],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[31],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[32]}</div>
                  {flag[32] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[32],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[32],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[32],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[32],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[32],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[32],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[33]}</div>
                  {flag[33] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[33],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[33],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[33],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[33],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[33],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[33],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[34]}</div>
                  {flag[34] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[34],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[34],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[34],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[34],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[34],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[34],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
              </tr>
            ) : (
              ""
            )}

            {date_cnt + Day_status > 35 ? (
              <tr>
                <td>
                  <div className="calendar_date">{datenum[35]}</div>
                  {flag[35] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[35],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[35],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[35],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[35],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[35],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1] +
                                  "/" +
                                  datenum[35]
                              ],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[36]}</div>
                  {flag[36] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[36],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[36],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[36],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[36],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[36],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[36],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[37]}</div>
                  {flag[37] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[37],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[37],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[37],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[37],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[37],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[37],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[38]}</div>
                  {flag[38] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[38],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[38],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[38],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[38],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[38],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[38],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[39]}</div>
                  {flag[39] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[39],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[39],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[39],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[39],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[39],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[39],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[40]}</div>
                  {flag[40] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[40],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[40],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[40],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[40],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[40],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[40],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
                <td>
                  <div className="calendar_date">{datenum[41]}</div>
                  {flag[41] ? (
                    <div className="rsv_box">
                      <div
                        className={
                          rsv_status[0] ? "rsv_1 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet1",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[41],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（男性）</p>
                        <p>◉</p>
                      </div>

                      <div
                        className={
                          rsv_status[1] ? "rsv_2 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet2",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[41],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝と夕方（女性）</p>
                        <p>○</p>
                      </div>

                      <div
                        className={
                          rsv_status[2] ? "rsv_3 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet3",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[41],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（男性）</p>
                        <p>△</p>
                      </div>

                      <div
                        className={
                          rsv_status[3] ? "rsv_4 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet4",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[41],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>朝のみ（女性）</p>
                        <p>×</p>
                      </div>

                      <div
                        className={
                          rsv_status[4] ? "rsv_5 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet5",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[41],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（男性）</p>
                        <p>@</p>
                      </div>

                      <div
                        className={
                          rsv_status[5] ? "rsv_6 display" : "undisplay"
                        }
                        onClick={() => (
                          dispatch({
                            type: "rsvSet6",
                            date:
                              date.toDateString().split(" ")[3] +
                              "/" +
                              selected_month[
                                date.toDateString().split(" ")[1]
                              ] +
                              "/" +
                              datenum[41],
                          }),
                          setOpen(true)
                        )}
                      >
                        <p>夕方のみ（女性）</p>
                        <p>&</p>
                      </div>
                    </div>
                  ) : (
                    space
                  )}
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <div className="Modal-header"><span onClick={() => {setOpen(false)}}>×</span></div>
            <div className="Modal-body">
                <div className="Modal-firstdiv">
                    <div>
                        <p className="boldfont">予約枠</p>
                        <p className="boldfont">日付</p>
                        <p className="boldfont">時間</p>
                        <p className="boldfont">状況</p>
                    </div>

                    <div>
                        <Link><p>{stData.adminauth.reservationContent}</p></Link>
                        <p>{stData.adminauth.reservationDate}</p>
                        <p>{stData.adminauth.reservationTime}</p>
                        <p>{stData.adminauth.reservationstatus}</p>
                    </div>
                </div>

                <div className="Modal-btndiv">
                    <button>予約登録</button>
                </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default AdminrsvCalendar;
