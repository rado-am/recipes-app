import type { FC } from "react";

import styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => (
  <div className={styles["page__loader"]}>
    <h1 className={styles["page__loader--h1"]}>Cooking in progress...</h1>
    <div className={styles.cooking}>
      <div className={styles["cooking__bubble"]} />
      <div className={styles["cooking__bubble"]} />
      <div className={styles["cooking__bubble"]} />
      <div className={styles["cooking__bubble"]} />
      <div className={styles["cooking__bubble"]} />
      <div className={styles["cooking__area"]}>
        <div className={styles["cooking__area--sides"]}>
          <div className={styles["cooking__area--sides-pan"]} />
          <div className={styles["cooking__area--sides-handle"]} />
        </div>
        <div className={styles["cooking__area--pancake"]}>
          <div className={styles["cooking__area--pancake-pastry"]} />
        </div>
      </div>
    </div>
  </div>
);
