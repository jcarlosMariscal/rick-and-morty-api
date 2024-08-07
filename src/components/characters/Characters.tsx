import { FC } from "react";
import ICharacter from "../../interfaces/characters.interface";
import "./characters.css";
import { Card } from "../pure/Card";

type Props = {
  characters: ICharacter[];
};
export const Characters: FC<Props> = ({ characters }) => {
  return (
    <div className="characters">
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </div>
  );
};
