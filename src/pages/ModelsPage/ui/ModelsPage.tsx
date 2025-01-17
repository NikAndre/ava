import React, { FC } from "react";
import styles from "./ModelsPage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  clearActiveModel,
  setActiveModel,
  setActiveTab,
  removeModelFromCheckedList,
} from "@/shared/store/slices/modelsSlice";
import { SquareX } from "lucide-react";
import { ModelsListWidget } from "@/widgets/ModelsListWidget/ui/ModelsListWidget";
import { ModelWidget } from "@/widgets/ModelWidget/ui/ModelWidget";

const ModelsPage: FC = () => {
  const activeModel = useSelector((store) => store.models.activeModel);
  const checkedModels = useSelector((store) => store.models.checkedModelsList);
  const activeTab = useSelector((store) => store.models.activeTab);
  const dispatch = useDispatch();

  const handleTabClick = (elem) => {
    dispatch(setActiveModel({ id: elem.id }));
    dispatch(setActiveTab({ name: elem.modelName }));
  };

  const handleAllTabClick = () => {
    dispatch(setActiveTab({ name: "all" }));
    dispatch(clearActiveModel());
  };

  const handleCloseBtnClick = (event, elem) => {
    event.stopPropagation();
    if (elem.id === activeModel?.id) {
      dispatch(clearActiveModel());
      dispatch(setActiveTab({ name: "all" }));
    }
    dispatch(removeModelFromCheckedList({ id: elem.id }));
  };

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
            <TabsTrigger onClick={handleAllTabClick} value="all">
              Все модели
            </TabsTrigger>
            {checkedModels?.map((elem) => {
              return (
                <TabsTrigger
                  onClick={() => handleTabClick(elem)}
                  key={elem.id}
                  value={elem.modelName}
                  style={{
                    position: "relative",
                  }}
                >
                  {elem.modelName}
                  <SquareX
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      height: "8px",
                      width: "8px",
                    }}
                    onClick={(e) => handleCloseBtnClick(e, elem)}
                  />
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        {!activeModel && <ModelsListWidget />}
        {activeModel && <ModelWidget />}
      </main>
    </div>
  );
};

export default ModelsPage;
