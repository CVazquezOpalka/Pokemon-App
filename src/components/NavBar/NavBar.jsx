import React, { useContext } from "react";
import styles from "./nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
/* --Iconos-- */
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
/* --Assets-- */
import img from "../../img/logo.png";

export function NavBar() {
  const { valueSearch, onInputChange, onResetForm, favorite } =
    useContext(PokemonContext);
  const navigate = useNavigate();
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("search", {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <header className={styles.navContainer}>
      <div className={styles.imgBox}>
        <img src={img} alt="pokemon-title" />
      </div>
      <nav className={styles.icons}>
        <ul>
          <li>
            <HomeIcon className={styles.icon} />
            <span className={styles.title}>
              <Link to={"/"} style={{ color: "#333" }}>
                Home
              </Link>
            </span>
          </li>
          <li>
            <FavoriteIcon className={styles.icon} />
            <span className={styles.title}>
              <Link to={"/favorite"} style={{ color: "#333" }}>
                Favorite {`(${favorite.length})`}
              </Link>
            </span>
          </li>
        </ul>
      </nav>
      <form onSubmit={onSearchSubmit} className={styles.searchContainer}>
        <input
          type="search"
          name="valueSearch"
          id=""
          value={valueSearch}
          onChange={onInputChange}
          placeholder="ingresa el nombre del pokemon..."
        />
        <div className={styles.action}>
          <button>
            <SearchIcon />
          </button>
        </div>
      </form>
    </header>
  );
}
