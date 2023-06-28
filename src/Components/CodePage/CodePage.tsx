import { useContext, useRef, useState } from "react";
import "./CodePage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  BigText,
  Header,
  InputBlock,
  ResendCodeBt,
  Wrapper,
} from "./CodePage.styles";
import { token } from "../../App";
export const CodePage: React.FC = () => {
  const [fields, setFields] = useState<string[]>(["", "", "", "", "", ""]);
  const [disable, setDisabled] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [cookies, setCookie] = useCookies<string>(["access_token"]);
  const phoneNumber = sessionStorage.getItem("phoneNumber");
  const countryCode = sessionStorage.getItem("countryCode");
  const { getIsAuthorized } = useContext(token);
  const navigate = useNavigate();

  const getOtpCode = async (e: any) => {
    try {
      const data = {
        phoneNumber: phoneNumber?.replace(/\D/g, ""),
        countryCode: countryCode?.replace(/\D/g, ""),
      };
      const response = await axios.post(
        `https://ph-client.onrender.com/sign-in/send-otp`,
        data
      );
    } catch (error) {
      console.error(error);
    }
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
          console.log(response.data);
          setCookie("access_token", response.data.accessToken);
          setCookie("selfie_link", response.data.selfie.selfieThumbnail);
          setCookie("user_name", response.data.user.fullName);
          getIsAuthorized(true);
          sessionStorage.setItem("access_token_client_part", "true");
          response.data.selfie
            ? navigate(`/main-page`)
            : navigate(`/selfie-page`);
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
      <Header>
        <Link to="/">
          <img
            src="/img/arrow-left.png"
            style={{ marginLeft: "15px" }}
            height="16px"
          />
        </Link>
        <img src="/img/logo.jpg" style={{ margin: "0 auto" }} />
      </Header>
      <Wrapper>
        <BigText>What`s the code?</BigText>
        <div style={{ padding: "15px" }}>
          <p className="text-m">
            Enter the code sent to{" "}
            <span style={{ fontFamily: "FuturaNormal" }}>
              {countryCode + " " + phoneNumber}
            </span>
          </p>
          <InputBlock>
            {fields.map((field, index) => (
              <input
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                type="number"
                max={9}
                value={field}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 1) {
                    handleChange(
                      { ...e, target: { ...e.target, value } },
                      index
                    );
                  }
                }}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="input-code"
              />
            ))}
          </InputBlock>
          <ResendCodeBt
            onClick={(e) => {
              e.currentTarget.classList.add("disabled");
              setDisabled(true);
              getOtpCode(e);
            }}
            disabled={disable}
          >
            Resent code
          </ResendCodeBt>
          <div
            className={fields.join("").length === 6 ? "bt-add" : "bt-add-off"}
            onClick={sentOtpCode}
          >
            Next
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
