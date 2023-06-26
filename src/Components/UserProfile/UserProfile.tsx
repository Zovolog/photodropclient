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
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Cropper, { Point, Area } from "react-easy-crop";
import { handleCrop } from "./canvasPaining";
export const UserProfile: React.FC = () => {
  const [cookies, setCookie] = useCookies<string>(["selfie_link"]);
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<string | any>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [area, setArea] = useState<Area>({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [minZoom, setMinZoom] = useState<number>(1);
  const modal = useRef<HTMLDialogElement>(null);
  const modalFileInputRef = useRef<HTMLInputElement>(null);
  const user_name = cookies.user_name;
  const selfie = cookies.selfie_link;
  const onCropComplete = useCallback(
    (_croppedArea: any, croppedAreaPixels: any) => {
      setArea(croppedAreaPixels);
    },
    []
  );
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
            "Content-Type": "multipart/form-data", // Пример заголовка
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
          <XlText>{user_name ? `Welcome, ${user_name}.` : "Welcome"}</XlText>
          <LText>Your selfie</LText>
          <ImageContainer>
            <img
              src={selfie}
              alt="selfie"
              width="100px"
              height="100px"
              style={{ borderRadius: "50%" }}
            />
            <BtEdit
              onClick={() => {
                openModal();
                setSelectedPhoto(selfie);
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

        <dialog className="modal-add-photo" ref={modal}>
          <div className="modal-header">
            <button className="bt-close-modal" onClick={closeModal}></button>
            <p className="modal-header-text">Take a selfie</p>
          </div>
          <p className="modal-header-normal-text">
            Drag and zoom image to crop
          </p>
          {selectedPhoto && (
            <span className="selfie-photo">
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
            </span>
          )}

          <div className="bt-row">
            <button
              className="bt-resend"
              onClick={() => modalFileInputRef.current?.click()}
            >
              Retake
            </button>
            <input
              type="file"
              ref={modalFileInputRef}
              onChange={handleModalInputChange}
              accept="image/*"
              style={{ display: "none" }}
            />
            <button className="bt-send-photo" onClick={handleCropImage}>
              Save
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};
