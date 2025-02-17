import { FC } from "react";
import s from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <p className={s.error}>{message}</p>
);

export default ErrorMessage;