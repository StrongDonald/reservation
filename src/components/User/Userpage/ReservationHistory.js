import React, { useRef,useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./index.css";

function ReservationHistory() {
    const dispatch = useDispatch();
    const [flg, setflg] = useState(0);
    const dateInputRef1 = useRef(null);
    const [date1, setDate1] = useState('');

    const dateInputRef2 = useRef(null);
    const [date2, setDate2] = useState('');

    const [cssfirst, setcssfirst] = useState("reservationhistory_content_firstpart_search");
    const [csssecond, setcsssecond] = useState("reservationhistory_content_firstpart_line");
    const [cssthird, setcssthird] = useState("reservationhistory_content_firstpart_checkbox_line");
    const [cssforth, setcssforth] = useState("reservationhistory_content_firstpart_btnbox");

    const handleChange1 = (e) => {
        setDate1(e.target.value);
      };

    const handleChange2 = (e) => {
        setDate2(e.target.value);
    };

    const handle = () => {
        if(!flg) {
            setcssfirst("reservationhistory_content_firstpart_search undisplay");
            setcsssecond("reservationhistory_content_firstpart_line undisplay");
            setcssthird("reservationhistory_content_firstpart_checkbox_line undisplay");
            setcssforth("reservationhistory_content_firstpart_btnbox undisplay");
          }
          else {
            setcssfirst("reservationhistory_content_firstpart_search");
            setcsssecond("reservationhistory_content_firstpart_line");
            setcssthird("reservationhistory_content_firstpart_checkbox_line");
            setcssforth("reservationhistory_content_firstpart_btnbox");
          }
          setflg(flg^1);
    }

    return (
        <div className="reservationhistory">
            <div className="reservationhistory_content">
                <div className="reservationhistory_content_firstpart">
                    <div className="reservationhistory_content_firstpart_hearder">
                        <div className="reservationhistory_content_firstpart_hearder_text">
                            <div></div>
                            <p className="reservationhistory_content_firstpart_hearder_text_content">予約履歴の検索</p>
                        </div>

                        <div className="reservationhistory_content_firstpart_hearder_arrow" 
                        onClick={handle}>
                            <Box
                                sx={{
                                    "& > :not(style)": {
                                    m: 0,
                                    },
                                }}
                                >
                                {flg?<KeyboardArrowDownIcon sx={{ color: "#0045FF", fontSize: 50 }} />:<KeyboardArrowUpIcon sx={{ color: "#0045FF", fontSize: 50 }} />}
                            </Box>
                        </div>
                    </div>

                    <div className={cssfirst}>
                        <p>利用日時</p>
                        <input type="date"
                            onChange={handleChange1}
                            ref={dateInputRef1}/>
                        <span>~</span>
                        <input type="date"
                            onChange={handleChange2}
                            ref={dateInputRef2} />
                    </div>

                    <div className={csssecond}></div>

                    <div className={cssthird}>
                        <p className="reservationhistory_content_firstpart_checkbox_text">予約ステータス</p>
                        <div className="reservationhistory_content_firstpart_checkbox_content">
                            <input type="checkbox"/>
                            <span>確定</span>
                            <input type="checkbox"/>
                            <span>仮申込</span>
                            <input type="checkbox"/>
                            <span>落選</span>
                        </div>
                    </div>

                    <div className={cssforth}>
                        <button className="reservationhistory_content_firstpart_btnbox_back">リセット</button>
                        <button className="reservationhistory_content_firstpart_btnbox_next">予約履歴検索</button>
                    </div>
                </div>

                

                <div className="reservationhistory_content_secondpart">
                    <table>
                        <thead>
                            <tr>
                                <td className='td1'>予約ステータス</td>
                                <td className='td2'>予約枠名</td>
                                <td className='td3'>利用日時</td>
                                <td className='td4'>詳細</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='td1'>
                                仮申込
                                </td>
                                <td className='td2'>
                                朝と夕方（女性2名）
                                </td>
                                <td className='td2'>2023/08/17(木) 05:00 ~ 19:00</td>
                                <td className='td4'>
                                    <Link to = "/user/rsvdetail">
                                        <button onClick={() =>
                                            dispatch({
                                                type: "rsvdetail",          
                                            })
                                        }>詳細</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ReservationHistory;