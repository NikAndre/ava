import { useState } from "react";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Switch } from "@/shared/components/ui/switch";
import { ModelsListTable } from "@/features/Models/ModelsListTable/ui/ModelsListTable";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog.tsx";

export const ModelsListWidget = () => {
  const [fieldChecked, setFieldChecked] = useState<boolean>(false);
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
        <Dialog>
          <DialogTrigger
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#111111",
              width: "fit-content",
              color: "white",
              whiteSpace: "nowrap",
              borderRadius: "6px",
              padding: "0 23px",
              fontSize: "14px",
            }}
          >
            Новая модель
          </DialogTrigger>
          <DialogContent style={{ width: "618px" }}>
            <DialogHeader>
              <DialogTitle>Создание новой модели</DialogTitle>
              <DialogDescription style={{ width: "464px", marginTop: "6px" }}>
                Это действие приведет к созданию новой модели в статусе
                “черновик” и автоматическому переходу в меню настройки.
              </DialogDescription>
            </DialogHeader>
            <div
              style={{
                display: "flex",
                marginTop: "38px",
                alignItems: "center",
              }}
            >
              <div style={{ width: "184px", fontWeight: "500" }}>
                Название модели
              </div>
              <Input style={{ width: "367px" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "30px",
              }}
            >
              <DialogClose>
                <Button variant={"outline"}>Отменить</Button>
              </DialogClose>
              <Button variant={"default"}>Продолжить</Button>
            </div>
          </DialogContent>
        </Dialog>
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
