import type { FC } from "react";

import styles from "./PageLoader.module.scss";

export const PageLoader: FC = () => <div className={styles["page-loader"]}>Loading...</div>;
