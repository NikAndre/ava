import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Check } from "lucide-react";
import { ModelDataTable } from "@/features/Models/ModelAnaliticalTable";
import { PeriodModelChart } from "@/features/Models/PeriodModelChart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

export const AnalysisTab = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "26px",
          alignItems: "center",
          width: "47%",
        }}
      >
        <p style={{ fontSize: "14px", minWidth: "180px" }}>Период</p>
        <Select>
          <SelectTrigger className="w-[165px]">
            <SelectValue placeholder="Период" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Период</SelectLabel>
              <SelectItem value="1">6M YTD</SelectItem>
              <SelectItem value="2">динамика</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <PeriodModelChart />
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
      <ModelDataTable />
    </>
  );
};
