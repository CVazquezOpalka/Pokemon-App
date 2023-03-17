import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { PokeCard } from "../../components/pokeCard/pokeCard";
import styles from './ser.module.css'

const SearchPage = () => {
  const location = useLocation();
  console.log(location);

  const { globalState } = useContext(PokemonContext);

  const filteredPokemons = globalState.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(location.state)
  );

  return (
    <div>
      <h3
        
        className={styles.title}
      >
        Se encontraron{" "}
        <span
          style={{
            fontWeight: "700 bold",
            fontSize: "1.5em",
          }}
        >
          {filteredPokemons.length}
        </span>{" "}
        resultados
      </h3>
      <div
         className={styles.mediaQuery}
      >
        {filteredPokemons.map((e) => (
          <PokeCard key={e.id} pokemon={e} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
