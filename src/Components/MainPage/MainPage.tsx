import { useParams } from "react-router-dom";
import logo from "../../img/logo.jpg";
export const MainPage: React.FC = () => {
  const { clientId } = useParams();
  return (
    <div>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <p className="text-xl" style={{ marginTop: "20px" }}>
        Hello,user!
      </p>
    </div>
  );
};
