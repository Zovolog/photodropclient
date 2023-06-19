import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg";
import {
  AlbumBlock,
  BtUnlock,
  Header,
  ImageContainer,
  MainText,
  PhotoBlock,
  TextInsideImage,
} from "./MainPage.styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { MainPageNoAlbums } from "./MainPageNoAlbums/MainPageNoAlbums";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";

export const MainPage: React.FC = () => {
  const [cookies, setCookie] = useCookies<string>(["selfie_link"]);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ph-client.onrender.com/get-all"
        );
        setIsLoading(false);
        setAlbums(response.data);
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
          src={logo}
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
      {isLoading ? (
        <Loader />
      ) : albums.length > 0 ? (
        <div>
          <MainText>Albums</MainText>
          <AlbumBlock>
            {albums?.map((album: any) => (
              <Link to={`/album-page/${album.albumId}`}>
                <ImageContainer>
                  <img
                    src={album.cover}
                    height="140px"
                    style={{
                      borderRadius: "20px",
                      marginRight: "5px",
                      marginTop: "10px",
                    }}
                  />
                  <TextInsideImage>{album.name}</TextInsideImage>
                </ImageContainer>
              </Link>
            ))}
          </AlbumBlock>
          <MainText>All photos</MainText>
          <PhotoBlock>
            {albums?.map((album: any) =>
              album.photos.map((photo: any, i: number) => (
                <img src={photo.thumbnail} height="125px" key={i} />
              ))
            )}
          </PhotoBlock>
          <BtUnlock>Unlock your photos</BtUnlock>
          <Footer />
        </div>
      ) : (
        <MainPageNoAlbums />
      )}
    </div>
  );
};
