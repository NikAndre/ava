import { useFormik } from "formik";
import { Input } from "@/shared/components/ui/input.tsx";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/components/ui/button.tsx";
import { Calendar } from "@/shared/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shared/components/ui/popover"
import {ScenarioType} from "@/shared/store/slices/scenariosSlice/types.ts";
import {useState} from "react";
import {Checkbox} from "@/shared/components/ui/checkbox.tsx";

export const ScenarioForm = ({ data }: ScenarioType) => {
  const [date, setDate] = useState<Date>(data.endDate)
  const [formData, setDataForm] = useState({
      name: data.scenarioName,
      hasInitiatives: data.hasInitiatives,
      isEditable: data.isEditable,
  })

    console.log(data)

  return (
      <div className={'flex flex-col grow justify-between h-[100%]'}>
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "26px",
          alignItems: "center",
        }}
      >
        <label
          style={{ fontSize: "14px", minWidth: "180px", fontWeight: "500" }}
          htmlFor="firstName"
        >
            Название сценария
        </label>
        <Input
          type="text"
          className="w-[367px]"
          onChange={(value) => setDataForm(prev => ({ ...prev, name: value }))}
          value={formData.name}
        />
      </div>
    <Popover>
        <div className="flex gap-[26px] items-center">
            <label style={{ fontSize: "14px", minWidth: "180px", fontWeight: "500" }}>Конец сценария</label>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[367px] justify-between text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? format(date, "dd.MM.yyyy") : <span>Pick a date</span>}
                    <CalendarIcon />
                </Button>
            </PopoverTrigger>
        </div>
        <PopoverContent className="w-auto p-0" align="center" >
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
            />
        </PopoverContent>
    </Popover>
        <div
            style={{
                display: "flex",
                gap: "26px",
                alignItems: "center",
            }}
        >
            <label
                style={{ fontSize: "14px", minWidth: "180px", fontWeight: "500" }}
                htmlFor="firstName"
            >
                Учитывать инициативы
            </label>
            <Checkbox
                className="w-[36px] h-[36px]"
                onCheckedChange={(value) => setDataForm(prev => ({ ...prev, hasInitiatives: value }))}
                checked={formData.hasInitiatives}
            />
        </div>
        <div
            style={{
                display: "flex",
                gap: "26px",
                alignItems: "center",
            }}
        >
            <label
                style={{ fontSize: "14px", minWidth: "180px", fontWeight: "500" }}
                htmlFor="firstName"
            >
                Открыт на редактирование
            </label>
            <Checkbox
                className="w-[36px] h-[36px]"
                onCheckedChange={(value) => setDataForm(prev => ({ ...prev, isEditable: value }))}
                checked={formData.isEditable}
            />
        </div>
    </form>
      <div style={{ display: "flex", alignItems: "center", gap: "26px", marginTop: 'auto' }}>
        <Button variant={"default"}>Сохранить</Button>
        <Button variant={"destructive"}>Удалить сценарий</Button>
        <Button variant={"success"}>Утвердить как бюджет</Button>
      </div>
</div>
  );
};
