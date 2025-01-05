import React, {FC} from "react";
import styles from "./ProfilePage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";

const ProfilePage: FC = () => {
  return (
    <div className={styles['page_wrapper']}>
      <HeaderWidget />

      <main className={styles['content_wrapper']} style={{ display:'flex', flexDirection:'column', gap: '20px', padding: '30px 34px'}}>

      </main>
    </div>
  );
};

export default ProfilePage;