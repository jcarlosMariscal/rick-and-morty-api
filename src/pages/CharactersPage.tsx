import { useEffect, useState } from "react";
import { Characters } from "../components/characters/Characters";
import ICharacter from "../interfaces/characters.interface";
import { Search } from "../components/search/Search";

export const CharactersPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAPI = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_ENDPOINT}?page=${page}`);
      const data = await res.json();

      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
        setAllCharacters((prevCharacters) => [
          ...prevCharacters,
          ...data.results,
        ]);
      }
    } catch (error) {
      console.error("Error al obtener datos");
    }
    setLoading(false);
  };
  const loadMoreItems = () => {
    if (hasMore && !loading) setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchAPI(page);
  }, [page]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMoreItems();
      },
      { threshold: 1.0 }
    );

    const lastItem = document.querySelector("#last-item");
    if (lastItem) observer.observe(lastItem);

    return () => {
      if (lastItem) observer.unobserve(lastItem);
    };
  }, [loading, hasMore]);

  const searchCharacter = (name: string) => {
    // setSearchTerm(name);
    if (!name) {
      setCharacters(allCharacters);
    } else {
      setHasMore(false);
      setCharacters(
        allCharacters.filter((el) =>
          el.name.toLowerCase().includes(name.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="characters-page">
      <Search searchCharacter={searchCharacter} />
      <Characters characters={characters} />
      {loading && <p>Cargando...</p>}
      <div id="last-item" />
    </div>
  );
};
