import React from "react";
import styles from "./HeaderWidget.module.css";
import { NavMenu } from "@/entities/NavMenu/ui/NavMenu";
import { MailWarning } from "lucide-react";
import { LINK_PROFILE } from "@/app/router/constants";

export const HeaderWidget: React.FC = () => {
  return (
    <header className={`${styles["header-widget"]}`}>
      <div className={styles["header-widget__wrapper"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            className={styles["profile_link"]}
            href={LINK_PROFILE}
          >
            DZ
          </a>
          <NavMenu />
        </div>
        <MailWarning />
      </div>
    </header>
  );
};
