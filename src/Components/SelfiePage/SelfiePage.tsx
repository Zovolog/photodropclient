import logo from "../../img/logo.jpg";
import arrow from "../../img/arrow-left.png";
import { useNavigate } from "react-router-dom";
export const SelfiePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <button
          className="bt-back"
          onClick={(e) => navigate("/verification-page")}
        >
          <img src={arrow} style={{ marginLeft: "15px" }} height="16px" />
        </button>
        <img src={logo} style={{ margin: "0 auto" }} />
      </header>
    </div>
  );
};
