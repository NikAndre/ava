import {Input} from "@/shared/components/ui/input";
import {UsersTable} from "@/features/Admin/UsersTable";
import {Button} from "@/shared/components/ui/button";
import React from "react";

export const UsersTab = () => {

  return (
    <div
      style={{
        width:'100%',
        display: 'flex',
        flexDirection:'column',
        gap: '24px'
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Input
          type={"text"}
          placeholder={"Введите текст для поиска"}
        />
        <Button variant="default">Новый пользователь</Button>
      </div>
      <UsersTable />
    </div>
  )
}