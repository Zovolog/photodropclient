import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import {
  BigText,
  BtCloseModal,
  BtUnlock,
  Dott,
  DownloadBt,
  Header,
  ImageRow,
  Modal,
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
  const [choosenPhoto, setChoosenPhoto] = useState("");
  const [locked, getLockedInfo] = useState(null);
  const modal = useRef<HTMLDialogElement>(null);
  const { albumId } = useParams();
  const openModal = () => {
    modal.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.current?.close();
    document.body.style.overflow = "auto";
  };
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
        getLockedInfo(response.data.isUnlocked);
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
            <Link to="/main-page">
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
              <img
                src={photo.thumbnail}
                height="125px"
                tabIndex={1}
                onClick={(e) => {
                  setChoosenPhoto(photo.thumbnail);
                  openModal();
                }}
              />
            ))}
          </ImageRow>
          <BtUnlock>Unlock your photos</BtUnlock>
          <Footer />
          <Modal ref={modal}>
            <BtCloseModal onClick={closeModal} />
            <img
              src={choosenPhoto}
              alt="photo"
              width="100%"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            {locked ? (
              <DownloadBt href={choosenPhoto} download={choosenPhoto}>
                <img src="/img/downloadicon.png" height="21px" width="24px" />
                <span style={{ marginTop: "10px" }}>Download</span>
              </DownloadBt>
            ) : (
              <div>No!</div>
            )}
          </Modal>
        </div>
      )}
    </div>
  );
};
