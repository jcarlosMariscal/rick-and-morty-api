import { ChangeEvent, FC } from "react";
import "./search.css";

type Props = {
  searchCharacter: (name: string) => void;
};
export const Search: FC<Props> = ({ searchCharacter }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchCharacter(e.target.value);
  };
  return (
    <form className="search-form">
      <input
        type="search"
        className="search-input"
        placeholder="Buscar un personaje"
        onChange={handleChange}
      />
    </form>
  );
};
