import { useEffect, useState } from "react";
import ICharacter from "../interfaces/characters.interface";
import { Search } from "../components/search/Search";
import { Spinner } from "../components/pure/Spinner";
import { Pagination } from "../components/pure/Pagination";
import { Characters } from "../components/pure/Characters";
import useFetch from "../hooks/useFetch";
import { ErrorHandling } from "../components/pure/ErrorHandling";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([]);

  const [page, setPage] = useState<number>(1);
  const { data, loading, error, totalPages } = useFetch("character", page);

  useEffect(() => {
    setAllCharacters(data as ICharacter[]);
    setCharacters(data as ICharacter[]);
  }, [data]);

  const searchCharacter = (name: string) => {
    if (!name) {
      setCharacters(allCharacters);
    } else {
      setCharacters(
        characters.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
        )
      );
    }
  };

  if (error) return <ErrorHandling code={error.code} />;
  return (
    <div className="characters-page">
      <Search searchCharacter={searchCharacter} />
      {loading ? (
        <Spinner />
      ) : (
        <Characters characters={characters as ICharacter[]} />
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages as number}
        onPageChange={setPage}
      />
    </div>
  );
};
