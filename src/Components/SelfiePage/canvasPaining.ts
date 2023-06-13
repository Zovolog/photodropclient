import { Area } from "react-easy-crop";

const createImage = async (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", () => {
      const errMsg = `Error loading image at ${url}`;
      console.log(errMsg);
    });
    image.crossOrigin = "anonymous";
    image.alt = "image";
    image.src = url;
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
