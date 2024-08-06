import "./search.css";

export const Search = () => {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar un personaje"
      />
    </form>
  );
};
