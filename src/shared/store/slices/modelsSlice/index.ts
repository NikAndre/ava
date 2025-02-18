import { createSlice } from "@reduxjs/toolkit";
import { ModelSliceType } from "@/shared/store/slices/modelsSlice/types.ts";

const initialState: ModelSliceType = {
  modelsList: [],
  activeModel: null,
  checkedModelsList: [],
  activeTab: "all",
  checkedVariablesList: [],
};

export const modelsSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    setModelsList: (state, action) => {
      if (action.payload?.length) {
        state.modelsList = action.payload;
      }
    },
    setActiveModel: (state, action) => {
      if (action.payload.id) {
        const model = [...state.modelsList].find(
          (elem) => elem.id === action.payload.id,
        );
        state.activeModel = model || null;
      }
    },
    addModelToCheckedList: (state, action) => {
      if (action.payload.model.id) {
        const isInList = [...state.checkedModelsList].find(
          ({ id }) => id === action.payload.model.id,
        );
        const newModelsList = isInList
          ? [...state.checkedModelsList]
          : [...state.checkedModelsList, action.payload.model];

        state.checkedModelsList = newModelsList;
      }
    },
    removeModelFromCheckedList: (state, action) => {
      const newCheckedArray = state.checkedModelsList?.filter(
        (elem) => elem.id !== action.payload.id,
      );

      state.checkedModelsList = newCheckedArray;
    },
    clearActiveModel: (state) => {
      state.activeModel = null;
    },
    setActiveTab: (state, action) => {
      const { modelName } = action.payload;

      const isInChecked = state.checkedModelsList?.find(
        ({}) => name !== modelName,
      );

      if (modelName && isInChecked) {
        state.activeTab = modelName;
      }
    },
    addMetricToCheckedList: (state, action) => {
      if (action.payload.id) {
        const metric = [...state.checkedVariablesList.metrics].filter(
          (elem) => elem.id === action.payload.id,
        );
        const newVariableList = metric
          ? [...state.checkedVariablesList]
          : [...state.checkedVariablesList, metric];

        state.checkedVariablesList = newVariableList;
      }
    },
    removeMetricFromCheckedList: (state, action) => {
      const newCheckedArray = state.checkedModelsList?.filter(
        (elem) => elem.id !== action.payload.id,
      );

      state.checkedModelsList = newCheckedArray;
    },
    clearMetricsCheckedList: (state) => {
      state.checkedModelsList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setModelsList,
  setActiveModel,
  addModelToCheckedList,
  removeModelFromCheckedList,
  setActiveTab,
  clearActiveModel,
  addMetricToCheckedList,
  removeMetricFromCheckedList,
  clearMetricsCheckedList,
} = modelsSlice.actions;

export default modelsSlice.reducer;
