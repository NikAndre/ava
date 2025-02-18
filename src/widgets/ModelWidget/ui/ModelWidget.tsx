import { useState } from "react";
//import styles from "./VariablesPage.module.css";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { AnalysisTab } from "@/entities/Model/ui/AnalysisTab";
import { InformationTab } from "@/entities/Model/ui/InformationTab";
import { OptionsTab } from "@/entities/Model/ui/OptionsTab/ui/OptionsTab";
import { PermissionsTab } from "@/entities/Model/ui/PermissionsTab";
import {DynamicTab} from "@/entities/Model/ui/DynamicTab";

export const ModelWidget = () => {
  const [activeTab, setActiveTab] = useState<string>("analysis");
  return (
    <>
      <Tabs
        defaultValue="analysis"
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-[400px]"
      >
        <TabsList style={{ gap: "10px" }}>
          <TabsTrigger value="analysis">Анализ</TabsTrigger>
          <TabsTrigger value="dynamic">Динамика</TabsTrigger>
          <TabsTrigger value="options">Настройка</TabsTrigger>
          <TabsTrigger value="information">Информация</TabsTrigger>
          <TabsTrigger value="permissions">Доступы</TabsTrigger>
        </TabsList>
      </Tabs>

      {activeTab === "analysis" && <AnalysisTab />}
      {activeTab === "dynamic" && <DynamicTab />}
      {activeTab === "information" && <InformationTab />}
      {activeTab === "options" && <OptionsTab />}
      {activeTab === "permissions" && <PermissionsTab />}
    </>
  );
};
