import { Image } from "./Image.types";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}