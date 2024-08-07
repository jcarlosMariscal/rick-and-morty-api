import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ICharacter from "../../interfaces/characters.interface";
import "./character.css";

export const Character = () => {
  const [character, setCharacter] = useState<ICharacter | null>(null);

  const { id } = useParams();
  const fetchAPI = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    setCharacter(data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container">
      <div className="character">
        <div className="character__content">
          <div className="content__header">
            <div className="header__name">
              <h2>{character?.name}</h2>
            </div>
            <div className="header__actions">
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  className="svg-home"
                >
                  <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
                </svg>
              </NavLink>
              <button className="btn-favorite">
                <svg
                  className="feather feather-star svg-star"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>
            </div>
          </div>
          <div className="content__characteristics">
            <span className="characteristic characteristic--primary">
              {character?.gender}
            </span>
            <span className="characteristic characteristic--secondary">
              {character?.status}
            </span>
            <span className="characteristic characteristic--tertiary">
              {character?.species}
            </span>
            {character?.type && (
              <span className="characteristic characteristic--quaternary">
                {character?.type}
              </span>
            )}
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
          <img src={character?.image} alt="" />
        </div>
      </div>
    </div>
  );
};
