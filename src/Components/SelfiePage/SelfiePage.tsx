import logo from "../../img/logo.jpg";
import arrow from "../../img/arrow-left.png";
import "./SelfiePage.css";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "./avatar.png";
export const SelfiePage: React.FC = () => {
  const navigate = useNavigate();
  const { clientId } = useParams();
  return (
    <div>
      <header>
        <button
          className="bt-back"
          onClick={(e) => navigate("/verification-code")}
        >
          <img src={arrow} style={{ marginLeft: "15px" }} height="16px" />
        </button>
        <img src={logo} style={{ margin: "0 auto" }} />
      </header>
      <div className="selfie-page-content">
        <p className="text-xl">Add a selfie</p>
        <p className="text-selfie-page">
          A selfie allows your photos to be synced with your account.
        </p>
        <div className="avatar-block">
          <img src={avatar} alt="avatar" height="181px" />
          <button className="add-avatar"></button>
        </div>
      </div>
    </div>
  );
};
