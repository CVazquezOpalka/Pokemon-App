import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";

/* STYLES */

import styles from "./card.module.css";

export function PokeCard({ pokemon }) {
  const { allPokemons, setFavorite, favorite } = useContext(PokemonContext);

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const [heart, setHeart] = useState(blackHeart);



  const onClick = (e) => {
    e.preventDefault()
    const filterName = e.target.value;
    const pokemon = allPokemons.filter(
      (pokemon) => pokemon.name === filterName
    );
    setFavorite(favorite.concat(pokemon));
    setHeart(redHeart);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgBx}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className={styles.cardContext}>
          <div className={styles.title}>
            <h3>
              {pokemon.name.length <= 10
                ? pokemon.name
                : `${pokemon.name.slice(0, 12)}...`}
            </h3>
            <span className={styles.id}># {pokemon.id}</span>
          </div>
          <div className={styles.type}>
            {pokemon.types.map((e, i) => (
              <span key={i} className={e.type.name}>
                {e.type.name}
              </span>
            ))}
          </div>
          <div className={styles.btn}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <div className={styles.action}>📋</div>
            </Link>
            <button value={pokemon.name} onClick={onClick}>
              {heart}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
