import { useEffect, useRef, useState } from "react";
import logo from "../../img/logo.jpg";
import arrow from "../../img/arrow-left.png";
import "./CodePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
export const CodePage: React.FC = () => {
  const [fields, setFields] = useState<string[]>(["", "", "", "", "", ""]);
  const [disable, setDisabled] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [cookies, setCookie] = useCookies<string>(["access_token"]);
  const phoneNumber = sessionStorage.getItem("phoneNumber");
  const countryCode = sessionStorage.getItem("countryCode");
  const navigate = useNavigate();
  const getOtpCode = (e: any) => {
    axios({
      url: `https://ph-client.onrender.com/sign-in/send-otp`,
      method: "post",
      data: {
        phoneNumber: phoneNumber?.replace(/\D/g, ""),
        countryCode: countryCode?.replace(/\D/g, ""),
      },
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const sentOtpCode = () => {
    if (fields.join("").length === 6) {
      const otpCode = fields.join("");

      axios({
        url: `https://ph-client.onrender.com/sign-in/verify-otp`,
        method: "post",
        data: {
          phoneNumber: phoneNumber?.replace(/\D/g, ""),
          countryCode: countryCode?.replace(/\D/g, ""),
          otp: otpCode,
        },
      })
        .then(function (response) {
          setCookie("access_token", response.data.accessToken);
          navigate(`/selfie-page/${response.data.user.clientId}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
    if (
      value &&
      index < inputRefs.current.length - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !fields[index] && index > 0) {
      const newFields = [...fields];
      newFields[index - 1] = "";
      setFields(newFields);
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      <header>
        <button className="bt-back" onClick={(e) => navigate("/")}>
          <img src={arrow} style={{ marginLeft: "15px" }} height="16px" />
        </button>
        <img src={logo} style={{ margin: "0 auto" }} />
      </header>
      <div className="code-main">
        <p className="text-xl">What`s the code?</p>
        <div className="codepage-form-block">
          <p className="text-m">
            Enter the code sent to{" "}
            <span style={{ fontFamily: "FuturaNormal" }}>
              {countryCode + " " + phoneNumber}
            </span>
          </p>

          <div className="input-block-row">
            {fields.map((field, index) => (
              <input
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                type="text"
                maxLength={1}
                value={field}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  handleChange({ ...e, target: { ...e.target, value } }, index);
                }}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="input-code"
              />
            ))}
          </div>
          <button
            className="bt-resent-code"
            onClick={(e) => {
              e.currentTarget.classList.add("disabled");
              setDisabled(true);
              getOtpCode(e);
            }}
            disabled={disable}
          >
            Resent code
          </button>
          <div
            className={fields.join("").length === 6 ? "bt-add" : "bt-add-off"}
            onClick={sentOtpCode}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};
