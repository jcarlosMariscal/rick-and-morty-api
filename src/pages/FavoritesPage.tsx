import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card } from "../components/pure/Card";

export const FavoritesPage = () => {
  const { favorites } = useContext(AppContext);
  return (
    <div className="container">
      <div className="favorites__content">
        {favorites.length ? (
          favorites.map((fav) => <Card key={fav.id} character={fav} />)
        ) : (
          <div>No hay favoritos</div>
        )}
      </div>
    </div>
  );
};
