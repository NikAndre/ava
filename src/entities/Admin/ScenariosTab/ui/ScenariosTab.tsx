import {Tabs, TabsList, TabsTrigger} from "@/shared/components/ui/tabs.tsx";
import {
    clearActiveScenario,
    removeScenarioFromCheckedList,
    setActiveTab,
    setActiveScenario
} from "@/shared/store/slices/scenariosSlice";
import {SquareX} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {ScenarioType} from "@/shared/store/slices/scenariosSlice/types.ts";
import {ScenariosList} from "@/entities/Scenario/ScenariosList";

export const ScenariosTab = () => {
    const activeScenario = useSelector((store) => store.scenarios.activeScenario);
    const checkedScenarios = useSelector(
        (store) => store.scenarios.checkedScenariosList,
    );
    const activeTab = useSelector((store) => store.scenarios.activeTab);
    const dispatch = useDispatch();

  return (
        <>
            <Tabs defaultValue={"all"} value={activeTab} className="w-[400px]">
                <TabsList style={{ gap: "10px" }}>
                    <TabsTrigger
                        onClick={() => {
                            dispatch(setActiveTab({ name: "all" }));
                            dispatch(clearActiveScenario());
                        }}
                        value="all"
                    >
                        Все сценарии
                    </TabsTrigger>
                    {checkedScenarios?.map((elem:ScenarioType) => {
                        return (
                            <TabsTrigger
                                onClick={() => {
                                    dispatch(setActiveScenario({ id: elem.id }));
                                    dispatch(setActiveTab({ name: elem.scenarioName }));
                                }}
                                key={elem.id}
                                value={elem.scenarioName}
                                style={{
                                    position: "relative",
                                }}
                            >
                                {elem.scenarioName}
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
                                        if (elem.id === activeScenario?.id) {
                                            dispatch(clearActiveScenario());
                                            dispatch(setActiveTab({ name: "all" }));
                                        }
                                        dispatch(removeScenarioFromCheckedList({ id: elem.id }));
                                    }}
                                />
                            </TabsTrigger>
                        );
                    })}
                </TabsList>
            </Tabs>
            <ScenariosList />
        </>
  );
};
