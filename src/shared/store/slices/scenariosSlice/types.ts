export type ScenarioType = {
    id: string;
    scenarioName: string;
    type: "автоматический" | "ручной";
    creationDate: string;
    startDate: string;
    endDate: string;
    isEditable: boolean;
    hasInitiatives: boolean
};

export type ScenarioSliceType = {
    scenariosList: ScenarioType[];
    activeScenario: null | ScenarioType;
    checkedScenariosList: ScenarioType[];
    activeTab: string;
};
