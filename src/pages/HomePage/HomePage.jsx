import React, { useContext } from "react";
/* styles */
import styles from "./home.module.css";

/* Components */
import { ContextGrid } from "../../components/CardContext/ContextGrid";
import { PokemonContext } from "../../context/PokemonContext";
import { Loading } from "../../components/Loding/Loading";

function HomePage() {
  const { loading } = useContext(PokemonContext);

  return (
    <>
      <ContextGrid />
    </>
  );
}

export default HomePage;
