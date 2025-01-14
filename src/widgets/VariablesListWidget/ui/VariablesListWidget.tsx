import React, { useState } from "react";
//import styles from "./VariablesPage.module.css";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Switch } from "@/shared/components/ui/switch";
import { VariablesDataTable } from "@/features/Variables/VariablesTable/ui/VariablesTable";

export const VariablesListWidget = () => {
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
          placeholder={"Введите название переменной или тег для поиска"}
        />
        <Button variant="default">Новая переменная</Button>
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
        <p>Мои переменные</p>
      </div>
      <VariablesDataTable />
    </>
  );
};
