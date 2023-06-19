import { useCookies } from "react-cookie";
import {
  XlText,
  Container,
  Header,
  LText,
  ImageContainer,
  BtEdit,
  YourNameBlock,
  TextBlock,
  MText,
} from "./UserProfile.style";
import logo from "../../img/logo.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader/Loader";
export const UserProfile: React.FC = () => {
  const [cookies, setCookie] = useCookies<string>(["selfie_link"]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, getName] = useState("");
  const [selfie, getSelfie] = useState("");
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ph-client.onrender.com/me");
        console.log(response.data);
        getName(response.data.user.fullName);
        getSelfie(response.data.selfie.selfieThumbnail);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header>
            <Link to="/main-page/7e264b8e-5cc9-4ebe-b864-a4e848f6ed57">
              <img
                src="/img/arrow-left.png"
                height="15px"
                style={{ marginLeft: "15px" }}
              />
            </Link>
            <img
              src={logo}
              alt="logo"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Header>
          <Container>
            <XlText>{name ? `Welcome, ${name}.` : "Welcome"}</XlText>
            <LText>Your selfie</LText>
            <ImageContainer>
              <img
                src={selfie}
                alt="selfie"
                width="100px"
                height="100px"
                style={{ borderRadius: "50%" }}
              />
              <BtEdit>
                <img src="/img/Vector.png" />
              </BtEdit>
            </ImageContainer>
            <YourNameBlock>
              <TextBlock>
                <LText>Your name</LText>
                <MText>Tell us your name to personalize communications.</MText>
              </TextBlock>
              <img
                src="/img/arrow-left.png"
                height="16px"
                style={{ transform: "rotate(180deg)" }}
              />
            </YourNameBlock>
          </Container>
        </div>
      )}
    </div>
  );
};
