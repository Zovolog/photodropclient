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
  SelfieImage,
} from "./UserProfile.style";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Cropper, { Point, Area } from "react-easy-crop";
import { handleCrop } from "./canvasPaining";
import {
  BtCloseModal,
  ModalAddPhoto,
  ModalBtRetakePhoto,
  ModalBtSendPhoto,
  ModalBtWrapper,
  ModalHeadText,
  ModalHeader,
  ModalImageWrapper,
  ModalNormalText,
} from "./ModalSelfie.style";
export const UserProfile: React.FC = () => {
  const [cookies, setCookie] = useCookies<string>(["selfie_link"]);
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<string | any>(null);
  const [selfie, getSelfie] = useState("");
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [area, setArea] = useState<Area>({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [minZoom, setMinZoom] = useState<number>(1);
  const modal = useRef<HTMLDialogElement>(null);
  const modalFileInputRef = useRef<HTMLInputElement>(null);
  const user_name = cookies.user_name;

  const onCropComplete = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setArea(croppedAreaPixels);
    },
    []
  );
  useEffect(() => {
    getSelfie(cookies["selfie_link"]);
  }, [cookies]);
  const openModal = () => {
    modal.current?.showModal();
  };
  const closeModal = () => {
    modal.current?.close();
  };
  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedPhoto(URL.createObjectURL(file as File));
  };
  const handleCropImage = async () => {
    if (selectedPhoto && area) {
      const file = (await handleCrop(selectedPhoto, area)) as Blob;
      const formData = new FormData();
      formData.append("files", file, "selfie.jpeg");

      axios
        .post(`https://ph-client.onrender.com/upload-selfie`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);
          setCookie("selfie_link", response.data.selfie.selfieThumbnail);
          closeModal();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div>
        <Header>
          <Link to="/main-page">
            <img
              src="/img/arrow-left.png"
              height="15px"
              style={{ marginLeft: "15px" }}
            />
          </Link>
          <img
            src={"/img/logo.jpg"}
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
          <XlText>{user_name ? `Welcome, ${user_name}.` : "Welcome"}</XlText>
          <LText>Your selfie</LText>
          <ImageContainer>
            <SelfieImage src={selfie} alt="selfie" />
            <BtEdit
              onClick={() => {
                openModal();
                setSelectedPhoto(cookies["selfie_link"]);
              }}
            >
              <img src="/img/Vector.png" />
            </BtEdit>
          </ImageContainer>

          <YourNameBlock onClick={(e) => navigate("/change-name")}>
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

        <ModalAddPhoto ref={modal}>
          <ModalHeader>
            <BtCloseModal onClick={closeModal}></BtCloseModal>
            <ModalHeadText>Take a selfie</ModalHeadText>
          </ModalHeader>
          <ModalNormalText>Drag and zoom image to crop</ModalNormalText>
          {selectedPhoto && (
            <ModalImageWrapper>
              <Cropper
                image={selectedPhoto ? selectedPhoto : ""}
                aspect={1}
                crop={crop}
                zoom={zoom}
                minZoom={minZoom}
                cropShape="round"
                objectFit="vertical-cover"
                showGrid={false}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                cropSize={{ width: 280, height: 280 }}
                onCropComplete={onCropComplete}
                onMediaLoaded={({ height, width }) => {
                  const smallSide = height >= width ? width : height;
                  setMinZoom(285 / smallSide);
                  setZoom(285 / smallSide);
                }}
                zoomWithScroll={true}
              />
            </ModalImageWrapper>
          )}
          <ModalBtWrapper>
            <ModalBtRetakePhoto
              onClick={() => modalFileInputRef.current?.click()}
            >
              Retake
            </ModalBtRetakePhoto>
            <input
              type="file"
              ref={modalFileInputRef}
              onChange={handleModalInputChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <ModalBtSendPhoto onClick={handleCropImage}>Save</ModalBtSendPhoto>
          </ModalBtWrapper>
        </ModalAddPhoto>
      </div>
    </div>
  );
};
