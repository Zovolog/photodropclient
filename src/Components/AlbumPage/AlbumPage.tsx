import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import {
  BigText,
  BtUnlock,
  Dott,
  Header,
  ImageRow,
  SmallText,
  TextBlock,
  TextRow,
} from "./AlbumPage.styles";
import { Footer } from "../Footer/Footer";
interface Album {
  name: string;
  photos: any;
  createdAt: string;
}
export const AlbumPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [album, getAlbum] = useState<Album | null>(null);
  const { albumId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ph-client.onrender.com/album/${albumId}`
        );
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
            <TextBlock>
              <BigText>{album?.name}</BigText>
              <TextRow>
                <SmallText>{album?.createdAt}</SmallText>
                <Dott />
                <SmallText style={{ color: "#3300CC" }}>
                  {album?.photos.length > 1
                    ? `${album?.photos.length} photos`
                    : "1 photo"}
                </SmallText>
              </TextRow>
            </TextBlock>
          </Header>
          <ImageRow>
            {album?.photos.map((photo: any) => (
              <img src={photo.thumbnail} height="125px" />
            ))}
          </ImageRow>
          <BtUnlock>Unlock your photos</BtUnlock>
          <Footer />
        </div>
      )}
    </div>
  );
};
