import { Area } from "react-easy-crop";

const createImage = async (url: string): Promise<any> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => resolve(image));
    image.crossOrigin = "anonymous";
    image.alt = "image";
  });
};

export const handleCrop = async (selectedPhoto: string, area: Area) => {
  if (selectedPhoto) {
    const image = await createImage(selectedPhoto);

    const canvas = document.createElement("canvas");
    const context = <CanvasRenderingContext2D | null>canvas.getContext("2d");
    if (!context) return;

    canvas.width = area.width;
    canvas.height = area.height;

    context?.drawImage(
      image,
      area.x,
      area.y,
      area.width,
      area.height,
      0,
      0,
      area.width,
      area.height
    );

    return new Promise((resolve) => {
      canvas.toBlob(resolve, "image/jpeg");
    });
  }
};
