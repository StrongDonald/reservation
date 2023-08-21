import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/dist/css/rcp.css";
import PaletteIcon from "@mui/icons-material/Palette";
import Box from "@mui/material/Box";

const Admincolorsetting = () => {
  const dispatch = useDispatch();
  const [color1, setColor1] = useColor("hex", "#ececec");
  const [color2, setColor2] = useColor("hex", "#ececec");
  const [color3, setColor3] = useColor("hex", "#a6d9ec");
  const [color4, setColor4] = useColor("hex", "#ffff56");
  const [color5, setColor5] = useColor("hex", "#ffaa56");
  const [color6, setColor6] = useColor("hex", "#f9dec5");
  const [color7, setColor7] = useColor("hex", "#a6d9ec");
  const [color8, setColor8] = useColor("hex", "#cdcdf7");
  const [color9, setColor9] = useColor("hex", "#ffaaaa");
  const [color10, setColor10] = useColor("hex", "#d4ffaa");
  const [color11, setColor11] = useColor("hex", "#ffd4aa");

  return (
    <>
    <div className="Admincolorsetting">
      <div className="div">カラー</div>
      <div className="tableDiv">
        <table>
          <thead>
            <tr>
              <td>
                <p>タイプ</p>
              </td>
              <td>
                <p>カラー名</p>
              </td>
              <td>
                <p>カラー</p>
              </td>
              <td>
                <p>表示</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Admincolorsetting_td1">
                <p>受付期間外</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="受付期間外"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color2">#ececec</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#ececec", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color2}
                  onChange={setColor2}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>空きあり</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="空きあり"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color3">#a6d9ec</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#a6d9ec", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color3}
                  onChange={setColor3}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>予約済み</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="予約済み"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color4">#ffff56</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#ffff56", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color4}
                  onChange={setColor4}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>追加</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="朝と夕方（女性2名）"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color6">#f9dec5</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#f9dec5", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color6}
                  onChange={setColor6}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>追加</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="朝と夕方（男性2名）"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color7">#a6d9ec</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#a6d9ec", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color7}
                  onChange={setColor7}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>追加</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="朝と夕方（男性1名）"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color8">#cdcdf7</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#cdcdf7", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color8}
                  onChange={setColor8}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>追加</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="朝と夕方（女性1名）"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color9">#ffaaaa</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#ffaaaa", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color9}
                  onChange={setColor9}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>追加</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="朝のみ（男性or女性1名）"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color10">#d4ffaa</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#d4ffaa", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color10}
                  onChange={setColor10}
                  hideHSV
                  dark
                />
              </div>
            </tr>

            <tr>
              <td className="Admincolorsetting_td1">
                <p>追加</p>
              </td>

              <td className="Admincolorsetting_td2">
                <div>
                  <input value="夕方のみ（男性or女性1名）"/>
                </div>
              </td>

              <td className="Admincolorsetting_td3">
                <div className="Admincolorsetting_td3_div">
                  <div className="Admincolorsetting_td3_div_color color11">#ffd4aa</div>
                  <div className="Admincolorsetting_td3_div_colorbox"><Box
                    sx={{
                      "& > :not(style)": {
                        m: 0,
                      },
                    }}
                  >
                    <PaletteIcon sx={{ color: "#ffd4aa", fontSize: 20 }} />
                  </Box></div>
                </div>
              </td>

              <td className="Admincolorsetting_td4">
                <input type="checkbox" />
              </td>

              <div className="colorpicker">
                <ColorPicker
                  width={46}
                  height={48}
                  color={color11}
                  onChange={setColor11}
                  hideHSV
                  dark
                />
              </div>
            </tr>
          </tbody>
        </table>
        <div className="Admincolorsetting_addbtn"><button> + カラー追加</button></div>
      </div>
    </div>
    <div className="Admincolorsetting_btn">
    <Link
        to="/admin/login"
        onClick={() =>
          dispatch({
            type: "adminlogin",
          })
        }
      ><button>編集</button></Link>
  </div></>
  );
};

export default Admincolorsetting;
