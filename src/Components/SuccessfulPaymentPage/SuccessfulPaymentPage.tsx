import { useCookies } from "react-cookie";
import {
  BigText,
  Container,
  Header,
  UsualText,
} from "./SuccessfulPaymentPage.styles";
import { Link } from "react-router-dom";

export const SuccessfulPaymentPage: React.FC = () => {
  const [cookies, setCookie] = useCookies([
    "unlocked_album_name",
    "selfie_link",
    "unlocked_album_cover",
  ]);
  return (
    <div>
      <Header>
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
        <Link to="/user-profile">
          <img
            src={cookies.selfie_link}
            height="30px"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
        </Link>
      </Header>
      <Container>
        <BigText>Thank you!</BigText>
        <UsualText>
          The album
          <span style={{ fontWeight: "700" }}>
            {cookies.unlocked_album_name}
          </span>{" "}
          is now unlocked.
        </UsualText>

        <UsualText>
          You can now download, share, post, and print your hi-res,
          watermark-free, glorious memories.
        </UsualText>
        <img src={cookies.unlocked_album_cover} alt="image" />
      </Container>
    </div>
  );
};
