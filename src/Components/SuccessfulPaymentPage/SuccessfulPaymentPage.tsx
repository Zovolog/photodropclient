import { useCookies } from "react-cookie";
import {
  BigText,
  BtSeePhotos,
  Container,
  Header,
  MainImage,
  UsualText,
} from "./SuccessfulPaymentPage.styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../Loader/Loader";
import { token } from "../../App";
interface Album {
  name: string;
  cover: string;
}
export const SuccessfulPaymentPage: React.FC = () => {
  const [cookies, setCookie] = useCookies(["unlocked_album_id", "selfie_link"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [album, getAlbum] = useState<Album | null>(null);
  const albumId = cookies["unlocked_album_id"];
  const selfie = cookies["selfie_link"];
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ph-client.onrender.com/album/${albumId}`
        );
        console.log(response.data);
        setIsLoading(false);
        getAlbum(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
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
            src={selfie}
            height="30px"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
        </Link>
      </Header>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <BigText>Thank you!</BigText>
          <UsualText>
            The album
            <span style={{ fontWeight: "700" }}> {album?.name}</span> is now
            unlocked.
          </UsualText>

          <UsualText>
            You can now download, share, post, and print your hi-res,
            watermark-free, glorious memories.
          </UsualText>
          <MainImage alt="image" src={album?.cover} />
          <BtSeePhotos onClick={(e) => navigate(`/album-page/${albumId}`)}>
            See photos
          </BtSeePhotos>
        </Container>
      )}
    </div>
  );
};
