import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select"
import {AnaliticalDataTable} from "@/features/Variables/AnaliticalTable/ui/AnaliticalTable";
import {Button} from "@/shared/components/ui/button";

export const ModelingBlock = () => {
  return (
    <div style={{ display: "flex", gap: '20px', flexDirection: "column", width:'83%'}}>
      <div style={{ display: "flex", gap: '20px', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
          <p>Сценарий</p>
          <Select>
            <SelectTrigger className="w-[128px]">
              <SelectValue  placeholder="Select a scenario" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Scenario</SelectLabel>
                <SelectItem  value="FRC 1+11">FRC 1+11</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button >Утвердить как бюджет</Button>
      </div>
      <AnaliticalDataTable />

    </div>
);
};
