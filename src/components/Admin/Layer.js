import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Layer = () => {
  const stData = useSelector(state => state);

  return (
    <div className="adminLayer">
        <h2 className="adminpageTitle">
          <span>{stData.adminauth.Title}</span>
        </h2>
    </div>
  );
}

export default Layer;