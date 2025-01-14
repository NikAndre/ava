import React from "react";
import { Card, CardContent } from "@/shared/components/ui/card";
import { VariableAnaliticalBarChart } from "@/features/Variables/VariablesAnaliticalBarChart/ui/VariablesAnaliticalBarChart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

export const CompareBlock = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <VariableAnaliticalBarChart />
      <Card style={{ width: "15%" }}>
        <CardContent
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Baseline</p>
            <Select>
              <SelectTrigger className="w-[128px]">
                <SelectValue placeholder="Select a baseline" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Baseline</SelectLabel>
                  <SelectItem value="FRC 1+11">FRC 1+11</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Endline</p>
            <Select>
              <SelectTrigger className="w-[128px]">
                <SelectValue placeholder="Select a Endline" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Baseline</SelectLabel>
                  <SelectItem value="BU 2024">BU 2024</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>Type</p>
            <Select>
              <SelectTrigger className="w-[128px]">
                <SelectValue placeholder="Select a Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  <SelectItem value="perc">%</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
