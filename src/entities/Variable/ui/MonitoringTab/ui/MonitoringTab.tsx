import {
    Select,
    SelectContent,
    SelectGroup, SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/shared/components/ui/select.tsx";
import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card.tsx";
import {ChartMisc} from "@/shared/components/custom/ChartMisc/ui/ChartMisc.tsx";
import {VariableMonitoringChart} from "@/features/Variables/VariableMonitoringChart";


export const MonitoringTab = () => {
    const [ method, setMethod ] = useState<string>()
  return (
    <>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <p>Type</p>
            <Select value={method} onValueChange={(value) => setMethod(value)}>
                <SelectTrigger className="w-[128px]">
                    <SelectValue placeholder="Select a Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Type</SelectLabel>
                        <SelectItem value="ml">ML</SelectItem>
                        <SelectItem value="average">average</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
            <VariableMonitoringChart />
            <Card style={{ width: "15%", height: "300px", paddingRight: "32px" }}>
                <CardHeader>
                    <CardTitle>Период</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul>
                        <ChartMisc  />
                    </ul>
                </CardContent>
            </Card>
        </div>
    </>
  );
};
