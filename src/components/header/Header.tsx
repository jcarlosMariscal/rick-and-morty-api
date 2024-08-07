import { ChangeEvent, FC } from "react";
import "./header.css";

type Props = {
  searchCharacter: (name: string) => void;
};
export const Header: FC<Props> = ({ searchCharacter }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchCharacter(e.target.value);
  };
  return (
    <>
      <form className="search-form">
        <input
          type="search"
          className="search-input"
          placeholder="Buscar un personaje"
          onChange={handleChange}
        />
      </form>
    </>
  );
};
