import React, { FC, useState } from "react";
import styles from "./VariablesPage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";
import { useSelector, useDispatch } from "react-redux";
import { VariablesListWidget } from "@/widgets/VariablesListWidget/ui/VariablesListWidget";
import { VariableWidget } from "@/widgets/VariableWidget/ui/VariableWidget";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  clearActiveVariable,
  setActiveVariable,
  setActiveTab,
  removeVariableFromCheckedList,
} from "@/shared/store/slices/variablesSlice";
import { SquareX } from "lucide-react";

const VariablesPage: FC = () => {
  const activeVariable = useSelector((store) => store.variables.activeVariable);
  const checkedVariables = useSelector(
    (store) => store.variables.checkedVariablesList,
  );
  const activeTab = useSelector((store) => store.variables.activeTab);
  const dispatch = useDispatch();

  return (
    <div className={styles["page_wrapper"]}>
      <HeaderWidget />

      <main
        className={styles["content_wrapper"]}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px 34px",
        }}
      >
        <Tabs defaultValue={"all"} value={activeTab} className="w-[400px]">
          <TabsList style={{ gap: "10px" }}>
            <TabsTrigger
              onClick={() => {
                dispatch(setActiveTab({ name: "all" }));
                dispatch(clearActiveVariable());
              }}
              value="all"
            >
              Все переменные
            </TabsTrigger>
            {checkedVariables?.map((elem) => {
              return (
                <TabsTrigger
                  onClick={(e) => {
                    dispatch(setActiveVariable({ id: elem.id }));
                    dispatch(setActiveTab({ name: elem.variableName }));
                  }}
                  key={elem.id}
                  value={elem.variableName}
                  style={{
                    position: "relative",
                  }}
                >
                  {elem.variableName}
                  <SquareX
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      height: "8px",
                      width: "8px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (elem.id === activeVariable?.id) {
                        dispatch(clearActiveVariable());
                        dispatch(setActiveTab({ name: "all" }));
                      }
                      dispatch(removeVariableFromCheckedList({ id: elem.id }));
                    }}
                  />
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {!activeVariable && <VariablesListWidget />}
        {activeVariable && <VariableWidget />}
      </main>
    </div>
  );
};

export default VariablesPage;
