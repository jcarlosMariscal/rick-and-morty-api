import { useEffect, useState } from "react";
import { Search } from "../components/search/Search";
import { Characters } from "../components/characters/Characters";
import ICharacter from "../interfaces/characters.interface";

export const Home = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const fetchAPI = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    setCharacters(data.results as ICharacter[]);
    console.log(data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Search />
      <Characters characters={characters} />
    </>
  );
};
