import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ScenarioSliceType, ScenarioType} from "@/shared/store/slices/scenariosSlice/types.ts";

const initialState: ScenarioSliceType = {
    scenariosList: [],
    activeScenario: null,
    checkedScenariosList: [],
    activeTab: "all",
};

export const scenariosSlice = createSlice({
    name: "scenarios",
    initialState,
    reducers: {
        setScenariosList: (state, action) => {
            if (action.payload?.length) {
                state.scenariosList = action.payload;
            }
        },
        setActiveScenario: (state, action) => {
            if (action.payload.id) {
                const variable = [...state.scenariosList].find(
                    (elem) => elem.id === action.payload.id,
                );
                state.activeScenario = variable || null;
            }
        },
        addScenarioToCheckedList: (state, action:PayloadAction<ScenarioType>) => {
            if (action.payload.id) {
                const isInList = [...state.checkedScenariosList].find(
                    (elem) => elem.id === action.payload.id,
                );
                const newVariableList = isInList
                    ? [...state.checkedScenariosList]
                    : [...state.checkedScenariosList, action.payload];

                state.checkedScenariosList = newVariableList || [];
            }
        },
        removeScenarioFromCheckedList: (state, action) => {
            const newCheckedArray = state.checkedScenariosList?.filter(
                (elem) => elem.id !== action.payload.id,
            );

            state.checkedScenariosList = newCheckedArray;
        },
        clearActiveScenario: (state) => {
            state.activeScenario = null;
        },
        setActiveTab: (state, action) => {
            const isInChecked = state.checkedScenariosList?.find(
                ({ name }) => name !== action.payload.name,
            );

            if (action.payload.name && isInChecked) {
                state.activeTab = action.payload.name;
            }
        },
    },
});

export const {
    setScenariosList,
    setActiveScenario,
    addScenarioToCheckedList,
    removeScenarioFromCheckedList,
    setActiveTab,
    clearActiveScenario,
} = scenariosSlice.actions;

export default scenariosSlice.reducer;
