import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import {
  AlbumImage,
  BigText,
  BtCloseModal,
  BtUnlock,
  BtUnlockDesktopButton,
  ChoosenPhoto,
  Dott,
  DownloadBt,
  Header,
  HeaderFirstBlock,
  ImageRow,
  Modal,
  SmallText,
  TextBlock,
  TextRow,
} from "./AlbumPage.styles";
import { Footer } from "../Footer/Footer";
import {
  NormalText,
  PayBt,
  PayMentModal,
  PayMentModalHeaderText,
} from "./PayMentModal.styles";
import { useCookies } from "react-cookie";
interface Album {
  name: string;
  photos: any;
  createdAt: string;
  albumId: string;
}
export const AlbumPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [album, getAlbum] = useState<Album | null>(null);
  const [choosenPhoto, setChoosenPhoto] = useState("");
  const [cookies, setCookie] = useCookies(["unlocked_album_id"]);
  const [locked, getLockedInfo] = useState(null);
  const modal = useRef<HTMLDialogElement>(null);
  const paymentModal = useRef<HTMLDialogElement>(null);
  const { albumId } = useParams();
  const navigate = useNavigate();

  const openModal = () => {
    modal.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    modal.current?.close();
    document.body.style.overflow = "auto";
  };
  const openPayModal = () => {
    paymentModal.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const closePayModal = () => {
    paymentModal.current?.close();
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ph-client.onrender.com/album/${albumId}`
        );

        setIsLoading(false);
        getAlbum(response.data);
        getLockedInfo(response.data.isUnlocked);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const sendPayment = async () => {
    try {
      const response = await axios.post(
        `https://ph-client.onrender.com/album/create-payment/${albumId}`
      );
      const url = response.data;
      window.location.href = url;
      console.log(url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header>
            <HeaderFirstBlock>
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
            </HeaderFirstBlock>
            {locked ? (
              <div></div>
            ) : (
              <BtUnlockDesktopButton onClick={openPayModal}>
                Unlock your photos
              </BtUnlockDesktopButton>
            )}
          </Header>
          <ImageRow>
            {album?.photos.map((photo: any) => (
              <AlbumImage
                src={photo.thumbnail}
                tabIndex={1}
                onClick={(e) => {
                  setChoosenPhoto(photo.thumbnail);
                  openModal();
                }}
              />
            ))}
          </ImageRow>
          {locked ? (
            <p></p>
          ) : (
            <BtUnlock onClick={openPayModal}>Unlock your photos</BtUnlock>
          )}
          <Footer />
          <Modal ref={modal}>
            <BtCloseModal onClick={closeModal} color={"white"} />
            <ChoosenPhoto src={choosenPhoto} alt="photo" />
            {locked ? (
              <DownloadBt href={choosenPhoto} download={choosenPhoto}>
                <img src="/img/downloadicon.png" height="21px" width="24px" />
                <span style={{ marginTop: "10px" }}>Download</span>
              </DownloadBt>
            ) : (
              <div></div>
            )}
          </Modal>
          <PayMentModal ref={paymentModal}>
            <div style={{ display: "flex" }}>
              <BtCloseModal onClick={closePayModal} color={"black"} />
              <PayMentModalHeaderText>
                Unlock your photos
              </PayMentModalHeaderText>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <NormalText>
                Get all photos from{" "}
                <span style={{ fontFamily: "FuturaNormal", fontWeight: "900" }}>
                  {album?.name}
                </span>{" "}
                in hi-resolution with-no watermark
              </NormalText>
              <p style={{ fontFamily: "FuturaNormal" }}>
                {album?.photos.length}$
              </p>
            </div>
            <PayBt
              onClick={(e) => {
                setCookie("unlocked_album_id", albumId);
                navigate("/successful-payment");
                // sendPayment();
              }}
            >
              Checkout
            </PayBt>
          </PayMentModal>
        </div>
      )}
    </div>
  );
};
