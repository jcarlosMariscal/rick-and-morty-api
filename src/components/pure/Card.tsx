import { FC } from "react";
import ICharacter from "../../interfaces/characters.interface";
import "./card.css";
import { Characteristic } from "../pure/Characteristic";
import { NavLink } from "react-router-dom";

type Props = {
  character: ICharacter;
};

export const Card: FC<Props> = ({ character }) => {
  const { name, image, gender, species, status, id } = character;
  return (
    <NavLink to={`/character/${id}`} className="card">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__content">
        <h4 className="content__name">{name}</h4>
        <div className="characteristics">
          <Characteristic text={gender} color="primary" />
          <Characteristic text={status} color="secondary" />
          <Characteristic text={species} color="tertiary" />
        </div>
      </div>
    </NavLink>
  );
};
