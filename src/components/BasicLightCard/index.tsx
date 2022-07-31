import { useState } from "react";
import styles from "./styles.module.css";

function BasicLightCard({
  power,
  model,
  id,
  rgb,
  onClick,
  changeColor,
}: {
  power: string;
  model: string;
  id: string;
  rgb: string;
  onClick: () => Promise<any>;
  changeColor: (color: string) => Promise<any>;
}) {
  const rgb2hex = (c: any) =>
    "#" +
    c.match(/\d+/g).map((x: any) => (+x).toString(16).padStart(2, "0")).join``;
  const [color, setColor] = useState<string>(rgb2hex(rgb));
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{model}</h2>
        <h3>{power}</h3>
        <button className={styles.toggleBtn} onClick={onClick}>
          Toggle
        </button>
      </div>
      <div className={styles.colorContainer}>
        <div className={styles.colorPickerContainer}>
          <h3>Light Color:</h3>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={styles.colorPicker}
          />
        </div>
        <button onClick={() => changeColor(color)} className={styles.colorBtn}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default BasicLightCard;
