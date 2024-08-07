import { FC } from "react";
import ICharacter from "../../interfaces/characters.interface";
import "./characters.css";
import { CharactersCard } from "./CharactersCard";

type Props = {
  characters: ICharacter[];
};
export const Characters: FC<Props> = ({ characters }) => {
  return (
    <div className="characters">
      {characters.map((character, index) => (
        <CharactersCard key={index} character={character} />
      ))}
    </div>
  );
};
