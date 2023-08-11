import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import "./index.css";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Tooltip from "@mui/material/Tooltip";
import Calendar from "react-calendar";

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

function Reservationstatus() {
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

    let D = new Date();
    let D_temp = D.toDateString().split(" ");
    if (Number(D_temp[3]) > Number(temp[3]) || num[D_temp[1]] > cur_month)
      setflag([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
    if (Number(D_temp[3]) < Number(temp[3]) || num[D_temp[1]] < cur_month) {
      let arr = [];
      for (let i = 0; i < 42; i++) {
        if (i < Day_status) arr[i] = 0;
        else if (i >= Day_status && i < date_cnt + Day_status) arr[i] = 1;
        else arr[i] = 0;
      }
      console.log(arr);
      setflag(arr);
    }
    if (Number(D_temp[3]) === Number(temp[3]) && num[D_temp[1]] === cur_month) {
      let arr = [];
      for (let i = 0; i < 42; i++) {
        if (i < Day_calc(D.toDateString()) + Number(D_temp[2])) arr[i] = 0;
        else if (i >= Day_calc(D.toDateString()) + Number(D_temp[2]) && i < Date_cntCalc(D.toDateString()) + Day_calc(D.toDateString()))
          arr[i] = 1;
        else arr[i] = 0;
      }
      setflag(arr);
    }

    ////////////////////////////////////////////////////

    let arr = [
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

  const rsv_list = (
    <div className="rsv_box">
      <div className={rsv_status[0]?"rsv_1 display":"undisplay"}>
        <p>朝と夕方（男性）</p>
        <p>◉</p>
      </div>
      <div className={rsv_status[1]?"rsv_2 display":"undisplay"}>
        <p>朝と夕方（女性）</p>
        <p>○</p>
      </div>
      <div className={rsv_status[2]?"rsv_3 display":"undisplay"}>
        <p>朝のみ（男性）</p>
        <p>△</p>
      </div>
      <div className={rsv_status[3]?"rsv_4 display":"undisplay"}>
        <p>朝のみ（女性）</p>
        <p>×</p>
      </div>
      <div className={rsv_status[4]?"rsv_5 display":"undisplay"}>
        <p>夕方のみ（男性）</p>
        <p>@</p>
      </div>
      <div className={rsv_status[5]?"rsv_6 display":"undisplay"}>
        <p>夕方のみ（女性）</p>
        <p>&</p>
      </div>
    </div>
  );

  const space = <div className="space_box"></div>;

  function selected_func(e) {
    let arr = [];
    for(let i = 0 ; i < 7; i++) arr[i] = 0;

    if(e.target.value === "1") {
        for(let i = 0 ; i < 7; i++) arr[i] = 1;
    }
    else {
        console.log(arr);
        arr[e.target.value - 2] = 1;
    }
    
    setrsv_status(arr);
  }

  return (
    <div className="Reservationstatus">
      <div className="Reservationstatus_content">
        <div className="Resevationstatus_content_form">
          <div className="Resevationstatus_content_form_nav">
            <div className="Resevationstatus_content_form_nav_calendar">
              <div
                className="Resevationstatus_content_form_nav_calendar_leftArrow"
                onClick={prev_func}
              >
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowLeftIcon
                    sx={{ color: "#727272", fontSize: 60 }}
                  />
                </Box>
              </div>
              <Tooltip
                title={<h1 style={{ fontSize: "15px" }}>日付を変える</h1>}
                placement="bottom"
                className="tooltip"
              >
                <button
                  className="Resevationstatus_content_form_nav_calendar_body"
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
                      <CalendarMonthIcon
                        sx={{ color: "#0045FF", fontSize: 25 }}
                      />
                    </Box>
                  </span>
                  <span className="re_span">{cur_year_month}</span>
                </button>
              </Tooltip>
              <div
                className="Resevationstatus_content_form_nav_calendar_rightArrow"
                onClick={next_func}
              >
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 0,
                    },
                  }}
                >
                  <KeyboardArrowRightIcon
                    sx={{ color: "#727272", fontSize: 60 }}
                  />
                </Box>
              </div>
            </div>
            <select className="Resevationstatus_content_form_nav_filter" onChange={(e) => selected_func(e)}>
              <option value={1}>全ての枠</option>
              <option value={2}>朝と夕方（男性）</option>
              <option value={3}>朝と夕方（女性）</option>
              <option value={4}>朝のみ（男性）</option>
              <option value={5}>朝のみ（女性）</option>
              <option value={6}>夕方のみ（男性）</option>
              <option value={7}>夕方のみ（女性）</option>
            </select>
          </div>

          <div className={displaycls}>
            <Calendar onChange={setDate} value={date} />
          </div>

          <div className="Resevationstatus_content_form_calendar">
            <div className="Resevationstatus_content_form_calendar_colors">
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

            <table className="Resevationstatus_content_form_calendar_table">
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
                <tr>
                  <td>
                    <div className="calendar_date">{datenum[0]}</div>
                    {flag[0]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[1]}</div>
                    {flag[1]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[2]}</div>
                    {flag[2]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[3]}</div>
                    {flag[3]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[4]}</div>
                    {flag[4]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[5]}</div>
                    {flag[5]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[6]}</div>
                    {flag[6]?rsv_list:space}
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="calendar_date">{datenum[7]}</div>
                    {flag[7]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[8]}</div>
                    {flag[8]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[9]}</div>
                    {flag[9]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[10]}</div>
                    {flag[10]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[11]}</div>
                    {flag[11]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[12]}</div>
                    {flag[12]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[13]}</div>
                    {flag[13]?rsv_list:space}
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="calendar_date">{datenum[14]}</div>
                    {flag[14]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[15]}</div>
                    {flag[15]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[16]}</div>
                    {flag[16]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[17]}</div>
                    {flag[17]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[18]}</div>
                    {flag[18]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[19]}</div>
                    {flag[19]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[20]}</div>
                    {flag[20]?rsv_list:space}
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="calendar_date">{datenum[21]}</div>
                    {flag[21]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[22]}</div>
                    {flag[22]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[23]}</div>
                    {flag[23]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[24]}</div>
                    {flag[24]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[25]}</div>
                    {flag[25]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[26]}</div>
                    {flag[26]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[27]}</div>
                    {flag[27]?rsv_list:space}
                  </td>
                </tr>

                {date_cnt + Day_status > 28 ? (
                <tr>
                  <td>
                    <div className="calendar_date">{datenum[28]}</div>
                    {flag[28]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[29]}</div>
                    {flag[29]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[30]}</div>
                    {flag[30]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[31]}</div>
                    {flag[31]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[32]}</div>
                    {flag[32]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[33]}</div>
                    {flag[33]?rsv_list:space}
                  </td>
                  <td>
                    <div className="calendar_date">{datenum[34]}</div>
                    {flag[34]?rsv_list:space}
                  </td>
                </tr>
                ) : (
                    ""
                )}

                {date_cnt + Day_status > 35 ? (
                  <tr>
                    <td>
                      <div className="calendar_date">{datenum[35]}</div>
                      {flag[35]?rsv_list:space}
                    </td>
                    <td>
                      <div className="calendar_date">{datenum[36]}</div>
                      {flag[36]?rsv_list:space}
                    </td>
                    <td>
                      <div className="calendar_date">{datenum[37]}</div>
                      {flag[37]?rsv_list:space}
                    </td>
                    <td>
                      <div className="calendar_date">{datenum[38]}</div>
                      {flag[38]?rsv_list:space}
                    </td>
                    <td>
                      <div className="calendar_date">{datenum[39]}</div>
                      {flag[39]?rsv_list:space}
                    </td>
                    <td>
                      <div className="calendar_date">{datenum[40]}</div>
                      {flag[40]?rsv_list:space}
                    </td>
                    <td>
                      <div className="calendar_date">{datenum[41]}</div>
                      {flag[41]?rsv_list:space}
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservationstatus;
