import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { Loading } from "../Loding/Loading";
/* styles */
import styles from "./context.module.css";
/* Components */
import { PokeCard } from "../pokeCard/pokeCard";
import { Pagination } from "../Pagination/Pagination";
/* function */

export function ContextGrid() {
  const { allPokemons, page, onNextPage, onPrevPage, total, addFav, loading } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <Pagination
            onPrev={onPrevPage}
            onNext={onNextPage}
            totalPage={total}
            Page={page + 1}
          />
          <div className={styles.grid}>
            {allPokemons
              ?.sort((a, b) => a.id - b.id)
              .map((e) => (
                <PokeCard key={e.id} pokemon={e} />
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
