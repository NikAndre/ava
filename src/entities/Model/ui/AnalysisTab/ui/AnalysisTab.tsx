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
        <p style={{ fontSize: "14px", }}>Период</p>
        <Select>
          <SelectTrigger className="w-[165px]">
            <SelectValue placeholder="Период" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Период</SelectLabel>
                <SelectItem value="3">1M</SelectItem>
                <SelectItem value="4">QTR</SelectItem>
              <SelectItem value="1">6M</SelectItem>
              <SelectItem value="2">YTD</SelectItem>
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
            marginLeft: "auto",
            width: "15%",
            maxWidth: "232px",
            height: "270px",
              padding: "16px 16px"
          }}
        >
          <CardHeader style={{ marginBottom: "16px", padding: "0" }}>
            <CardTitle >Метрика</CardTitle>
          </CardHeader>
          <CardContent style={{ padding: "0" }}>
            <ul>
              <li
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                    cursor: "pointer",
                }}
              >
                <p style={{
                    fontSize: '14px',
                    width: '158px',
                    padding: '8px 0',
                    borderBottom: "1px solid hsl(var(--border))",
                }}>paid base eop (BL)</p>
                <Check />
              </li>
              <li
                style={{
                  display: "flex",
                    width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                    cursor: "pointer",
                }}
              >
                <p
                    style={{
                    fontSize: '14px',
                    width: '158px',
                    padding: '8px 0',
                    borderBottom: "1px solid hsl(var(--border))",
                }}>pb prev m</p>
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
