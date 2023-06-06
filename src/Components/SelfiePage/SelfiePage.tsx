import logo from "../../img/logo.jpg";
import arrow from "../../img/arrow-left.png";
import "./SelfiePage.css";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "./avatar.png";
import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import axios from "axios";
import { useCookies } from "react-cookie";
export const SelfiePage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [croppedIamge, setCroppedImage] = useState<string>("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [area, setArea] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const [minZoom, setMinZoom] = useState(1);
  const navigate = useNavigate();
  const modal = useRef<HTMLDialogElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalFileInputRef = useRef<HTMLInputElement>(null);
  const { clientId } = useParams();
  const formData = new FormData();
  const [cookies, setCookie] = useCookies<string>(["access_token"]);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
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
    setSelectedPhoto(file || null);
    openModal();
  };
  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedPhoto(file || null);
  };
  const handleCropImage = () => {
    if (selectedPhoto) {
      const image = new Image();
      image.onload = () => {
        const cropCanvas = document.createElement("canvas");
        cropCanvas.width = 280;
        cropCanvas.height = 280;
        const ctx = cropCanvas.getContext("2d");
        ctx?.drawImage(
          image,
          area.x,
          area.y,
          area.width,
          area.height,
          0,
          0,
          280,
          280
        );
        const croppedImageBlob = cropCanvas.toDataURL("image/jpeg");
        setCroppedImage(croppedImageBlob);
        const croppedImageFile = dataURLtoFile(croppedImageBlob, "cropped.jpg");
        formData.append("files", croppedImageFile);
        axios
          .post(`https://ph-client.onrender.com/upload-selfie`, formData, {
            headers: {
              ["authorization"]: cookies.access_token,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            console.log(response);
            navigate(`/main-page/${clientId}`);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      image.src = URL.createObjectURL(selectedPhoto);
    }
  };
  const dataURLtoFile = (dataURL: string, fileName: string): File => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  };
  return (
    <div>
      <header>
        <button
          className="bt-back"
          onClick={(e) => navigate("/verification-code")}
        >
          <img src={arrow} style={{ marginLeft: "15px" }} height="16px" />
        </button>
        <img src={logo} style={{ margin: "0 auto" }} />
      </header>
      <div className="selfie-page-content">
        <p className="text-xl">Add a selfie</p>
        <p className="text-selfie-page">
          A selfie allows your photos to be synced with your account.
        </p>
        <div className="avatar-block">
          <img src={avatar} alt="avatar" height="181px" />
          <button
            className="add-avatar"
            onClick={() => fileInputRef.current?.click()}
          ></button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleInputChange}
            accept="image/*"
            style={{ display: "none" }}
          />
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
              image={URL.createObjectURL(selectedPhoto)}
              aspect={1}
              crop={crop}
              zoom={zoom}
              minZoom={1}
              cropShape="round"
              objectFit="vertical-cover"
              showGrid={false}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              cropSize={{ width: 280, height: 280 }}
              onMediaLoaded={({ height, width }) => {
                const smallSide = height >= width ? width : height;
                setMinZoom(285 / smallSide);
                setZoom(285 / smallSide);
              }}
              onCropComplete={onCropComplete}
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
  );
};
