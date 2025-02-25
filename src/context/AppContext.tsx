import { createContext, ReactNode, useState } from "react";
import ICharacter from "../interfaces/characters.interface";

type AppContextType = {
  favorites: ICharacter[];
  addFavorite: (character: ICharacter) => void;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  const addFavorite = (character: ICharacter) => {
    setFavorites((prev) => {
      // Verificamos si el personaje ya está en favoritos para quitarlo.
      const isFavorite = prev.some((fav) => fav.id === character.id);
      if (isFavorite) {
        return prev.filter((fav) => fav.id !== character.id);
      }
      // Evitamos que se pueda agregar un personaje dos veces.
      if (prev.some((fav) => fav.id === character.id)) {
        return prev;
      }
      if (prev.length === 5) {
        return [...prev.slice(1), character];
      }
      return [...prev, character];
    });
  };
  return (
    <AppContext.Provider
      value={{
        favorites,
        addFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
