import React, { useContext, useState, useEffect } from "react";
import "./pokeDetail.css";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { Loading } from "../../components/Loding/Loading";

function PokeDetailPage() {
  const { getPokemonById } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main>
      {loading ? (
        <Loading/>
      ) : (
        <article className="container">
          <div className="title-and-id">
            <h1>{pokemon.name}</h1>
            <span>
              <i>#{id}</i>
            </span>
          </div>
          <div className="imgBox peso-talla">
            <img
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
              width="400"
            />
            <div className="peso-talla">
              <h3>
                Peso: <span>{pokemon.weight}</span> Kg.
              </h3>
              <h3>
                Talla: <span>{pokemon.height}</span>
              </h3>
            </div>
          </div>
          <div className="stats">
            <h3>Stats:</h3>
            <p>
              HP: <span>{pokemon.stats[0].base_stat}</span>
            </p>
            <p>
              Attack: <span>{pokemon.stats[1].base_stat}</span>
            </p>
            <p>
              Defence: <span>{pokemon.stats[2].base_stat}</span>
            </p>
            <p>
              Special-Attack: <span>{pokemon.stats[3].base_stat}</span>
            </p>
            <p>
              Special-Defence: <span>{pokemon.stats[4].base_stat}</span>
            </p>
            <p>
              Speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </article>
      )}
    </main>
  );
}

export default PokeDetailPage;
