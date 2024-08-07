import { FC } from "react";
import "./characteristic.css";

type Props = {
  text?: string;
  color: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Characteristic: FC<Props> = ({ text, color }) => {
  return (
    <>{text && <span className={`characteristic ${color}`}>{text}</span>}</>
  );
};
