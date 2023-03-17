import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./fav.module.css";
import { PokemonContext } from "../../context/PokemonContext";

export const FavoriteCard = ({ pkm }) => {
  const { favorite, setFavorite } = useContext(PokemonContext);
  const navigate = useNavigate();

  const navigateInfo = (e) => {
    const id = e.target.value;
    navigate(`/pokemon/${id}`);
  };

  const handleClick = (e) => {
    const idx = e.target.value;
    window.alert(`Esta por eliminar a ${pkm.name} de favoritos`);
    const filtered = favorite.filter((e) => e.name !== idx);
    setFavorite([...filtered]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img
          width={150}
          src={pkm.sprites.other.home.front_default}
          alt={pkm.name}
        />
      </div>
      <div className={styles.contentCard}>
        <div className={styles.title}>
          <h3>{pkm.name}</h3>{" "}
          <span>
            <i>#{pkm.id}</i>
          </span>
        </div>
        <p
          style={{
            paddingTop: "5px",
            fontSize: "1.2em",
            fontWeight: "400",
            color: "rgb(146, 18, 18)",
          }}
        >
          <i>Coleccionable</i>
        </p>
        <div className={styles.btn}>
          <button
            value={pkm.name}
            onClick={handleClick}
            style={{
              fontSize: "1.2em",
            }}
          >
            💔
          </button>
          <button
            value={pkm.id}
            onClick={navigateInfo}
            style={{
              fontSize: "1.2em",
            }}
          >
            📋
          </button>
        </div>
      </div>
    </div>
  );
};
