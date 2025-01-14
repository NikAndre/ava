import React from "react";
import {Input} from "@/shared/components/ui/input";
import {Button} from "@/shared/components/ui/button";
import {TagsTable} from "@/features/Admin/TagsTable";

export const TagsTab = () => {
  return (
    <div
      style={{
        maxWidth:'100%',
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
        <Button variant="default">Новый тег</Button>
      </div>
      <div style={{maxWidth: '57%'}}>
        <TagsTable />
      </div>
    </div>
  )
}