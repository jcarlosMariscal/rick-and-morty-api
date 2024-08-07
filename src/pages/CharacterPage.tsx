import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ICharacter from "../interfaces/characters.interface";
import { Character } from "../components/character/Character";
import { Spinner } from "../components/pure/Spinner";

export const CharacterPage = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();
  const fetchAPI = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_ENDPOINT}${id}`);
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error("Error al obtener datos");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container">
      {isLoading ? <Spinner /> : <Character character={character!} />}
    </div>
  );
};
