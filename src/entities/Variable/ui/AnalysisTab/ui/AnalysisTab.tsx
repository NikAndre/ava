import React, { useState } from "react";
//import styles from "./VariablesPage.module.css";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { AnaliticalLineChart } from "@/features/Variables/VariablesAnaliticalLineChart/ui/VariablesAnaliticalLineChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { useSelector } from "react-redux";
import { CompareBlock } from "./CompareBlock";
import { FactorBlock } from "./FactorBlock";
import { ModelingBlock } from "./ModelingBlock";
import { ChartMisc } from "@/shared/components/custom/ChartMisc/ui/ChartMisc";

const chartMiscData = [
  {
    title: "AC 2024",
    color: "#000000",
  },
  {
    title: "AC 2023",
    color: "#1A6B25",
  },
  {
    title: "AC 2025",
    color: "#0F9ED5",
  },
]

export const AnalysisTab = () => {
  const activeVariable = useSelector((store) => store.variables.activeVariable);
  const [activeTab, setActiveTab] = useState<string>("compare");
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <AnaliticalLineChart data={activeVariable.chartData} />
        <Card style={{ width: "15%", height: "300px", paddingRight: "32px" }}>
          <CardHeader>
            <CardTitle>Версии прогнозов</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              { chartMiscData.map(({title, color}) => <ChartMisc title={title} color={color} key={color+title} />) }
            </ul>
          </CardContent>
        </Card>
      </div>
      <Tabs
        defaultValue="compare"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-[400px]"
      >
        <TabsList style={{ gap: "10px" }}>
          <TabsTrigger value="compare">Сравнение</TabsTrigger>
          <TabsTrigger value="factor">Факторы</TabsTrigger>
          <TabsTrigger value="modeling">Моделирование</TabsTrigger>
        </TabsList>
      </Tabs>

      {activeTab === "compare" && <CompareBlock />}
      {activeTab === "factor" && <FactorBlock />}
      {activeTab === "modeling" && <ModelingBlock />}
    </>
  );
};
