import React from "react";
import styles from "./HeaderWidget.module.css";
import { NavMenu } from "@/entities/NavMenu/ui/NavMenu";
import {MailWarning} from 'lucide-react'
import {LINK_HOME} from "@/app/router/constants";

export const HeaderWidget: React.FC = () => {

  return (
    <header className={`${styles["header-widget"]}`}>
      <div className={styles["header-widget__wrapper"]}>
        <div
          style={{
            display: "flex",
            alignItems:'center'
          }}
        >
          <a
            href={LINK_HOME}
            style={{
              width:'35px',
              height: '35px',
              borderRadius: '30px',
              background: '#E2E8F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >DZ</a>
          <NavMenu/>
        </div>
        <MailWarning />
      </div>
    </header>
  );
};
