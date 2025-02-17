import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "../../types/ImageGallery.types";
import s from "./ImageGallery.module.css";

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;