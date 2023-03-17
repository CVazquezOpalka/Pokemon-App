import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { SearchCard } from "../../components/CardSearch/SearchCard";
import styles from "./ser.module.css";

const SearchPage = () => {
  const location = useLocation();

  const { globalState } = useContext(PokemonContext);

  const filteredPokemons = globalState.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <div>
      <h3 className={styles.title}>
        Se encontraron{" "}
        <span
          style={{
            fontWeight: "700 bold",
            fontSize: "1.5em",
            textAlign: "center",
          }}
        >
          {filteredPokemons.length}
        </span>{" "}
        resultados
      </h3>
      <div className={styles.mediaQuery}>
        {filteredPokemons.map((e) => (
          <SearchCard key={e.id} pokemon={e} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
