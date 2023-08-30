import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const IDcreate = () => {
  return (
    <div className="IDcreate">
      <div className="IDcreate_div">
        <button>+組織ID發行</button>
      </div>

      <table>
        <thead>
          <tr>
            <td className="IDcreate_td1">
              <p>削除</p>
            </td>
            <td className="IDcreate_td2">
              <p>組織ID</p>
            </td>

            <td className="IDcreate_td3">
              <p>機構</p>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>
              <p>business0507i</p>
            </td>
            <td>
              <p>機構1</p>
            </td>
          </tr>

          <tr>
            <td>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 0,
                  },
                }}
              >
                <span style={{ marginLeft: "10px" }}>
                  <Link>
                    <DeleteIcon sx={{ color: "#727272", fontSize: 20 }} />
                  </Link>
                </span>
              </Box>
            </td>
            <td>
              <p>daiki36x</p>
            </td>
            <td>
              <p>機構2</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IDcreate;
