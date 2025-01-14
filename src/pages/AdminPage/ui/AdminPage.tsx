import React, {FC} from "react";
import styles from "./AdminPage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";
import {AdminWidget} from "@/widgets/AdminWidget";

const AdminPage: FC = () => {
  return (
    <div className={styles["page_wrapper"]}>
      <HeaderWidget />
      <AdminWidget />
    </div>
  );
};

export default AdminPage;
