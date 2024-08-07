import { FC } from "react";
import ICharacter from "../../interfaces/characters.interface";
import { NavLink } from "react-router-dom";

type Props = {
  character: ICharacter;
};
export const CharactersCard: FC<Props> = ({ character }) => {
  const { image, name, status, gender } = character;
  return (
    <NavLink to={`character/${character.id}`} className="characters__card">
      <img src={image} alt="" className="card__image" />
      <span className="card__name">{name}</span>
      <div className="card__details">
        <span className="card__status card--rel">{status}</span>
        <span className="card__gender card--rel">{gender}</span>
      </div>
    </NavLink>
  );
};
