import styles from "./styles.module.css";

function BasicLightCard({
  power,
  model,
  id,
  onClick,
}: {
  power: string;
  model: string;
  id: string;
  onClick: () => Promise<any>;
}) {
  return (
    <div className={styles.container}>
      <h2>{model}</h2>
      <h3>{power}</h3>
      <button className={styles.toggleBtn} onClick={onClick}>
        Toggle
      </button>
    </div>
  );
}

export default BasicLightCard;
