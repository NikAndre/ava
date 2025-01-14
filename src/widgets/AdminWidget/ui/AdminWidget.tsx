import styles from "@/pages/AdminPage/ui/AdminPage.module.css";
import {Tabs, TabsList, TabsTrigger} from "@/shared/components/ui/tabs";
import React, {useState} from "react";
import {UsersTab} from "@/entities/Admin/UsersTab";
import {TagsTab} from "@/entities/Admin/TagsTab";

export const AdminWidget = () => {
  const [activeTab, setActiveTab] = useState<string>("stats");
  return (
    <main
      className={styles["content_wrapper"]}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "30px 34px",
      }}
    >
      <Tabs
        defaultValue="analysis"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-[400px]"
      >
        <TabsList style={{ gap: "10px" }}>
          <TabsTrigger value="stats">Статистика</TabsTrigger>
          <TabsTrigger value="users">Пользователи</TabsTrigger>
          <TabsTrigger value="metrics">Метрики</TabsTrigger>
          <TabsTrigger value="models">Модели</TabsTrigger>
          <TabsTrigger value="scenarios">Сценарии</TabsTrigger>
          <TabsTrigger value="tags">Теги</TabsTrigger>
        </TabsList>
      </Tabs>

      { activeTab === 'users' && <UsersTab />}
      { activeTab === 'tags' && <TagsTab />}

    </main>
  )
}