import { Link, useNavigate } from "react-router-dom";
import {
  ChangeBt,
  Container,
  Header,
  Input,
  Text,
  Wrapper,
} from "./ChangeNamePage.styles";
import { useCookies } from "react-cookie";
import { useState } from "react";
import axios from "axios";

export const ChangeNamePage: React.FC = () => {
  const [cookies, setCookie] = useCookies<string>(["selfie_link"]);
  const [name, getName] = useState(cookies.user_name);
  const navigate = useNavigate();
  const sendName = async () => {
    try {
      const data = { fullName: name };
      const response = await axios.put(
        "https://ph-client.onrender.com/name",
        data
      );
      console.log(response.data);
      navigate("/user-profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header>
        <Link to="/user-profile">
          <img
            src="/img/arrow-left.png"
            height="15px"
            style={{ marginLeft: "15px" }}
            alt="arrow"
          />
        </Link>
        <img
          src="/img/logo.jpg"
          alt="logo"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Header>
      <Wrapper>
        <Container>
          <Text>Your name</Text>
          <Input
            type="text"
            placeholder={name}
            onChange={(e) => getName(e.currentTarget.value)}
          />
          <ChangeBt onClick={sendName}>Save</ChangeBt>
        </Container>
      </Wrapper>
    </div>
  );
};
