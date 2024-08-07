import { useContext } from "react";
import { Characters } from "../components/pure/Characters";
import { AppContext } from "../context/AppContext";

export const FavoritesPage = () => {
  const { favorites } = useContext(AppContext);
  return (
    <div className="favorites-page">
      <Characters characters={favorites} />
    </div>
  );
};
