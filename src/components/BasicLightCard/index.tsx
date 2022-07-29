import React from "react";
import styles from "./styles.module.css";

function BasicLightCard({
  power,
  model,
  id,
}: {
  power: string;
  model: string;
  id: string;
}) {
  return (
    <div>
      <h1 className={styles.name}>{id}</h1>
      <h2>{model}</h2>
      <h3>{power}</h3>
    </div>
  );
}

export default BasicLightCard;
