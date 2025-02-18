import React, { FC } from "react";
import styles from "./HomePage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";

const HomePage: FC = () => {
  return (
    <div className={styles["page_wrapper"]}>
      <HeaderWidget />

      <main
        className={styles["content_wrapper"]}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px 34px",
        }}
      ></main>
    </div>
  );
};

export default HomePage;
