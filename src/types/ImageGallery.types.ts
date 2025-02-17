import { Image } from "./Image.types";

export type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};