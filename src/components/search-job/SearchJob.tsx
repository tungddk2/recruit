import styles from "./SearchJob.module.css";
import { useState } from "react";

export default function SearchJob(): JSX.Element {
  const [displayFilter, setDisplayFilter] = useState(true);
  return (
    <div className={styles["background"]}>
      <form className={styles["searchbox"]}>
        <input className={styles["searchinput"]} />
        <button className={styles["searchbuttons"]}>
          <div className="search item"></div>
          <div className={styles["searchtext"]}>Seacrh</div>
        </button>
      </form>
      {displayFilter ? (
        <div className={styles["filter"]}>Todo: List filter</div>
      ) : (
        <></>
      )}
    </div>
  );
}
