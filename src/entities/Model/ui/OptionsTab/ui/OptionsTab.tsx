import { ModelOptionsTable } from "@/features/Models/ModelOptionsTable";
import { Button } from "@/shared/components/ui/button";

const data = [
  {
    varId: "e12e21e2e21e",
    optionName: "paid base",
    viewPermission: false,
    changePermission: true,
    level: "1",
    type: "%",
  },
  {
    varId: "e12e2asda1e2e21e",
    optionName: "paid base2",
    viewPermission: false,
    changePermission: true,
    level: "1",
    type: "%",
  },
  {
    varId: "e12e2asda1esadsa2e21e",
    optionName: "paid base3",
    viewPermission: false,
    changePermission: true,
    level: "1",
    type: "%",
  },
];

export const OptionsTab = () => {
  return (
    <div
      style={{
        width: "886px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <ModelOptionsTable data={data} />
      <div style={{ display: "flex", gap: "26px" }}>
        <Button>Сохранить</Button>
        <Button variant={"destructive"}>Отменить</Button>
      </div>
    </div>
  );
};
