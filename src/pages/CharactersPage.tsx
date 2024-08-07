import { useEffect, useState } from "react";
import ICharacter from "../interfaces/characters.interface";
import { Search } from "../components/search/Search";
import { Spinner } from "../components/pure/Spinner";
import { Pagination } from "../components/pure/Pagination";
import { Characters } from "../components/pure/Characters";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchAPI = async (page: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_ENDPOINT}?page=${page}`);
      const data = await res.json();
      setTotalPages(data.info.pages);
      setCharacters(data.results);
      setAllCharacters(data.results);
    } catch (error) {
      console.error("Error al obtener datos");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAPI(page);
  }, [page]);

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

  return (
    <div className="characters-page">
      <Search searchCharacter={searchCharacter} />
      {isLoading ? <Spinner /> : <Characters characters={characters} />}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};
