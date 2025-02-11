import { FC } from "react";
import styles from "./ProfilePage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";
import {Input} from "@/shared/components/ui/input";
import {Button} from "@/shared/components/ui/button";

const ProfilePage: FC = () => {
  return (
    <div className={styles["page_wrapper"]}>
      <HeaderWidget />

      <main
        className={styles["content_wrapper"]}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-between',
          gap: "20px",
          padding: "30px 34px",
        }}
      >
        <div>
          <div
            style={{
              width: '77px',
              height:'77px',
              borderRadius: "77px",
              background: "#E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: '16px',
              marginBottom: '46px'
            }}
          >DZ</div>
          <div className={styles['input_list_wrapper']}>
            <div className={styles['input_wrapper']}>
              <p>Имя пользователя</p>
              <Input value={''} />
            </div>
            <div className={styles['input_wrapper']}>
              <p>Логин</p>
              <Input value={''} />
            </div>
            <div className={styles['input_wrapper']}>
              <p>Роль</p>
              <Input value={''} />
            </div>
          </div>
        </div>
        <Button style={{width: 'fit-content'}} variant={'default'} >Сохранить</Button>
      </main>
    </div>
  );
};

export default ProfilePage;
