import React from "react";
import styles from "./GameOptions.module.css";

export default function GameOptions({ children }) {
  return (
    <main className={styles[`game-options-bg`]}>
      <h1 className="visually-hidden">Connect Four</h1>
      <div className={styles[`options-container`]}>
        {/* img */}
        {/* button player vs player */}
        {/* rules */}
      </div>
    </main>
  );
}
