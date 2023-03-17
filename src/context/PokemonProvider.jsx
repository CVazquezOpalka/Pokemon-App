import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalState, setGlobalState] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const getAllPokemon = async (limit = 21, offset = 21 * page) => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const res = await fetch(URL);
    const data = await res.json();
    const promise = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promise);
    setTotal(Math.ceil(data.count / 25));
    setAllPokemons(results);
    setLoading(false);
  };
  const getGlobalPokemons = async () => {
    const URL = " https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0";
    const res = await fetch(URL);
    const data = await res.json();
    const promesi = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promesi);
    setGlobalState(results);
    setLoading(false);
  };
  const getPokemonById = async (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };
  const onNextPage = () => {
    const onPage = Math.min(page + 1, total);
    setPage(onPage);
  };
  const onPrevPage = () => {
    const onPage = Math.max(page - 1, 0);
    setPage(onPage);
  };
  //function para guardar las cosas en el local storage

  // este useEffect voy a usar para el local storage;
  useEffect(() => {}, []);

  useEffect(() => {
    getAllPokemon();
  }, [page]);
  useEffect(() => {
    getGlobalPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalState,
        getPokemonById,
        onNextPage,
        onPrevPage,
        page,
        total,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
