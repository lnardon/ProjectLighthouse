import { useRef, useState, ReactNode } from "react";

import styles from "./styles.module.css";
import Arrow from "./arrow.png";

function ExpandableArea({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const areaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);
  const toggleArea = () => {
    // Fix TS Error "Object is possibly null"(https://stackoverflow.com/questions/55677600/typescript-how-to-pass-object-is-possibly-null-error)
    if (arrowRef.current && areaRef.current) {
      if (!isOpen) {
        areaRef.current.classList.add(`${styles.open}`);
        areaRef.current.classList.remove(`${styles.closed}`);
        arrowRef.current.classList.add(`${styles.downArrow}`);
        arrowRef.current.classList.remove(`${styles.rightArrow}`);
      } else {
        areaRef.current.classList.add(`${styles.closed}`);
        areaRef.current.classList.remove(`${styles.open}`);
        arrowRef.current.classList.add(`${styles.rightArrow}`);
        arrowRef.current.classList.remove(`${styles.downArrow}`);
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={toggleArea}>
        {title}
        <img
          src={Arrow}
          alt="arrow icon"
          className={styles.icon}
          ref={arrowRef}
        />
      </div>
      <div className={styles.content} ref={areaRef}>
        {content}
      </div>
    </div>
  );
}

export default ExpandableArea;
