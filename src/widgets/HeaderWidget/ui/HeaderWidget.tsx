import React, { useState, useRef } from "react";
import styles from "./HeaderWidget.module.css";
import { NavMenu } from "@/entities/NavMenu/ui/NavMenu";
import { MailWarning } from "lucide-react";
import { LINK_PROFILE } from "@/app/router/constants";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useClickAway } from "@/shared/hooks/useClickAway";

export const HeaderWidget: React.FC = () => {
  const [notificationIsOpen, setNotificationIsOpen] = useState<boolean>(false);
  const notifyRef = useRef();

  const toggleNotification = () => setNotificationIsOpen((prev) => !prev);

  useClickAway({
    refElement: notifyRef,
    condition: notificationIsOpen,
    setCondition: setNotificationIsOpen,
  });

  return (
    <header className={`${styles["header-widget"]}`}>
      <div className={styles["header-widget__wrapper"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link className={styles["profile_link"]} to={LINK_PROFILE}>
            DZ
          </Link>
          <NavMenu />
        </div>
        <MailWarning
          style={{ cursor: "pointer" }}
          onClick={toggleNotification}
        />
        {notificationIsOpen && (
          <div
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              height: "100vh",
              width: "100vw",
              zIndex: "100",
            }}
            className={"backdrop-blur-xs bg-white/30 "}
          >
            <div
              style={{
                position: "absolute",
                right: "18px",
                top: "84px",
                backgroundColor: "#FFFFFF",
                border: "1px solid hsla(213, 27%, 84%, 1)",
                borderRadius: "6px",
                width: "565px",
                height: "306px",
                padding: "25px 30px",
                display: "flex",
                flexDirection: "column",
              }}
              ref={notifyRef}
            >
              <p
                style={{
                  fontWeight: "500",
                  borderBottom: "1px solid hsla(214, 32%, 91%, 1)",
                  paddingBottom: "20px",
                }}
              >
                Уведомления
              </p>

              <div></div>

              <a
                href={"/"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#111111",
                  justifyContent: "space-between",
                  marginTop: "auto",
                  borderTop: "1px solid hsla(214, 32%, 91%, 1)",
                  paddingTop: "20px",
                }}
              >
                <p>Показать все уведомления </p>
                <ChevronRight />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
