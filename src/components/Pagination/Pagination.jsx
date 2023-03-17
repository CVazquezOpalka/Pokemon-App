import { Opacity } from "@mui/icons-material";
import { style } from "@mui/system";
import React from "react";

import styles from "./pagination.module.css";

export const Pagination = ({ onPrev, onNext, totalPage, Page }) => {
  return (
    <div className={styles.paginationContainer}>
      <h1>Pokedex</h1>
      <div className={styles.btnpagination}>
        <ul>
          {Page === 1 ? null : (
            <li>
              <button onClick={onPrev}>{"<"}</button>
            </li>
          )}
          <li>
            <span>
              page {Page} de {totalPage}
            </span>
          </li>
          <li>
            <button onClick={onNext}>{">"}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
