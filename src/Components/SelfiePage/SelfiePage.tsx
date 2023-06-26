import logo from "../../img/logo.jpg";
import arrow from "../../img/arrow-left.png";
import "./SelfiePage.css";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "./avatar.png";
import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { handleCrop } from "./canvasPaining";
import { Area, Point } from "react-easy-crop";
import axios from "axios";
import { useCookies } from "react-cookie";
export const SelfiePage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [area, setArea] = useState<Area>({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [minZoom, setMinZoom] = useState<number>(1);
  const navigate = useNavigate();
  const modal = useRef<HTMLDialogElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalFileInputRef = useRef<HTMLInputElement>(null);
  const { clientId } = useParams();
  const [cookies, setCookie] = useCookies<string>(["access_token"]);
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedPhoto(URL.createObjectURL(file as File));
    openModal();
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
            ["authorization"]: cookies.access_token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);
          setCookie("selfie_link", response.data.selfie.selfieThumbnail);
          navigate(`/main-page`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <header>
        <img src={logo} style={{ margin: "0 auto" }} />
      </header>
      <div className="selfie-page-content">
        <p className="text-xl">Add a selfie</p>
        <p className="text-selfie-page">
          A selfie allows your photos to be synced with your account.
        </p>
        <div className="avatar-block">
          <img
            src={selfie ? selfie : avatar}
            alt="avatar"
            height="181px"
            style={{ borderRadius: "50%" }}
          />
          <button
            className="add-avatar"
            onClick={() => fileInputRef.current?.click()}
          ></button>
        </div>
      </div>
      <dialog className="modal-add-photo" ref={modal}>
        <div className="modal-header">
          <button className="bt-close-modal" onClick={closeModal}></button>
          <p className="modal-header-text">Take a selfie</p>
        </div>
        <p className="modal-header-normal-text">Drag and zoom image to crop</p>
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
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
};
