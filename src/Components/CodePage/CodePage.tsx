import logo from "../../img/logo.jpg";
import "./CodePage.css";
export const CodePage: React.FC = () => {
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div className="code-main">
        <p className="text-l">What`s the code</p>
        <div>
          <p className="text-s">
            Enter the code sent to <span className="text-s">54389435</span>
          </p>
          <input className="" type="text" />
        </div>
      </div>
    </div>
  );
};
