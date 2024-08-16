import { FC, useEffect } from "react";
import "./search.css";
import { useDebounceValue } from "usehooks-ts";

type Props = {
  searchCharacter: (name: string) => void;
};
export const Search: FC<Props> = ({ searchCharacter }) => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);

  useEffect(() => {
    if (!debouncedValue) searchCharacter("");
    searchCharacter(debouncedValue);
  }, [debouncedValue]);
  return (
    <form className="search-form">
      <input
        type="search"
        className="search-input"
        placeholder="Buscar un personaje"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
