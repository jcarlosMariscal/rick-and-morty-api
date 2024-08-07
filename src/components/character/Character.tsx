import { FC, useContext, useEffect, useState } from "react";
import "./character.css";
import { AppContext } from "../../context/AppContext";
import { Characteristic } from "../pure/Characteristic";
import ICharacter from "../../interfaces/characters.interface";

type Props = {
  character: ICharacter;
};
export const Character: FC<Props> = ({ character }) => {
  const { addFavorite, favorites } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    favorites.some((fav) => fav.id === character?.id)
  );
  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === character?.id));
  }, [favorites]);

  return (
    <div className="character">
      <div className="character__content">
        <div className="content__header">
          <div className="header__name">
            <h2>{character?.name}</h2>
          </div>
          <div className="header__actions">
            <button
              className={`btn-favorite ${isFavorite ? "selected" : ""}`}
              onClick={() => addFavorite(character!)}
            >
              <svg
                className="svg-star"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>
          </div>
        </div>
        <div className="characteristics">
          <Characteristic text={character?.gender} color="primary" />
          <Characteristic text={character?.status} color="secondary" />
          <Characteristic text={character?.species} color="tertiary" />
          <Characteristic text={character?.type} color="quaternary" />
        </div>
        <p>Ha aparecido en {character?.episode.length} episodio(s)</p>
        <p>
          <span>Origen: </span>
          {character?.location.name}
        </p>
        <p>
          <span>Ubicación: </span>
          {character?.origin.name}
        </p>
      </div>
      <div className="character__image">
        <img src={character?.image} alt="Character Image" />
      </div>
    </div>
  );
};
