import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Check } from "lucide-react";
import { ModelDynamicChart } from "@/features/Models/ModelDynamicChart";
import { data } from "../data/chartData.ts";
import { ModelDynamicTable } from "@/features/Models/ModelDynamicTable";

export const DynamicTab = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <ModelDynamicChart data={data} />
        <Card
          style={{
            width: "15%",
            height: "300px",
            paddingRight: "32px",
          }}
        >
          <CardHeader>
            <CardTitle>Метрика</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>paid base eop (BL)</p>
                <Check />
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>pb prev m</p>
                <Check />
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <ModelDynamicTable />
    </>
  );
};
