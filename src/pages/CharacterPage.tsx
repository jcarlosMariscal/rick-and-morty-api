import { useParams } from "react-router-dom";
import ICharacter from "../interfaces/characters.interface";
import { Character } from "../components/character/Character";
import { Spinner } from "../components/pure/Spinner";
import useFetch from "../hooks/useFetch";
import { ErrorHandling } from "../components/pure/ErrorHandling";

export const CharacterPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`character/${id}`);

  if (error) return <ErrorHandling code={error.code} />;

  return (
    <div className="container">
      {loading ? <Spinner /> : <Character character={data as ICharacter} />}
    </div>
  );
};
