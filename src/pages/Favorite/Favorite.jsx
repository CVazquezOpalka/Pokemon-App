import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import React from "react";
import { FavoriteCard } from "../../components/FavoriteCard/FavoriteCard";
import styles from './favorite.module.css'

function FavoritePage() {
  const { favorite } = useContext(PokemonContext);
  return (
    <main>
      <h2 className={styles.title}
      >
        En esta pagina podras encontrar a los pokemon's que hallas agregado a
        favoritos
      </h2>
      <div className={styles.mediaQuery}>
        {favorite.map((e) => (
          <FavoriteCard pkm={e} key={e.id} />
        ))}
      </div>
    </main>
  );
}

export default FavoritePage;
