import { FC } from "react";
import { errorCodes } from "../../interfaces/errors.interface";

type Props = {
  code: number;
};

export const ErrorHandling: FC<Props> = ({ code }) => {
  const error = errorCodes.find((err) => err.code === code);
  const message = error ? error.message : "Ha ocurrido un error desconocido.";
  return <span className="error-message">{message}</span>;
};
