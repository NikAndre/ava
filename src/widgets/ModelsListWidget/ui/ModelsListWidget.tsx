import React, { useState } from "react";
//import styles from "./VariablesPage.module.css";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Switch } from "@/shared/components/ui/switch";
import { ModelsListTable } from "@/features/Models/ModelsListTable/ui/ModelsListTable";

export const ModelsListWidget = () => {
  const [fieldChecked, setFieldChecked] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Input
          type={"text"}
          placeholder={"Введите название модели или тег для поиска"}
        />
        <Button variant="default">Новая модель</Button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <Switch
          checked={fieldChecked}
          onCheckedChange={() => setFieldChecked((field) => !field)}
        />
        <p>Мои модели</p>
      </div>
      <ModelsListTable />
    </>
  );
};
