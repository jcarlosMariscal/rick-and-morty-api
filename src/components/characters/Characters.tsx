import { FC } from "react";
import ICharacter from "../../interfaces/characters.interface";
import "./characters.css";

type Props = {
  characters: ICharacter[];
};
export const Characters: FC<Props> = ({ characters }) => {
  return (
    <div className="characters">
      {characters.map((character) => (
        <div key={character.id} className="characters__card">
          <img src={character.image} alt="" className="card__image" />
          <span className="card__name">{character.name}</span>
          <div className="card__info">
            <span className="card__status card--rel">{character.status}</span>
            <span className="card__gender card--rel">{character.gender}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
